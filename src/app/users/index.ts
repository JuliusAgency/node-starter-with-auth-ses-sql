/**
 * The extended User
 */
import { setupUserController } from './controller';
import { setupUserRouter } from './router';

export { User } from './model';

export const setupUsers = ({ sqlRepository, isAuthorized }) => {
  const controller = setupUserController({ sqlRepository });
  return setupUserRouter({ isAuthorized, controller });
};
