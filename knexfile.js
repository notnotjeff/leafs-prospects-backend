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
      connectionString: 'postgres://fferwmoexosppd:b5a6f29edea7f1eecd5da1a876654d431ef7f4075c297cf5e3b1e4444fc8b8ac@ec2-34-233-226-84.compute-1.amazonaws.com:5432/d9fvonith8g0l7',
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
