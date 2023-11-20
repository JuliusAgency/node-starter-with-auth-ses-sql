import { Express } from 'express';

import {
  AuthConfig,
  AuthSesSetSetupOptions,
  // BaseUser,
  authSetSetup,
} from '@juliusagency/auth-ses-sql-set';

import { configApp } from '../../config';
import { sqlRepository } from '../../lib/db-connection';

import { User } from '../../app/users';
import { setupEmailer } from './emailer';

export const setupAuthentication = (app: Express) => {
  const emailer = setupEmailer();

  // Setup Auth with session and Sql Db
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
