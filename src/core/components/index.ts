/**
 * Setup package
 */
import { setupAuthentication } from './authentication';
import { setupAuthorization, rulesEntity } from './authorization';

import { setupLogger } from './logger';
import { errorHandler, AppError, ResponseCode } from './error-handler';
// import * from './emailer';
export { rulesEntity };

export type CoreOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  app: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  router: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  passport: any;
  config: undefined;
  db: undefined;
  user: undefined;
};

export const initCore = async (options: CoreOptions) => {
  const { app, router, passport, config, db, user } = options;

  const { logger, httpLogger } = setupLogger(config);

  const authOptions = {
    app: app,
    router: router,
    passport: passport,
    config: config,
    db: db,
    User: user,
  };
  const { authRouter, userMngrRouter, authMiddleware } =
    setupAuthentication(authOptions);

  const authorizationOptions = {
    config: config,
    db: db,
  };

  const { isAuthorized, initRules, ModelType } =
    await setupAuthorization(authorizationOptions);

  const handler = {
    errorHandler,
    AppError,
    ResponseCode,
  };

  return {
    logger,
    httpLogger,
    handler,
    authRouter,
    userMngrRouter,
    authMiddleware,
    isAuthorized,
    db,
    initRules,
    ModelType,
  };
};
