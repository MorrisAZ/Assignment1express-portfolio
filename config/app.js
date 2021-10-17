

//installed 3rd party packages
let  createError = require('http-errors');
let  express = require('express');
let  path = require('path');
let  cookieParser = require('cookie-parser');
let  logger = require('morgan');

//import routes
let  indexRouter = require('../routes/index');
let  usersRouter = require('../routes/users');


//import routes created for 4 pages
let aboutRouter = require('../routes/about')
let servicesRouter = require('../routes/services')
let contactRouter = require('../routes/contact')
let projectsRouter = require('../routes/projects')
let ContactsRouter = require('../routes/contacts')


//database setup
let mongoose = require('mongoose');
let DB = require('./db');

//point mongoose to the DB uri
mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'connection error:'));
mongoDB.once('open', ()=>{
  console.log('Connected to mongoDB..')
});

let  app = express();

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');// express -e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './node_modules')));

//set routes
app.use('/', indexRouter);//home
app.use('/users', usersRouter);//users

//set routes for 4 pages created
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/services', servicesRouter);
app.use('/projects', projectsRouter);
app.use('/business-contacts-list',businessContactsRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: 'Error'});
});

module.exports = app;
