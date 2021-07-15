'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quote extends Model {
    static associate(models) {
      Quote.belongsTo(models.User, {foreignKey: 'userID'})
    }
  };
  Quote.init({
    userID: DataTypes.INTEGER,
    quoteID: DataTypes.STRING,
    character: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Quote',
  });
  return Quote;
};