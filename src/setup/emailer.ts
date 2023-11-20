import { configApp } from '../config/config';

import {
  EmailClient,
  TransportConfig,
} from '@juliusagency/simple-email-client';

export const setupEmailer = () => {
  const transport: TransportConfig = {
    name: configApp.transport.name,
    user: configApp.transport.user,
    password: configApp.transport.password,
  };
  return new EmailClient(transport);
};
