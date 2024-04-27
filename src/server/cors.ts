import cors from 'cors';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupCors = (config: any) => {
  return cors({
    credentials: config.credentials,
    origin: config.origin,
  });
};
