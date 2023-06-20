const { v4: uuidv4 } = require("uuid");
const productModel = require("./productModel");
const helperWrapper = require("../../helpers/wrapper");
const deleteFile = require("../../helpers/deleteFile");

module.exports = {
  getAllProduct: async (req, res) => {
    try {
      let { category, search, sort, order, page, limit } = req.query;
      page = Number(page) || 1;
      limit = Number(limit) || 3;
      category = category || "";
      search = search || "";
      sort = sort || "name";
      order = order || "asc";
      let offset = page * limit - limit;
      const totalData = await productModel.getCountProduct(category, search);
      const totalPage = Math.ceil(totalData / limit);
      if (page > totalPage) {
        offset = 0;
        page = 1;
      }
      const pageInfo = {
        page,
        totalPage,
        limit,
        totalData,
      };
      const result = await productModel.getAllProduct(
        category,
        search,
        sort,
        order,
        limit,
        offset
      );
      const newResult = result.map((item) => {
        const data = {
          ...item,
          size: item.size.split(","),
        };
        return data;
      });
      if (newResult.length < 1) {
        return helperWrapper.response(
          res,
          200,
          "Product not found",
          newResult,
          pageInfo
        );
      }

      return helperWrapper.response(
        res,
        200,
        "Success get product data",
        newResult,
        pageInfo
      );
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `Bad request (${error.message})`,
        null
      );
    }
  },
  getProductById: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await productModel.getProductById(id);
      if (result.length < 1) {
        return helperWrapper.response(
          res,
          200,
          `Product by id ${id} not found !`,
          result
        );
      }
      
      return helperWrapper.response(
        res,
        200,
        "Success get product by id",
        result
      );
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `Bad request (${error.message})`,
        null
      );
    }
  },
  postProduct: async (req, res) => {
    try {
      const { name, size, price, description, category } = req.body;
      const setData = {
        id: uuidv4(),
        name,
        image: req.file ? req.file.filename : null,
        size,
        price,
        description,
        category,
      };
      if (
        name.length < 1 ||
        size.length < 1 ||
        price.length < 1 ||
        description.length < 1 ||
        category.length < 1
      ) {
        return helperWrapper.response(
          res,
          400,
          "All input must be filled",
          null
        );
      }
      const result = await productModel.postProduct(setData);
      return helperWrapper.response(res, 200, "Success post product", result);
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `Bad request (${error.message})`,
        null
      );
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const checkId = await productModel.getProductById(id);
      if (checkId.length < 1) {
        return helperWrapper.response(
          res,
          404,
          `Product by id ${id} not found !`,
          null
        );
      }
      const { name, size, price, description, category } = req.body;
      const setData = {
        name,
        image: req.file ? req.file.filename : null,
        size,
        price,
        description,
        category,
        updatedAt: new Date(Date.now()),
      };
      Object.keys(setData).forEach((data) => {
        if (!setData[data]) {
          delete setData[data];
        }
      });
      if (req.file && checkId[0].image) {
        deleteFile(`public/uploads/product/${checkId[0].image}`);
      }
      const result = await productModel.updateProduct(setData, id);
      return helperWrapper.response(
        res,
        200,
        "Success update product data",
        result
      );
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `Bad request (${error.message})`,
        null
      );
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const checkId = await productModel.getProductById(id);
      if (checkId.length < 1) {
        return helperWrapper.response(
          res,
          404,
          `Product by id ${id} not found !`,
          null
        );
      }
      if (checkId[0].image) {
        deleteFile(`public/uploads/product/${checkId[0].image}`);
        console.log("delete");
      }
      const result = await productModel.deleteProduct(id);
      return helperWrapper.response(
        res,
        200,
        `Success delete product data by id ${id}`,
        result
      );
    } catch (error) {
      return helperWrapper.response(
        res,
        400,
        `Bad request (${error.message})`,
        null
      );
    }
  },
};
