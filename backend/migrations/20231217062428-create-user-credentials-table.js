'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * migration for user_credentials
     */
    await queryInterface.createTable('user_credentials', {
      email: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * drop user_credentials
     */
    await queryInterface.dropTable('user_credentials');
  }
};

