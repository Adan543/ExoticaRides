'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      customer_user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
          model:'customer',
          key:'customer_user_id',
        }
      },
      license_no: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        references: {
          model:'car',
          key:'license_no',
        }
      },
      booking_date: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      due_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      return: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  }
};