import express, { Express, Router, Request, Response } from 'express';
import passport from 'passport';

import { setupCors } from './cors';
import { setupHeaders } from './headers';
import { CoreOptions } from '../core';

export type ServerOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  db: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  core: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  appDomain: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protectedRoutes: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loadData: any;
};

export const startupServer = async (options: ServerOptions) => {
  const config = options.config;

  const app: Express = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(setupCors(config));

  app.use(setupHeaders());

  const router = Router();

  const coreOptions: CoreOptions = {
    app: app,
    router: router,
    passport: passport,
    config: config,
    db: options.db,
    user: options.user,
  };

  // All core dependencies
  const core = await options.core(coreOptions);
  const protectedRoutes = options.protectedRoutes;
  app.use(protectedRoutes, core.authMiddleware);

  options.appDomain({
    router,
    core: core,
  });
  // Load initial or test data into database
  options.loadData({ config, core });

  const logger = core.logger;
  app.use(core.httpLogger);

  router.get('/', (_req: Request, res: Response) => {
    res.json({ message: `Is live` });
  });

  router.use('/auth', core.authRouter);
  router.use('/user-mngr', core.userMngrRouter);

  app.use(router);

  app.use(core.handler.errorHandler);

  app.listen(config.port, () => {
    logger.info(`⚡️[server]: Server is running
      at: ${config.baseUrl}:${config.port}
      in: ${config.env} environment`);
  });
};
