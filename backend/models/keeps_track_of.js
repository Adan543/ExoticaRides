'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class keeps_track_of extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      keeps_track_of.hasOne(models.customer, { foreignKey: 'customer_user_id' });
      keeps_track_of.hasOne(models.admin, { foreignKey: 'admin_user_id' });
    }
  }
  keeps_track_of.init({
    customer_user_id: {
      type: DataTypes.STRING,
      primaryKey: true
  },
    admin_user_id: {
      type: DataTypes.STRING,
      primaryKey: true
  }
  }, {
    sequelize,
    timestamps:false,
    tableName:'keeps_track_of',
    modelName: 'keeps_track_of',
  });
  return keeps_track_of;
};