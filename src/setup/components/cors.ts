import cors from 'cors';

import express from 'express';
import { setupHeaders } from './headers';

export const setupCors = (app: express.Express) => {
  app.use(
    cors({
      credentials: true,
      origin: true,
    }),
  );
  app.use(setupHeaders());
};
