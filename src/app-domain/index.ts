/**
 * Application domains
 */
import { setupUsers } from './users';
import { setupExamples } from './examples';
import { aclData, rbacData } from './data/authorization-definitions';

export { User } from './users';

export const setupAppDomain = ({ router, core }) => {
  const usersRouter = setupUsers({ core });
  const examplesRouter = setupExamples({ core });
  router.use('/users', usersRouter);
  router.use('/examples', examplesRouter);
};

export const protectedRoutes = ['/users', '/examples'];

export const loadData = async ({ config, core }) => {
  console.log(core.db.name);
  if (config.test) {
    const modelType =
      config.modelType === 'ACL' ? core.ModelType.ACL : core.ModelType.RBAC;
    const rules = modelType === core.ModelType.ACL ? aclData : rbacData;

    await core.initRules(core.db, modelType, rules);
    console.log(`authorization rules for ${config.modelType} created`);
  }
};
