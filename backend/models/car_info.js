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
      car_info.belongsTo(models.car, { foreignKey: 'car_name' });
    }
  }
  car_info.init({
    car_name: DataTypes.STRING,
    car_type: DataTypes.STRING,
    engine_cc: DataTypes.STRING,
    transmission: DataTypes.STRING,
    car_rate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'car_info',
  });
  return car_info;
};