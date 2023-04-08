'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      books.belongsToMany(models.User, {
        through: models.favoritebooks
      })

    }
  }
  books.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    publish_date: DataTypes.INTEGER,
    genre: DataTypes.ARRAY(Sequelize.STRING),
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'books',
  });
  return books;
};