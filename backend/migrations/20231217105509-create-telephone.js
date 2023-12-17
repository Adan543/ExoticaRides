'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('telephones', {
      customer_user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      tel_no: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('telephones');
  }
};