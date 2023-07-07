const express = require("express");
const Router = express.Router();

const dashboardController = require("./dashboardController");
const middlewareAuth = require("../../middleware/auth");

Router.get(
  "/",
  middlewareAuth.authentication,
  middlewareAuth.isAdmin,
  dashboardController.getDashboard
);

module.exports = Router;
