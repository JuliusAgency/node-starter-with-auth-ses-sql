/* eslint-disable @typescript-eslint/no-unused-vars */
import { ModelType, rulesModel } from './model';

export { rulesModel };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const rulesDataSource = ({ sqlRepository }, type: ModelType) => {
  const getRules = async () => {
    const rulesCollection = rulesModel(type);
    return await sqlRepository(rulesCollection).find({ where: {} });
  };

  return { getRules };
};
