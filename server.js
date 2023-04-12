const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const path = require('path')

const express = require('express');
const app = express();
const { Sequelize } = require("sequelize");
const { User, books, favoritebooks } = require("./models")
const sequelize = new Sequelize(`postgres://postgres@localhost:5432/bookstore_project`);

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);

const db = require('./db');
const user = require('./models/user');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/API/Books', async (req, res) => {
    // res.render('home');
    const booksData = await books.findAll()
    // let id = req.params.id

    // console.log(booksData)
    res.send(booksData)
});

app.get('/API/Users', async (req, res) => {
    // res.render('home');
    const UsersData = await User.findAll()
    // let id = req.params.id

    // console.log(booksData)
    res.send(UsersData)
});

app.get('/API/Users/:id', async (req, res) => {
    // res.render('home');
    const {id} = req.params
    const UsersData = await User.findOne({
        where:{
            id:id
        }
    })
    res.json(UsersData)
});

app.get('/API/favoriteBooks/:id', async (req, res) => {
    // res.render('home');
    const {id} = req.params
    const favoriteBooksData = await favoritebooks.findAll({
        where:{userid:id}
    })
    // let id = req.params.id

    // console.log(booksData)
    res.send(favoriteBooksData)
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/landing/:id', async (req, res) => {
    const {id} =  req.params
    const userData = await User.findOne({
        where:{
            id:id
        }
    })
    res.render('landing', {
        locals: {user:userData}
    });
});

app.get('/favorites/:id', async (req, res) => {
    const {id} = req.params
    const userData = await User.findOne({
        where:{
            id:id
        },
    })
    const favoritesData = await favoritebooks.findAll({
        where:{
            userid:id
        }
    })
    let theBookData = []
    
    for (const favorite of favoritesData) {
        const bookData = await books.findOne({
            where:{
                id:favorite.bookid
            }
        })
        theBookData.push(bookData)
    }
    console.log(theBookData)
    res.render('favorites', {
        locals: {
            user:userData,
            favoritedBooks:theBookData

        }

    });
});

app.get('/favorites/:id', async (req, res) => {
    const {id} = req.params;
    const favorites = await getJoinedFavorites(id);
    console.log(favorites)
    res.send(favorites);
});

app.get('/reviews/:id', async (req, res) => {
    const {id} = req.params;
    const reviews = await getJoinedReviews(id);
    console.log(reviews)
    res.send(reviews);
})

app.get('/bookinfo/:id', async (req, res) => {
    const {id} =  req.params
    const booksData = await books.findOne({
        where:{
            id:id
        }
    })
    res.render('bookinfo', {
        locals: {book:booksData}
    });
});

app.get('/addToFavorites/:bookid/:userid', async (req, res) => {
    const {bookid, userid} = req.params
    const favorite = await favoritebooks.create({
        userid:userid,
        bookid:bookid
    })
    res.redirect(`http://127.0.0.1:3000/favorites/${userid}`)
})

app.get('/removeFromFavorites/:bookid/:userid', async (req, res) => {
    const {bookid, userid} = req.params
    const favorite = await favoritebooks.destroy({
        where: {
            userid:userid,
            bookid:bookid
        }
    })
    res.redirect(`http://127.0.0.1:3000/landing/${userid}`);
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});