'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('maintains', {
      license_no: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references:{
          model:'car',
          key: 'license_no'
        }
      },
      admin_user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references:{
          model:'admin',
          key: 'admin_user_id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('maintains');
  }
};