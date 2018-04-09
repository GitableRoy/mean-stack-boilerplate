'use strict'
const express = require('express');
const fs      = require('fs')
const port    = process.env.PORT || 3000;
if (process.env.NODE_ENV === 'production') require('dotenv').config();

// create database
require('./app/db/db').connect();

// create database routes
var users_router   = require('./app/db/routes/users');

// load handlebars content
let hbs = []
fs.readFile('./app/pages/content/home.json', 'utf8', (err, data)=> hbs.push(JSON.parse(data)));
fs.readFile('./app/pages/content/app.json',  'utf8', (err, data)=> hbs.push(JSON.parse(data)));

// create application
var app = express();
app.set('view engine', 'hbs');
app.set('views', 'app/pages');
app.get('/', (req, res)=> res.render('index'));
app.get('/layout/home', (req, res)=> res.render('layout/home', hbs[0]));
app.get('/layout/app',  (req, res)=> res.render('layout/app',  hbs[1]));
app.use(express.static('app/public'));
app.use(express.static('app/util'));

//connect database routes to application
app.use('/users', users_router);

// open a port for the application
app.listen(port);
console.log('http://localhost:' + port);

module.exports = app;
