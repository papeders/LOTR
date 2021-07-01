'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Quotes', [
      {
          userID: '1',
          quoteID: '796',
          char: 'Arwen'
      },
      {
          userID: '2',
          quoteID: '300',
          char: 'Aragorn'
    }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
  }
};
