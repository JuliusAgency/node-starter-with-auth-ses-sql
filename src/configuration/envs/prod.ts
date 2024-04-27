import { ExternalConfig, createConfig } from '../create';

export const createProdConfig = (externalConfig?: ExternalConfig) => {
  return createConfig(
    {
      env: 'prod',

      // server
      port: process.env.PORT || '',
      baseUrl: process.env.BACKEND_BASE_URL || '',
    },
    externalConfig,
  );
};
