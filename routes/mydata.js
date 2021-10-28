var express = require('express');
var router = express.Router();

/* GET fun facts about me page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Maneesh Devanaboyina' });
});

module.exports = router;