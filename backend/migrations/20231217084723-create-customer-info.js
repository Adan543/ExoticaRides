'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customer', {
      customer_user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references:{
          model: 'user',
          key: 'user_id'
        }
      },
      CNIC: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      customer_name: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('customer');
  }
};