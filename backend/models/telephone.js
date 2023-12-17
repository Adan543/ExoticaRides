'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class telephone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  telephone.init({
    customer_user_id: DataTypes.STRING,
    tel_no: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'telephone',
  });
  return telephone;
};