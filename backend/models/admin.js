'use strict';
const {Model} = require('sequelize');
const customer = require('./customer');
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      admin.hasOne(models.user, { foreignKey: 'user_id' });
      admin.belongsTo(models.keeps_track_of, { foreignKey: 'admin_user_id' });
      admin.hasMany(models.maintains, { foreignKey: 'admin_user_id' });
    }
  }
  admin.init({
    admin_user_id:{
      type: DataTypes.STRING,
      primaryKey: true
  },
    secret_key: DataTypes.STRING
  }, {
    sequelize,
    timestamps:false,
    tableName:'admin',
    modelName: 'admin',
  });
  return admin;
};