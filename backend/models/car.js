'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      car.hasOne(models.car_info, { foreignKey: 'car_name' });
      car.belongsTo(model.books, { foreignKey: 'license_no' });
      car.belongsTo(model.maintains, { foreignKey: 'license_no' });
 
    }
  }
  car.init({
    license_no: DataTypes.STRING,
    car_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'car',
  });
  return car;
};