import { getConfigMapping } from './initialization';
import { appConfig } from './configuration';
import { initDb } from './db';
import { initCore, rulesEntity } from './core';
import { ServerOptions, startupServer } from './server';

import { BaseUser, Token } from './core/components/authentication';

import { User, setupAppDomain, protectedRoutes, loadData } from './app-domain';

export const startup = async () => {
  const configMapping = getConfigMapping();

  // extend config by extensions configurations
  const config = appConfig(configMapping);

  const rules = rulesEntity(config);
  const entities = [User ? User : BaseUser, Token, rules];
  const db = await initDb(config, entities);

  const serverOptions: ServerOptions = {
    config: config,
    db: db,
    core: initCore,
    user: User,
    protectedRoutes: protectedRoutes,
    appDomain: setupAppDomain,
    loadData: loadData,
  };

  startupServer(serverOptions);
};
