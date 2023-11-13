import { DataSourceOptions } from 'typeorm';
import dotenv from 'dotenv';
import { User } from '../users';
import {
  // BaseUser, // When the extended User is not defined
  Token,
  // TransportConfig,
  SessionConfig,
} from '@juliusagency/auth-ses-sql-set';

dotenv.config();

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
  // transport: {
  //   name: 'gmail',
  //   user: process.env.SMTP_USERNAME,
  //   password: process.env.SMTP_PASSWORD,
  // },
  sqlDb: {
    type: 'postgres',
    url: process.env.POSTGRES_URI,
    ssl: true,
    entities: [User, Token], //List of the existing tables
    synchronize: true,
  },
};

export interface Configuration {
  app: {
    port: number;
  };
  session: SessionConfig;
  // transport: TransportConfig;
  sqlDb: DataSourceOptions;
}
