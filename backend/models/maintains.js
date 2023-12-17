'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class maintains extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      maintains.hasOne(model.books, { foreignKey: 'license_no' });
      maintains.belongsTo(model.admin, {foreignKey: 'admin_user_no'})
    }
  }
  maintains.init({
    license_no: DataTypes.STRING,
    admin_user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'maintains',
  });
  return maintains;
};