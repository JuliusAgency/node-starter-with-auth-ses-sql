/**
 *
 * The entry point of the config module.
 *
 * The idea here is to hint at every property the configuration
 * expects for JS and TS usage, increasing the Developer Experience (DX).
 * https://www.raulmelo.me/en/blog/best-practices-for-handling-per-environment-config-js-ts-applications
 */

import dotenv from 'dotenv';

import { createDevConfig } from './envs/dev';
import { createProdConfig } from './envs/prod';
import { createTestsConfig } from './envs/tests';
import { ExternalConfig } from './create';

dotenv.config();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const appConfig = (externalConfig?: ExternalConfig): any => {
  switch (process.env.NODE_ENV) {
    case 'prod':
      return createProdConfig(externalConfig);
    case 'dev':
      return createDevConfig(externalConfig);
    case 'tests':
      return createTestsConfig(externalConfig);
    default:
      throw new Error('Invalid NODE_ENV "${process.env.NODE_ENV}"');
  }
};
