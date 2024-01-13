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
      books.belongsTo(models.customer, { foreignKey: 'customer_user_id' });
      books.belongsTo(models.car, { foreignKey: 'license_no' });
    }
  }
  books.init({
    customer_user_id: {
      type: DataTypes.STRING,
      primaryKey: true
  },
    license_no: {type:DataTypes.STRING,primaryKey:true},
    booking_date: {type:DataTypes.DATE, primaryKey: true},
    due_date: {type:DataTypes.DATE,allowNull: false},
    return_date: DataTypes.DATE,
    deliver_location:{type:DataTypes.STRING,allowNull: false}
  }, {
    sequelize,
    timestamps:false,
    tableName:'books',
    modelName: 'books',
  });
  return books;
};