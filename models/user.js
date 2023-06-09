'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.books, {
        through: models.favoritebooks,
        foreignKey: `userid`,
        otherKey: `bookid`,
      })
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    favorites: DataTypes.ARRAY(Sequelize.STRING)
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};