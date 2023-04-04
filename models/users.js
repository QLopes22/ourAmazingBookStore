'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    favorites: DataTypes.ARRAY(Sequelize.STRING)
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};