const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + "/migrations",
      tableName: "leafs_prospects_knex_migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + "/migrations",
      tableName: "leafs_prospects_knex_migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },
};
