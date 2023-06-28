const midtransClient = require("midtrans-client");
require("dotenv").config();

// eslint-disable-next-line no-console
console.log({
  isProduction: process.env.MIDT_IS_PRODUCTION === "true",
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

const snap = new midtransClient.Snap({
  isProduction: process.env.MIDT_IS_PRODUCTION === "true",
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY,
});

module.exports = {
  post: (id, amount) =>
    new Promise((resolve, reject) => {
      const parameter = {
        transaction_details: {
          order_id: id,
          gross_amount: amount,
        },
        credit_card: {
          secure: true,
        },
      };

      snap
        .createTransaction(parameter)
        .then((result) => {
          resolve(result.redirect_url);
        })
        .catch((err) => {
          reject(err);
        });
    }),

  notif: (body) =>
    new Promise((resolve, reject) => {
      snap.transaction
        .notification(body)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    }),
};
