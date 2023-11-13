import { DataSource } from 'typeorm';
import { configApp } from '../../../../config/config';

export const dataSource = new DataSource(configApp.sqlDb);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sqlRepository = (entity: any) => {
  return dataSource.getRepository(entity);
};
