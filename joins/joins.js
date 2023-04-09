const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(`postgres://postgres@localhost:5432/bookstore_project`);

//using prepared statements to avoid sql injection
async function getJoinedFavorites(id){
  const [results] = await sequelize.query(
    `SELECT users.id, username, title
    FROM users
    JOIN users_books ON users_books.userId = users.id
    JOIN books ON books.id = users_books.bookId where users.id = $1;`, 
    { 
      bind: [id],
      type: sequelize.QueryTypes.SELECT
    }
  );
  return results;
}

async function getJoinedReviews(id){
  const [results] = await sequelize.query(
    `SELECT users.id, username, title, review
    FROM users
    JOIN reviews ON reviews.userId = users.id
    JOIN books ON books.id = reviews.bookId
    WHERE users.id = $1;`, 
    { 
      bind: [id],
      type: sequelize.QueryTypes.SELECT
    }
  );
  return results;
}

exports.getJoinedFavorites = getJoinedFavorites;
exports.getJoinedReviews = getJoinedReviews;