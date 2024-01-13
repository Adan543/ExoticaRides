'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('car_info', {
      car_name: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      car_type: {
        type: Sequelize.STRING
      },
      engine_cc: {
        type: Sequelize.INTEGER
      },
      transmission: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      available:{
        type:Sequelize.STRING
      },
      car_rate: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('car_info');
  }
};