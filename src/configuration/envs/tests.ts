import { ExternalConfig, createConfig } from '../create';

export const createTestsConfig = (externalConfig?: ExternalConfig) => {
  return createConfig(
    {
      env: 'tests',

      // server
      port: process.env.PORT || '',
      baseUrl: process.env.BACKEND_BASE_URL || '',

      // options
      mocksEnabled: true,
    },
    externalConfig,
  );
};
