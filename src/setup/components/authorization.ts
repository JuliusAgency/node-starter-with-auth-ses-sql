import {
  // initRules,
  ModelType,
  setupAuthorizationSet,
} from '@juliusagency/authorization-ses-sql-set';

export { ModelType };

export const setupAuthorization = ({ sqlRepository }, type: ModelType) => {
  return setupAuthorizationSet({ sqlRepository }, type);
};
