import { DataSource, DataSourceOptions } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const initDb = async (config: any, entities?: any) => {
  const dbOptions: DataSourceOptions = {
    type: 'postgres',
    url: config.dbUrl,
    ssl: false,
    synchronize: true,
    entities: entities, //List of the existing tables [User, Token, model]
  };

  const dataSource = new DataSource(dbOptions);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sqlRepository = (entity: any) => {
    return dataSource.getRepository(entity);
  };

  const connectDb = async () => {
    return dataSource
      .initialize()
      .then(() => {
        console.log('Connected to SQL Db!');
      })
      .catch((err) => {
        console.error("Can't connect to SQL Db :", err);
      });
  };
  await connectDb();
  return sqlRepository;
};
