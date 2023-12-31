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
      maintains.hasOne(models.books, { foreignKey: 'license_no' });
      maintains.belongsTo(models.admin, {foreignKey: 'admin_user_no'})
    }
  }
  maintains.init({
    license_no: {
      type: DataTypes.STRING,
      primaryKey: true
  },
    admin_user_id: {
      type: DataTypes.STRING,
      primaryKey: true
  },
  }, {
    sequelize,
    timestamps:false,
    tableName:'maintains',
    modelName: 'maintains',
  });
  return maintains;
};