'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasOne(models.user_credential, { foreignKey: 'user_name' });
      user.belongsTo(models.customer, { foreignKey: 'customer_user_id' });
      user.belongsTo(models.admin, { foreignKey: 'admin_user_id' });
    }
  }
  user.init({
    user_id:{
      type: DataTypes.STRING,
      primaryKey: true
  },
    user_name: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    tableName: 'user',
    modelName: 'user',
  });
  return user;
};