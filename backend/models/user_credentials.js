'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_credential extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_credential.hasOne(models.user, { foreignKey: 'user_name' });
    }
  }
  user_credential.init({
    user_name: {
      type: DataTypes.STRING,
      primaryKey: true
  },
    password: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    tableName: 'user_credential',
    modelName: 'user_credential',
  });
  return user_credential;
};