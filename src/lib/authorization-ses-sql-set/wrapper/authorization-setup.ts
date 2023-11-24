import {
  ModelType,
  Rbac,
  initRules,
  rulesRepository,
} from '../authorization-repo-sql';
import { setupAuthorization } from '@juliusagency/authorization-checker';

export { initRules, ModelType, Rbac };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupAuthorizationSet = ({ sqlRepository }, type: ModelType) => {
  const rulesRepo = rulesRepository({ sqlRepository }, type);
  // // Init the authorization package
  return setupAuthorization({ rulesRepo });
};
