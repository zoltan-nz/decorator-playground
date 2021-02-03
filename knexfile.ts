import dotenv from 'dotenv';
import { Knex } from 'knex';
import { env } from 'node:process';
import { Environment } from "./src/models/environment";

dotenv.config();

type ConfigType = { [Property in Environment]: Knex.Config };

const config: ConfigType = {
  test: {
    client: 'better-sqlite3',
    connection: {
      filename: './test.sqlite',
    },
    useNullAsDefault: true,
  },

  development: {
    client: 'better-sqlite3',
    connection: {
      filename: './dev.sqlite',
    },
    useNullAsDefault: true,
    debug: true,
  },

  production: {
    client: 'mysql2',
    connection: {
      database: 'decorator_playground',
      user: env.DB_USER,
      password: env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      extension: 'ts',
    },
  },
};

export default config;
