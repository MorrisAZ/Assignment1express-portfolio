/*Express Portfolio
morris Zuniga
Student ID: 822704615*/

var express = require('express');
var router = express.Router();


/*created 5 pages here*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'main' });
});




module.exports = router;
