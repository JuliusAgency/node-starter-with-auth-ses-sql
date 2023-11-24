import { dataSource } from '../data-source/data-source';

export const connectSql = async () => {
  return dataSource
    .initialize()
    .then(() => {
      console.log('Connected to SQL Db!');
    })
    .catch((err) => {
      console.error("Can't connect to SQL Db :", err);
    });
};
