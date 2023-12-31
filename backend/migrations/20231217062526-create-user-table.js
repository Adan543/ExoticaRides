// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     /**
//      * migration for user
//      */
//     await queryInterface.createTable('user', {
//       user_id: {
//         type: Sequelize.STRING(10),
//         allowNull: false,
//         primaryKey: true,
//       },
//       email: {
//         type: Sequelize.STRING(50),
//         allowNull: false,
//         references: {
//           model: 'user_credentials',
//           key: 'email'
//         }
//       }
//     });
//   },

//   async down(queryInterface, Sequelize) {
//     /**
//      * drop user
//      */
//     await queryInterface.dropTable('user');
//   }
// };
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
      email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        references: {
          model: 'user_credentials',
          key: 'email'
        }
      }
    });

    // Trigger creation SQL statements
    const triggerCreationSQL = `
      CREATE TRIGGER before_insert_user
      BEFORE INSERT ON user
      FOR EACH ROW
      BEGIN
        DECLARE next_id INT;
        SET next_id = IFNULL((SELECT MAX(CAST(SUBSTRING(user_id, 4) AS SIGNED)) FROM user), 0) + 1;
        SET NEW.user_id = CONCAT('CS-', LPAD(next_id, 4, '0'));
      END;
    `;

    await queryInterface.sequelize.query(triggerCreationSQL);
  },

  async down(queryInterface, Sequelize) {
    /**
     * drop user
     */
    await queryInterface.sequelize.query('DROP TRIGGER before_insert_user');
    await queryInterface.dropTable('user');
  }
};
