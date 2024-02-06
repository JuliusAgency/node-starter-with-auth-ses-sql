import { initRules, ModelType } from '@juliusagency/authorization-ses-sql-set';

import { aclData } from './acl';
import { rbacData } from './rbac';

export const populateRules = ({ sqlRepository }, type: ModelType) => {
  const rules = type === ModelType.ACL ? aclData : rbacData;
  initRules({ sqlRepository }, type, rules);
};
