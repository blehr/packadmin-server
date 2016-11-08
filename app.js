const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const flash = require('connect-flash');
const helmet = require('helmet');


const host = process.env.IP || 'localhost';

mongoose.connect(`mongodb://${host}/scoutAdmin`);

const Scout = require('./models/scout.server.model'); // the model
const User = require('./models/users.server.model');
const Leader = require('./models/leader.server.model');

const scoutRouter = require('./routes/scoutRoutes')(Scout); // pass model into routes
const users = require('./routes/users')(User);
const leaderRouter = require('./routes/leaderRoutes')(Leader);
const pdfRouter = require('./routes/pdfRoutes')();
const downloadRouter = require('./routes/downloadRoutes')();

const app = express();
app.options('*', cors()); // include before other routes
app.use(cors());
app.use(helmet());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(flash());

app.use('/scouts', scoutRouter);
app.use('/users', users);
app.use('/leaders', leaderRouter);
app.use('/pdf', pdfRouter);
app.use('/download', downloadRouter);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'));
});

// node bin/www env NODE_ENV=production this start production

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
    next(); // here
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
  next(); // here
});


module.exports = app;
