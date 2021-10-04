var express = require('express');
var router = express.Router();

router.get('/', (reg, res) => {
res.send('hello!')
})

module.exports = router;