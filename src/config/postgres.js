require('dotenv').config();

module.exports = {
  local: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: true,
    pool: {
      max: 20,
      min: 0,
      acquire: 60000,
      idle: 10000
    }
  },
  refactor: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: true,
    pool: {
      max: 20,
      min: 0,
      acquire: 60000,
      idle: 10000
    }
  },
  development: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: true,
    pool: {
      max: 20,
      min: 0,
      acquire: 60000,
      idle: 10000
    }
  },
  staging: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: true,
    pool: {
      max: 20,
      min: 0,
      acquire: 60000,
      idle: 10000
    }
  },
  production: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: true,
    pool: {
      max: 20,
      min: 0,
      acquire: 60000,
      idle: 10000
    }
  },
};
