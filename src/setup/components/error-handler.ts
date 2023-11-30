import { errorHandler } from '@juliusagency/simple-error-handler';
import { Request, Response, Router } from 'express';

export const setupErrorHandler = (router: Router) => {
  router.use((err: Error, _req: Request, res: Response) => {
    errorHandler(err, res);
  });
};
