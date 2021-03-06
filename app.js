'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const binaryTreeRouter = require('./routes/binaryTree');
const stringHandlerRouter = require('./routes/stringHandler');
const companyTreeRouter = require('./routes/companyTree');

const path = require('path');
const app = express();

app.use(cors());
app.options('*', cors());
// Add headers for Access-Control-Allow-Origin
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/binaryTree', binaryTreeRouter);
app.use('/stringHandler', stringHandlerRouter);
app.use('/companyTree', companyTreeRouter);

module.exports = app;
