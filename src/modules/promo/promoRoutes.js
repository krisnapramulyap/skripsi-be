const express = require("express");
const Router = express.Router();
const middlewareAuth = require("../../middleware/auth");
const middlewareUpload = require("../../middleware/uploadPromo");
//========================================================
const promoController = require("./promoController");

Router.post(
  "/",
  middlewareAuth.authentication,
  middlewareAuth.isAdmin,
  middlewareUpload,
  promoController.postPromo
);

Router.get(
  "/",
  middlewareAuth.authentication,
  // middlewareAuth.isAdmin,
  promoController.getAllPromo
);

Router.get(
  "/:id",
  middlewareAuth.authentication,
  // middlewareAuth.isAdmin,
  promoController.getPromoById
);

Router.patch(
  "/:id",
  middlewareAuth.authentication,
  middlewareAuth.isAdmin,
  middlewareUpload,
  promoController.updatePromo
);

Router.delete(
  "/:id",
  middlewareAuth.authentication,
  middlewareAuth.isAdmin,
  promoController.deletePromo
);

module.exports = Router;
