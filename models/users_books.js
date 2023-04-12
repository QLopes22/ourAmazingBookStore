'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_books extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.users, { foreignKey: 'userId' });
      this.belongsTo(models.books, { foreignKey: 'bookId' });
    }
  }
  users_books.init({
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_books',
  });
  return users_books;
};