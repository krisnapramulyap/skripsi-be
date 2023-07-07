"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      idUser: DataTypes.STRING,
      idPromo: DataTypes.STRING,
      invoice: DataTypes.STRING,
      tax: DataTypes.INTEGER,
      subtotal: DataTypes.INTEGER,
      total: DataTypes.INTEGER,
      paymentMethod: DataTypes.STRING,
      paymentStatus: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
