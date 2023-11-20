import { Express } from 'express';

import { EmailClient } from '@juliusagency/simple-email-client';
import {
  AuthConfig,
  AuthSesSetSetupOptions,
  // BaseUser,
  authSetSetup,
} from '@juliusagency/auth-ses-sql-set';

import { configApp } from '../config';
import { sqlRepository } from '../lib/db-connection';

import { User } from '../app/users';

export const setupAuthentication = (app: Express, emailer: EmailClient) => {
  // Setup Auth with session and MongoDb
  const authConfig: AuthConfig = {
    app: app,
    User: User,
    sessionConfig: configApp.session,
  };

  const authSetupOptions: AuthSesSetSetupOptions = {
    authConfig: authConfig,
    emailer: emailer,
    repository: sqlRepository,
  };


  return authSetSetup(authSetupOptions);
};
