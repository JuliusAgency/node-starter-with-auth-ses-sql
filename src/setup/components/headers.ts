import { NextFunction, Request, Response } from 'express';

export const setupHeaders = () => {
  return (_req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
  };
};
