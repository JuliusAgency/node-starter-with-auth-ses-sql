import { Router } from 'express';

export const setupUserRouter = ({ isAuthorized, controller }) => {
  const router = Router();
  router.get(
    '/',
    // isAuthorized('read', 'users'),
    isAuthorized('read'), // RBAC
    controller.getAllUsers, // ACL
  );
  router.get(
    '/:userId',
    // isAuthorized('read', 'users/user'),
    isAuthorized('read'),
    controller.getUserById,
  );
  return router;
};
