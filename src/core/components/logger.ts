import { LoggerFormatter, initHttpLogger } from '@juliusagency/http-logger';
import { LoggerOptions, initLogger } from '@juliusagency/simple-logger';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupLogger = (config: any) => {
  const loggerConfig: LoggerOptions = {
    loggerLevel: config.loggerLevel,
  };

  const logger = initLogger(loggerConfig);

  const formatter: LoggerFormatter = {
    token:
      ':remote-addr :method :url :status :res[content-length] - :response-time ms',
  };
  const httpLogger = initHttpLogger(logger, formatter);
  return { logger, httpLogger };
};
