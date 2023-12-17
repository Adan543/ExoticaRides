'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class manufactured_by extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  manufactured_by.init({
    license_no: DataTypes.STRING,
    company_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'manufactured_by',
  });
  return manufactured_by;
};