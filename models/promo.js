'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class promo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  promo.init({
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    discount: DataTypes.STRING,
    image: DataTypes.STRING,
    minTotalPrice: DataTypes.INTEGER,
    maxDiscount: DataTypes.INTEGER,
    promoCode: DataTypes.STRING,
    description: DataTypes.STRING,
    dateStart: DataTypes.DATE,
    dateEnd: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'promo',
  });
  return promo;
};