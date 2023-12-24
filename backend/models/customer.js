'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      customer.hasOne(models.user, { foreignKey: 'user_id' });
      customer.belongsTo(models.keeps_track_of, { foreignKey: 'customer_user_id' });
      customer.belongsTo(models.books, { foreignKey: 'customer_user_id' });
    }
  }
  customer.init({
    customer_user_id: DataTypes.STRING,
    CNIC: DataTypes.STRING,
    address: DataTypes.STRING,
    customer_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'customer',
  });
  return customer;
};