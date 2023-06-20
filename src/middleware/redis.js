const redis = require("../config/redis");
const helperWrapper = require("../helpers/wrapper");

module.exports = {
  getProductRedis: (req, res, next) => {
    redis.get(`getProduct:${JSON.stringify(req.query)}`, (error, result) => {
      if (!error && result !== null) {
        // eslint-disable-next-line no-console
        console.log("Data is in redis");
        const newResult = JSON.parse(result);
        return helperWrapper.response(
          res,
          200,
          "Success get data product",
          newResult.newResult,
          newResult.pageInfo
        );
      }
      // eslint-disable-next-line no-console
      console.log("No data in redis");
      next();
    });
  },
  getProductByIdRedis: (req, res, next) => {
    const { id } = req.params;
    redis.get(`getProduct:${id}`, (error, result) => {
      if (!error && result !== null) {
        // eslint-disable-next-line no-console
        console.log("Data is in redis");
        const newResult = JSON.parse(result);
        return helperWrapper.response(
          res,
          200,
          "Success get data product by id",
          newResult
        );
      }
      // eslint-disable-next-line no-console
      console.log("No data in redis");
      next();
    });
  },
  clearProductRedis: (req, res, next) => {
    redis.keys("getProduct:*", (error, result) => {
      if (result.length > 0) {
        result.forEach((item) => {
          redis.del(item);
        });
      }
      next();
    });
  },

  // Promo
  getPromoRedis: (req, res, next) => {
    redis.get(`getPromo:${JSON.stringify(req.query)}`, (err, result) => {
      if (!err && result !== null) {
        console.log("Data ada didalam redis");
        const newResult = JSON.parse(result);
        return helperWrapper.response(
          res,
          200,
          "Success get data",
          newResult.result,
          newResult.pageInfo
        );
      }
      console.log("Data tidak ada didalam redis");
      next();
    });
  },

  getPromoByIdRedis: (req, res, next) => {
    const { id } = req.params;

    redis.get(`getPromo:${id}`, (err, result) => {
      if (!err && result !== null) {
        console.log("Data ada didalam redis");
        const newResult = JSON.parse(result);
        return helperWrapper.response(
          res,
          200,
          "Success get data by id",
          newResult
        );
      }
      console.log("Data tidak ada didalam redis");
      next();
    });
  },

  clearPromoRedis: (req, res, next) => {
    redis.keys("getPromo:*", (err, result) => {
      if (result.length > 0) {
        // PROSES DELETE KEYS
        result.forEach((item) => {
          redis.del(item);
        });
      }
      next();
    });
  },
};
