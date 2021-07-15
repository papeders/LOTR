'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Quotes', [
      {
          userID: 1,
          quoteID: '5cd96e05de30eff6ebcce80c',
          character: '5cd99d4bde30eff6ebccfbe6'
      },
      {
          userID: 2,
          quoteID: '5cd96e05de30eff6ebcce80e',
          character: '5cd99d4bde30eff6ebccfbe6'
    }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
  }
};
