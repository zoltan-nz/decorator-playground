// Update with your config settings.

import { env } from 'node:process';

module.exports = {
  test: {
    client: 'sqlite3',
    connection: {
      filename: './test.sqlite3',
    },
  },

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'decorator-playground',
      user: env.DB_USER,
      password: env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  debug: true,
};
