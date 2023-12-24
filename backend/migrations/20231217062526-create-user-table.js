'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * migration for user
     */
    await queryInterface.createTable('user', {
      user_id: {
        type: Sequelize.STRING(10),
        allowNull: false,
        primaryKey: true,
      },
      user_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        references: {
          model: 'user_credentials',
          key: 'user_name'
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * drop user
     */
    await queryInterface.dropTable('user');
  }
};
