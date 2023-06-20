const connection = require("../../config/mysql");
// const { getOrderByUserId } = require("./orderController")

module.exports = {
  postOrder: (data) =>
    new Promise((resolve, reject) => {
      connection.query("INSERT INTO `order` SET ?", data, (err, result) => {
        if (!err) {
          const newResult = {
            id: result.insertId,
            ...data,
          };
          resolve(newResult);
        } else {
          reject(new Error(`SQL: ${err.sqlMessage}`));
        }
      });
    }),

  postOrderItem: (data) =>
    new Promise((resolve, reject) => {
      connection.query("INSERT INTO `orderItem` SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(`SQL: ${err.sqlMessage}`));
        }
      });
    }),

  getOrderByUserId: (idUser) =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM `order` WHERE idUser = ?",
        idUser,
        (error, result) => {
          if (!error) {
            resolve(result);
          } else {
            reject(new Error(`SQL: ${error.sqlMessage}`));
          }
        }
      );
    }),
  getOrderId: (id) =>
    new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM `order` WHERE id = ?",
        id,
        (error, result) => {
          if (!error) {
            resolve(result);
          } else new Error(`SQL:${error.sqlMessage}`);
        }
      );
    }),
  deleteOrder: (id) =>
    new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM `order` WHERE id=?",
        id,
        (error, result) => {
          if (!error) {
            resolve(id);
          } else {
            reject(new Error(`SQL : ${error.sqlMessage}`));
          }
        }
      );
    }),
};
