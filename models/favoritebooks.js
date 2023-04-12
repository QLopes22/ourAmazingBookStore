'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favoritebooks extends Model {}
  favoritebooks.init({
    userid: {
      type: DataTypes.INTEGER,
      references: {
        model: `User`,
        key: `id`,
      },
      },
    bookid: {
      type: DataTypes.INTEGER,
      references: {
        model: `books`,
        key: `id`,
      },
    },
  },
    {
    sequelize,
    modelName: 'favoritebooks',
  });
  return favoritebooks;
};