'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class car_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // car_info.belongsTo(models.car, { foreignKey: 'car_name' });
      car_info.belongsTo(models.car);
    }
  }
  car_info.init({
    car_name:{
      type: DataTypes.STRING,
      primaryKey: true
  },
    car_type: DataTypes.STRING,
    engine_cc: DataTypes.STRING,
    transmission: DataTypes.STRING,
    color:DataTypes.STRING,
    car_rate: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps:false,
    tableName:'car_info',
    modelName: 'car_info',
  });
  return car_info;
};