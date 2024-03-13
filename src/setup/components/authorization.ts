import {
  initRules,
  ModelType,
  setupAuthorizationSet,
} from '@juliusagency/authorization-ses-sql-set';

import { configApp } from '../../config';

import { aclData } from '../authorization-definitions/acl';
import { rbacData } from '../authorization-definitions/rbac';

export const setupAuthorization = ({ sqlRepository }) => {
  const modelType = configApp.authorization_type;
  if (configApp.test) {
    const rules = modelType === ModelType.ACL ? aclData : rbacData;
    initRules({ sqlRepository }, modelType, rules);
  }
  return setupAuthorizationSet({ sqlRepository }, modelType);
};
