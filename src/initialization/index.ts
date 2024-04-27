export const getConfigMapping = () => {
  const dbMap = configDbMapping;
  return {
    ...dbMap,
    ...configCommonMapping['cors'],
    ...configCommonMapping['logger'],
    ...configCommonMapping['mailer'],
    ...configAuthMapping,
    ...configAuthorizationMapping,
  };
};

// TO DO: Definitions - move to json files
const configDbMapping = {
  type: '$$$$postgres',
  dbUrl: 'POSTGRES_URI',
  ssl: '$$$$false',
};

const configCommonMapping = {
  cors: {
    credentials: 'CORS_CREDENTIALS',
    origin: 'CORS_ORIGINAL',
  },
  logger: {
    loggerLevel: 'SIMPLE_LOGGER_LEVEL',
  },
  mailer: {
    clientUrl: 'CLIENT_URL',
    name: 'SMTP_NAME',
    user: 'SMTP_USERNAME',
    password: 'SMTP_PASSWORD',
  },
};

const configAuthMapping = {
  session: {
    name: 'SESSION_NAME',
    secret: 'SESSION_SECRET',
    saveUninitialized: 'SESSION_SAVE_UNINITIALIZED',
    cookie: {
      secure: 'COOKIE_SECURE',
      sameSite: 'COOKIE_SAME_SITE',
      httpOnly: 'COOKIE_HTTP_ONLY',
      maxAge: 'COOKIE_MAX_AGE',
    },
    resave: 'SESSION_RESAVE',
  },
  salt: 'SALT_WORK_FACTOR',
  loginFieldName: 'LOGIN_FIELD_NAME',
};

const configAuthorizationMapping = {
  modelType: 'AUTHORIZATION_MODEL_TYPE',
  test: 'TEST',
};
