const connection = require("../../config/mysql");

module.exports = {
  postPromo: (data) =>
    new Promise((resolve, reject) => {
      connection.query("INSERT INTO promo SET ?", data, (err, result) => {
        if (!err) {
          const newResult = {
            // id: result.insertId,
            ...data,
          };
          resolve(newResult);
        } else {
          reject(new Error(`SQL : ${err.sqlMessage}`));
        }
      });
    }),
  getAllPromo: (limit, offset, search) =>
    new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM promo WHERE name LIKE '%${search}%' LIMIT ? OFFSET ?`,
        [limit, offset],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(`SQL : ${err.sqlMessage}`));
          }
        }
      );
    }),
  getCountPromo: (search) =>
    new Promise((resolve, reject) => {
      connection.query(
        `SELECT COUNT(*) AS total FROM promo WHERE name LIKE '%${search}%'`,
        (err, result) => {
          if (!err) {
            resolve(result[0].total);
          } else {
            reject(new Error(`SQL : ${err.sqlMessage}`));
          }
        }
      );
    }),
  getPromoById: (id) =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM promo WHERE id = ?",
        id,
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(`SQL : ${error.sqlMessage}`));
          }
        }
      );
    }),
  updatePromo: (data, id) =>
    new Promise((resolve, reject) => {
      connection.query(
        "UPDATE promo SET ? WHERE id = ?",
        [data, id],
        (error) => {
          if (!error) {
            const newResult = {
              id,
              ...data,
            };
            resolve(newResult);
          } else {
            reject(new Error(`SQL : ${error.sqlMessage}`));
          }
        }
      );
    }),
  deletePromo: (id) =>
    new Promise((resolve, reject) => {
      connection.query("DELETE FROM promo WHERE id = ?", id, (error) => {
        if (!error) {
          resolve(id);
        } else {
          reject(new Error(`SQL : ${error.sqlMessage}`));
        }
      });
    }),
};
