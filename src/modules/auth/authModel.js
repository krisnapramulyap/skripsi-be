const connection = require("../../config/mysql");

module.exports = {
  getDataConditions: (data) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT *, TIMESTAMPDIFF(MINUTE, NOW(), updatedAt) AS minuteDiff FROM user WHERE ?",
        data,
        (error, result) => {
          !error
            ? resolve(result)
            : reject(new Error("SQL : " + error.sqlMessage));
        }
      );
    });
  },
  updateDataUser: (data, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE user SET ? WHERE id = ?",
        [data, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              id,
              ...data,
            };
            resolve(newResult);
          } else {
            reject(new Error("SQL : " + error.sqlMessage));
          }
        }
      );
    });
  },
  register: (data) =>
    new Promise((resolve, reject) => {
      connection.query("INSERT INTO user SET?", data, (error, result) => {
        if (!error) {
          const newResult = {
            id: result.insertId,
            ...data,
          };
          delete newResult.password;
          resolve(newResult);
        } else {
          reject(new Error(`SQL:${error.sqlMessage}`));
        }
      });
    }),
  verifyUser: (data, id) =>
    new Promise((resolve, reject) => {
      connection.query(
        "UPDATE user SET status = ? WHERE id = ?",
        [data, id],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(`SQL : ${err.sqlMessage}`));
          }
        }
      );
    }),
  getUserByEmail: (email) =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM user WHERE email = ?",
        email,
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(`SQL: ${error.sqlMessage}`));
          }
        }
      );
    }),
};
