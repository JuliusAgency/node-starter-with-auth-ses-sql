/**
 * Load authorization rules from a definition,
 * when a rules management is not implemented.
 * Runs the initRules once only for each (ACl, RBAC) type.
 */

import { ModelType, rulesModel } from './model';

/**
 * Load a authorization definitions into a Db
 * @param type
 * @param data
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const initRules = async (
  { sqlRepository },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: ModelType,
  data: unknown,
) => {
  const model = rulesModel(type);
  await sqlRepository(model).save(data);
};
