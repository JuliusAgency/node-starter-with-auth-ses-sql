import { errorHandler } from '@juliusagency/simple-error-handler';
import { Express, NextFunction, Request, Response } from 'express';

export const setupErrorHandler = (app: Express) => {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    errorHandler(err, req, res, next);
  });
};
