// const { Client } = require("pg");
// require("dotenv").config();

// const connection = new Client({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   // port: process.env.DB_PORT,
// });

// connection.connect((err) => {
//   if (err) {
//     throw err;
//   }

//   // eslint-disable-next-line no-console
//   console.log("You are now connected db mysql...");
// });

// module.exports = connection;

const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect((err) => {
  if (err) {
    throw err;
  }

  // eslint-disable-next-line no-console
  console.log("You are now connected db mysql...");
});

module.exports = connection;