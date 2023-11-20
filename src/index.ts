import bodyParser from 'body-parser';
import express, {
  Express,
  NextFunction,
  Request,
  Response,
  Router,
} from 'express';
import cors from 'cors';

import { configApp } from './config';
import { connect, sqlRepository } from './lib/db-connection';

import { setupExamplesRouter, setupUserRouter } from './app';
import { setupAuthentication } from './setup';

const app: Express = express();

app.use(bodyParser.json());

app.use(
  cors({
    credentials: true,
    origin: [process.env.BACKEND_BASE_URL || 'http://localhost:3005'],
  }),
);

app.use((_req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

connect().then(() => {
  // setup base packages
  const { authMiddleware, authRouter } = setupAuthentication(app);

  // Auth middleware usage
  // Define the protected routes
  const protectedRoutes = ['/examples', '/users'];
  app.use(protectedRoutes, authMiddleware);

  // Routers Setup
  const router = Router();
  router.get('/', (_req: Request, res: Response) => {
    res.json({ message: `Is live` });
  });

  // Auth router usage
  router.use('/auth', authRouter);
  router.use('/users', setupUserRouter({ sqlRepository }));
  router.use('/examples', setupExamplesRouter());

  // router.use('/users', setupUserRouter({ sqlRepository, isAuthorized }));
  // router.use('/examples', setupExamplesRouter({ isAuthorized }));

  app.use(router);

  const port = configApp.app.port;
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
});
