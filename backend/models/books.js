'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      books.hasOne(models.customer, { foreignKey: 'customer_user_id' });
      books.hasOne(models.car, { foreignKey: 'license_no' });
    }
  }
  books.init({
    customer_user_id: {
      type: DataTypes.STRING,
      primaryKey: true
  },
    license_no: DataTypes.STRING,
    booking_date: DataTypes.STRING,
    due_date: DataTypes.STRING,
    return: DataTypes.DATE
  }, {
    sequelize,
    timestamps:false,
    tableName:'books',
    modelName: 'books',
  });
  return books;
};