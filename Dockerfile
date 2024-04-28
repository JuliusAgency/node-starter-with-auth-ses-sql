# syntax = docker/dockerfile:1.2

# sudo docker build --build-arg=READ_FROM_REGISTRY=<GITHUB_REGISTRY_TOKEN> -t auth-ses-sql .
# sudo docker run -it --rm --name auth-ses-sql-starter auth-ses-sql

# Option 1
# Start MongoDB and Node (link Node to MongoDB container with legacy linking)

# docker run -d --name my-mongodb mongo
# docker run -d -p 3000:3000 --link my-mongodb:mongodb --name nodeapp danwahlin/node

# Option 2: Create a custom bridge network and add containers into it

# docker network create --driver bridge isolated_network
# docker run -d --net=isolated_network --name mongodb mongo
# docker run -d --net=isolated_network --name nodeapp -p 3000:3000 danwahlin/node

# Seed the database with sample database
# Run: docker exec nodeapp node dbSeeder.js

# Option 3: Use docker-compose for the orcestration.

FROM node:20-bullseye-slim

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

# Create app directory
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

# Will be run with user node
COPY --chown=node:node . .

COPY package.json .
RUN npm config set registry https://registry.npmjs.org

# For @juliusagency packages installation from the project folder
# For local build
# RUN --mount=type=secret,id=_npmrc,dst=./.npmrc

ARG READ_FROM_REGISTRY
# For build via GitHub action
RUN echo @juliusagency:registry=https://npm.pkg.github.com > ./.npmrc
RUN echo //npm.pkg.github.com/:_authToken=${READ_FROM_REGISTRY} >> ./.npmrc
RUN cat ./.npmrc
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build

ENV PORT 3005
ENV NODE_ENV prod

EXPOSE 3005

LABEL org.opencontainers.image.authors="JuliusAgency.com" 
LABEL org.opencontainers.image.source=https://github.com/juliusagency/node-starter-with-auth-ses-sql
LABEL org.opencontainers.image.description="Container image - Node Typescript Starter"
LABEL org.opencontainers.image.licenses=MIT


USER node
# CMD npm start 
CMD ["dumb-init", "node", "build/main/index.js"]
