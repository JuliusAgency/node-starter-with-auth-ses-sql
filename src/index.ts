import express, { Express, Router } from 'express';

import { configApp } from './config';
import { connect, sqlRepository } from './lib/db-connection';

import { setupExamplesRouter, setupUserRouter } from './app';
import { setupCors, setupAuthentication } from './setup';
import { ModelType } from './lib/authorization-ses-sql-set';
import { populateRules } from './setup/authorization-definitions/populate';

const app: Express = express();

app.use(express.json());
setupCors(app);

connect().then(() => {
  // setup base packages
  const { authMiddleware, authRouter } = setupAuthentication(app);

  // Auth middleware usage
  // Define the protected routes
  const protectedRoutes = ['/examples', '/users'];
  app.use(protectedRoutes, authMiddleware);

  // Once only - populate the authorization definitions to DB
  // Init the rules repository
  populateRules({ sqlRepository }, ModelType.RBAC);

  // const isAuthorized = setupAuthorizationSet({sqlRepository}, ModelType.RBAC);

  // Routers Setup
  const router = Router();
  // Auth router usage
  router.use('/auth', authRouter);
  router.use('/users', setupUserRouter({ sqlRepository }));
  router.use('/examples', setupExamplesRouter());

  // router.use('/users', setupUserRouter({ sqlRepository, isAuthorized }));
  // router.use('/examples', setupExamplesRouter({ isAuthorized }));

  app.use(router);

  const port = configApp.app.port;
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
});
