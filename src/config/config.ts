import dotenv from 'dotenv';
import { DataSourceOptions } from 'typeorm';
import {
  // BaseUser, // When the extended User is not defined
  Token,
  SessionConfig,
} from '@juliusagency/auth-ses-sql-set';

import { User } from '../app/users';
import { ModelType, rulesModel } from '@juliusagency/authorization-ses-sql-set';
import { LoggerOptions } from '@juliusagency/simple-logger';

dotenv.config();

const Rbac = rulesModel(ModelType.RBAC);
const Acl = rulesModel(ModelType.ACL);

export const configApp: Configuration = {
  app: {
    port: Number(process.env.PORT) || 3000,
  },
  session: {
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    saveUninitialized: process.env.SESSION_SAVE_UNINITIALIZED,
    cookie: {
      secure: process.env.COOKIE_SECURE,
      sameSite: process.env.COOKIE_SAME_SITE,
      httpOnly: process.env.COOKIE_HTTP_ONLY,
      maxAge: process.env.COOKIE_MAX_AGE,
    },
    resave: process.env.SESSION_RESAVE,
  },
  emailer: {
    name: 'gmail',
    user: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASSWORD,
  },
  logger: {
    loggerLevel: process.env.SIMPLE_LOGGER_LEVEL,
  },
  sqlDb: {
    type: 'postgres',
    url: process.env.POSTGRES_URI,
    ssl: false,
    entities: [User, Token, Rbac, Acl], //List of the existing tables
    synchronize: true,
  },
};

export interface Configuration {
  app: {
    port: number;
  };
  session: SessionConfig;
  emailer: {
    name: string;
    user: string;
    password: string;
  };
  logger: LoggerOptions;
  sqlDb: DataSourceOptions;
}
