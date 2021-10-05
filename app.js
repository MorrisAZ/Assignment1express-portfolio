//installed 3rd party packages
let  createError = require('http-errors');
let  express = require('express');
let  path = require('path');
let  cookieParser = require('cookie-parser');
let  logger = require('morgan');

//import routes
let  indexRouter = require('./routes/index');
let  usersRouter = require('./routes/users');

let aboutRouter = require('./routes/about')
let servicesRouter = require('./routes/services')
let contactRouter = require('./routes/contact')
let projectsRouter = require('./routes/projects')





let  app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');// express -e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

//set routes
app.use('/', indexRouter);//home
app.use('/users', usersRouter);//users

app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/services', servicesRouter);
app.use('/projects', projectsRouter);




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
