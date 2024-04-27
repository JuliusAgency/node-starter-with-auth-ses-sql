/**
 * Automatically, the TypeScript compiler will start to complain about env files,
 * forcing a developer to revisit the config file every time he adds a new prop and
 * preventing from forgetting to add it to an environment.
 */

export type AppConfig = {
  env: 'dev' | 'tests' | 'prod';

  // server
  port: string;
  baseUrl: string;

  // options
  mocksEnabled: boolean;
};
