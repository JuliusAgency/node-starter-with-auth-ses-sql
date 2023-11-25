import { Router } from 'express';

import { setupUserController } from './controller';

// export const setupUserRouter = ({ isAuthorized }) => {
export const setupUserRouter = ({ sqlRepository, isAuthorized }) => {
  const cnt = setupUserController({ sqlRepository });
  const router = Router();
  router.get(
    '/',
    // isAuthorized('read', 'users'),
    isAuthorized('read'),
    cnt.getAllUsers,
  );
  router.get(
    '/:userId',
    // isAuthorized('read', 'users/:userId'),
    isAuthorized('read'),
    cnt.getUserById,
  );
  return router;
};
