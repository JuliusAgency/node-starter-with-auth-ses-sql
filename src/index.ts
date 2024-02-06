import 'reflect-metadata';
import express, { Express, Router } from 'express';

import { populateRules } from './setup/authorization-definitions/populate';

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
import { setupExamples, setupUsers } from './app';

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
  const modelType = configApp.authorization_type;
  if (configApp.test) {
    populateRules({ sqlRepository }, modelType);
  }

  const isAuthorized = setupAuthorization({ sqlRepository }, modelType);

  // Routers Setup
  const router = Router();
  // Auth router usage
  router.use('/auth', authRouter);

  router.use('/users', setupUsers({ sqlRepository, isAuthorized }));
  router.use('/examples', setupExamples({ isAuthorized }));

  app.use(router);

  setupErrorHandler(app);

  const port = configApp.app.port;
  app.listen(port, () => {
    logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
});
