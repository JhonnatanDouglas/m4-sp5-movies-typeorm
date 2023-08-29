import 'reflect-metadata';
import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import path from 'path';
import { Movie } from './entities';

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}');
  const migrationPath: string = path.join(__dirname, './migrations/**.{ts,js}');

  const dbUrl: string | undefined = process.env.DATABASE_URL;
  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === 'test') {
    return {
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      entities: [Movie],
    };
  }

  if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

  return {
    type: 'postgres',
    url: dbUrl,
    synchronize: false,
    logging: false,
    entities: [entitiesPath],
    migrations: [migrationPath],
  };
};
const AppDataSource = new DataSource(dataSourceConfig());

export { AppDataSource };
