'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('car', {
      license_no: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      car_name: {
        type: Sequelize.STRING,
        references: {
          model: 'car_info',
          key: 'car_name'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('car');
  }
};