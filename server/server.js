// Dependencies 
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');

//Configuration/Middleware 
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Controllers 
const booksController = require('./controllers/book_controller');
app.use('/api/books',booksController);

//Listen 
app.listen(4500,()=>{
    console.log('Server is running on port 4500');
})