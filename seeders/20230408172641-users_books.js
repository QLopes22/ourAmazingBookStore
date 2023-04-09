'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users_Books', [
      {
        userId: 1,
        bookId: 2
      },
      {
        userId: 2,
        bookId: 4
      },      
      {
        userId: 1,
        bookId: 4
      },      
      {
        userId: 2,
        bookId: 5
      },      
      {
        userId: 3,
        bookId: 2
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
