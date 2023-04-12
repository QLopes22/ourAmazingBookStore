'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('favoritebooks', [{
      userid: 1,
      bookid: 1,
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('favoritebooks', null, {});
  }
}; 