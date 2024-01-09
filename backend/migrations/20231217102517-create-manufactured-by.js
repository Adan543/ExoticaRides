'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('manufactured_by', {
      license_no: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      company_id: {
        type: Sequelize.INTEGER
        ,allowNull: false

      },
      manufacture_year: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('manufactured_by');
  }
};