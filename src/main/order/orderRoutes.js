const express = require("express");
const Router = express.Router();
const orderController = require("./orderController");

Router.post("/", orderController.postOrder);
Router.get("/:idUser", orderController.getOrderByUserId);
Router.delete("/:id", orderController.deleteOrder);

module.exports = Router;
