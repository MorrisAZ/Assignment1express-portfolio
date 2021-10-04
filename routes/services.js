var express = require('express');
var router = express.Router();


/*created 5 pages here*/
/* GET home page. */

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});



module.exports = router;
