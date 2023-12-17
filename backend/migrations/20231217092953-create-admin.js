'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('admin', {
      admin_user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
          model:'user',
          key:'user_id',
        }
      },
      secret_key: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('admin');
  }
};