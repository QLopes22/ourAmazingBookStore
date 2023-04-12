'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('favoritebooks', {
      userid: {
        type: Sequelize.INTEGER,
        references: {
          model: `Users`,
          key: `id`,
        }
      },
      bookid: {
        type: Sequelize.INTEGER,
        references: {
          model: `books`,
          key: `id`,
        }
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('favoritebooks');
  }
};