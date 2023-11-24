import { ModelType, Rbac } from './model';
import { rulesDataSource } from './rules-data-source';
import { initRules } from './init-rules';

export { ModelType, Rbac };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const rulesRepository = ({ sqlRepository }, type: ModelType) => {
  return rulesDataSource({ sqlRepository }, type);
};
export { initRules };
