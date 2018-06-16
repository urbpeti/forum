const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const cors = require('cors');

require('dotenv').config();

const {
  notFound,
  errorHandler,
  checkAuthHeaderSetUser,
  checkAuthHeaderSetUserUnAuthorized
} = require('./middlewares');

const auth = require('./auth');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(passport.initialize());

app.use(checkAuthHeaderSetUser);

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Commonity API!'
  });
});

app.use('/auth', auth);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
