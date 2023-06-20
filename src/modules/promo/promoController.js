const helperResponse = require("../../helpers/wrapper/index");
const promoModel = require("./promoModel");
const deleteFile = require("../../helpers/deleteFile");
const { v4: uuid } = require("uuid");

module.exports = {
  postPromo: async (req, res) => {
    try {
      const {
        name,
        discount,
        minTotalPrice,
        maxDiscount,
        promoCode,
        description,
        dateStart,
        dateEnd,
      } = req.body;
      console.log(req.body);

      const setData = {
        id: uuid(),
        name,
        discount,
        minTotalPrice,
        maxDiscount,
        promoCode,
        description,
        dateStart,
        dateEnd,
        image: req.file ? req.file.filename : null,
      };
      const result = await promoModel.postPromo(setData);
      //   console.log(result);
      return helperResponse.response(res, 200, "Success Create Data", result);
    } catch (error) {
      return helperResponse.response(
        res,
        400,
        `Bad Request(${error.message})`,
        null
      );
    }
  },

  getAllPromo: async (req, res) => {
    try {
      let { page, limit, search } = req.query;
      page = Number(page) || 1;
      limit = Number(limit) || 10;
      search = search || "";

      let offset = page * limit - limit;
      const totalData = await promoModel.getCountPromo(search);
      const totalPage = Math.ceil(totalData / limit);

      if (totalPage < page) {
        offset = 0;
        page = 1;
      }

      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData,
      };

      const result = await promoModel.getAllPromo(limit, offset, search);

      if (result.length < 1) {
        return helperResponse.response(res, 200, `Data not found !`, []);
      }

      return helperResponse.response(
        res,
        200,
        "Success get data",
        result,
        pageInfo
      );
    } catch (error) {
      return helperResponse.response(
        res,
        400,
        `Bad request (${error.message})`,
        null
      );
    }
  },

  getPromoById: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await promoModel.getPromoById(id);
      if (result.length < 1) {
        return helperResponse.response(
          res,
          200,
          `Data by id ${id} not found!`,
          result
        );
      }

      return helperResponse.response(res, 200, "Success get by id", result);
    } catch (error) {
      return helperResponse.response(
        res,
        400,
        `Bad request (${error.message})`,
        null
      );
    }
  },

  updatePromo: async (req, res) => {
    try {
      const { id } = req.params;
      const checkId = await promoModel.getPromoById(id);
      if (checkId.length < 1) {
        return helperResponse.response(
          res,
          404,
          `Data by id ${id} not found !`,
          null
        );
      }
      const {
        name,
        discount,
        minTotalPrice,
        maxDiscount,
        promoCode,
        description,
        dateStart,
        dateEnd,
      } = req.body;
      const setData = {
        name,
        discount,
        minTotalPrice,
        maxDiscount,
        promoCode,
        description,
        dateStart,
        dateEnd,
        image: req.file ? req.file.filename : null,
        updatedAt: new Date(Date.now()),
      };

      for (const data in setData) {
        if (!setData[data]) {
          delete setData[data];
        }
      }

      if (req.file && checkId[0].image) {
        deleteFile(`../../../public/uploads/promo/${checkId[0].image}`);
      }

      const result = await promoModel.updatePromo(setData, id);
      return helperResponse.response(res, 200, "Success update data", result);
    } catch (error) {
      return helperResponse.response(
        res,
        400,
        `Bad request (${error.message})`,
        null
      );
    }
  },

  deletePromo: async (req, res) => {
    try {
      const { id } = req.params;
      const checkId = await promoModel.getPromoById(id);
      if (checkId.length < 1) {
        return helperResponse.response(
          res,
          404,
          `Data by id ${id} not found !`,
          null
        );
      }
      if (checkId[0].image) {
        deleteFile(`../../../public/uploads/promo/${checkId[0].image}`);
      }

      const result = await promoModel.deletePromo(id);
      return helperResponse.response(res, 200, "Success delete data", result);
    } catch (error) {
      return helperResponse.response(
        res,
        400,
        `Bad request (${error.message})`,
        null
      );
    }
  },
};
