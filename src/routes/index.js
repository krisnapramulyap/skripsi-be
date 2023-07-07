const express = require("express");
const Router = express.Router();

const userRoutes = require("../main/user/userRoutes");
const authRoutes = require("../main/auth/authRoutes");
const promoRouter = require("../main/promo/promoRoutes");
const productRoutes = require("../main/product/productRoutes");
const orderRoutes = require("../main/order/orderRoutes");
const dashboardRoutes = require("../main/dashboard/dashboardRoutes");

Router.use("/auth", authRoutes);
Router.use("/user", userRoutes);
Router.use("/promo", promoRouter);
Router.use("/product", productRoutes);
Router.use("/dashboard", dashboardRoutes);
Router.use("/order", orderRoutes);

module.exports = Router;
