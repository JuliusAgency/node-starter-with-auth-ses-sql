import { configApp } from '../../config/config';

import {
  EmailerConfigOptions,
  emailerSetup,
} from '@juliusagency/simple-emailer';

export const setupEmailer = () => {
  const emailerConfig: EmailerConfigOptions = {
    name: configApp.emailer.name,
    user: configApp.emailer.user,
    password: configApp.emailer.password,
  };
  return emailerSetup(emailerConfig);
};
