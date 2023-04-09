const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const path = require('path')

const express = require('express');
const app = express();
const { Sequelize } = require("sequelize");
const { User, books } = require("./models")
const { getJoinedFavorites, getJoinedReviews } = require("./joins/joins");
const sequelize = new Sequelize(`postgres://postgres@localhost:5432/bookstore_project`);

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const server = http.createServer(app);

const db = require('./db');

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

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/allbooks', async (req, res) => {
    res.render('allbooks')
    // let bookList = await books.findAll()
    // res.render('allbooks', {bookList});
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

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});