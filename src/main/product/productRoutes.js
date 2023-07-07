const express = require("express");

const Router = express.Router();

const productController = require("./productController");
const middlewareAuth = require("../../middleware/auth");
const middlewareUpload = require("../../middleware/uploadProduct");

Router.get(
  "/",
  middlewareAuth.authentication,
  productController.getAllProduct
);
Router.get(
  "/:id",
  middlewareAuth.authentication,
  productController.getProductById
);
Router.post(
  "/",
  middlewareAuth.authentication,
  middlewareAuth.isAdmin,
  middlewareUpload,
  productController.postProduct
);
Router.patch(
  "/:id",
  middlewareAuth.authentication,
  middlewareAuth.isAdmin,
  middlewareUpload,
  productController.updateProduct
);
Router.delete(
  "/:id",
  middlewareAuth.authentication,
  middlewareAuth.isAdmin,
  productController.deleteProduct
);

module.exports = Router;
