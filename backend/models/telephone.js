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
    customer_user_id: {
      type: DataTypes.STRING,
      primaryKey: true
  },
    tel_no: {
      type: DataTypes.INTEGER,
      primaryKey: true
  },
  }, {
    sequelize,
    timestamps:false,
    tableName:'telephone',
    modelName: 'telephone',
  });
  return telephone;
};