import 'reflect-metadata';
import express, { Express, Router } from 'express';

import { ModelType } from '@juliusagency/authorization-ses-sql-set';
// import { populateRules } from './setup/authorization-definitions/populate';

// Setup packages and common features
import { configApp } from './config';
import { connect, sqlRepository } from './lib/db-connection';
import {
  setupCors,
  setupAuthentication,
  setupAuthorization,
  setupErrorHandler,
  setupLogger,
} from './setup';

// Setup the application domains
import { setupExamples, setupUser } from './app';

const app: Express = express();

app.use(express.json());
setupCors(app);

connect().then(() => {
  const { logger, httpLogger } = setupLogger();
  app.use(httpLogger);

  // setup base packages
  const { authMiddleware, authRouter } = setupAuthentication(app);

  // Auth middleware usage
  // Define the protected routes
  const protectedRoutes = ['/examples', '/users'];
  app.use(protectedRoutes, authMiddleware);

  // Once only - populate the authorization definitions to DB
  // Init the rules repository
  // populateRules({ sqlRepository }, ModelType.RBAC);
  // populateRules({ sqlRepository }, ModelType.ACL);

  const isAuthorized = setupAuthorization({ sqlRepository }, ModelType.RBAC);

  // Routers Setup
  const router = Router();
  // Auth router usage
  router.use('/auth', authRouter);

  router.use('/users', setupUser({ sqlRepository, isAuthorized }));
  router.use('/examples', setupExamples({ isAuthorized }));

  app.use(router);

  setupErrorHandler(router);

  const port = configApp.app.port;
  app.listen(port, () => {
    logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
});
