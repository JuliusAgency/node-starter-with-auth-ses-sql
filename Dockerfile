# syntax = docker/dockerfile:1.2

# sudo docker build -t auth-ses-sql .
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

FROM node:20-alpine3.18

# Create app directory
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

# Will be run with user node
COPY --chown=node:node . .

COPY package.json .
RUN npm config set registry https://registry.npmjs.org

# For @juliusagency packages installation from the project folder
RUN --mount=type=secret,id=_npmrc,dst=./.npmrc

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build

ENV PORT 3005
EXPOSE 3005

LABEL org.opencontainers.image.authors="JuliusAgency.com" 

USER node
# CMD npm start 
CMD ["node", "build/main/index.js"]