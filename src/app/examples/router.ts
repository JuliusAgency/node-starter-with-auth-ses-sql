import { Router, Request, Response } from 'express';

// export const setupExamplesRouter = ({ isAuthorized }) => {
export const setupExamples = ({ isAuthorized }) => {
  const router = Router();

  router.get('/', (_req: Request, res: Response) => {
    res.json({ message: `Is live` });
  });

  // Setup 2 protected routes for test
  router.get('/first', (_req: Request, res: Response) => {
    res.json({ message: `You have reached the first protected route` });
  });

  router.get('/second', (_req: Request, res: Response) => {
    res.json({ message: `You have reached the second protected` });
  });

  // For test an authorization-rbac
  router.get('/test-rbac', isAuthorized('read'), (_req, res) => {
    res.json({ message: 'You are authorized to access this resource' });
  });

  // For test an authorization-acl
  router.get('/test-acl', isAuthorized('read', 'test-acl'), (_req, res) => {
    res.json({ message: 'You are authorized to access this resource' });
  });

  return router;
};
