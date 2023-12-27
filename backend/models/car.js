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
      car.belongsTo(models.books, { foreignKey: 'license_no' });
      car.belongsTo(models.maintains, { foreignKey: 'license_no' });
 
    }
  }
  car.init({
    license_no:{
      type: DataTypes.STRING,
      primaryKey: true
  },
    car_name: DataTypes.STRING
  }, {
    sequelize,
    timestamps:false,
    tableName:'car',
    modelName: 'car',
  });
  return car;
};