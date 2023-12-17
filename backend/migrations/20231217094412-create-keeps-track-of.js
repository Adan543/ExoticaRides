'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('keeps_track_of', {
      customer_user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
          model:'customer',
          key: 'customer_user_id'
        }
      },
      admin_user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
          model:'admin',
          key: 'admin_user_id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('keeps_track_of');
  }
};