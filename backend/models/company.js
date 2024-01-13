'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      company.hasOne(models.manufactured_by, { foreignKey: 'company_id' });
    }
  }
  company.init({
    company_id:{
      type: DataTypes.INTEGER,
      primaryKey: true
  },
    company_name: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    tableName: 'company',
    modelName: 'company',
  });
  return company;
};