'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favoritebooks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  favoritebooks.init({
    userid: DataTypes.INTEGER,
    bookid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'favoritebooks',
  });
  return favoritebooks;
};