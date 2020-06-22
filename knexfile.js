const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "leafs_prospects_development",
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
    client: "postgresql",
    connection: {
      database: "leafs_prospects_production",
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
};
