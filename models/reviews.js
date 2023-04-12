'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.users, { foreignKey: 'userId' });
      this.belongsTo(models.books, { foreignKey: 'bookId' });
    }
  }
  reviews.init({
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    review: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'reviews',
  });
  return reviews;
};