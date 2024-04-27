import {
  TransportConfig,
  EmailClient,
} from '@juliusagency/simple-email-client';

// Reexport from the packages

export type EmailerConfigOptions = {
  name: string;
  user: string;
  password: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const emailerSetup = (config: EmailerConfigOptions) => {
  // Wrap up the client
  const transport: TransportConfig = {
    name: config.name,
    user: config.user,
    password: config.password,
  };

  const emailClient = new EmailClient(transport);
  return emailClient;
};
