import { connectSql } from './sql-db';

export { sqlRepository } from './sql-db';

export const connect = async () => {
  return connectSql();
};
