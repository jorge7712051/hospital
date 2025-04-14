import { DataSourceOptions } from 'typeorm';

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ['dist/db/**/*.entity.{ts,js}'],
  migrations: ['dist/db/migrations/**/*.{ts,js}'],
  synchronize: false,
  migrationsRun: true,
};
