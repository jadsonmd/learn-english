var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var conn = require('./connection');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var vocabularyExpansion = require('./routes/vocabulary-expansion-route');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/vocabulary-expansion', vocabularyExpansion);


module.exports = app;
