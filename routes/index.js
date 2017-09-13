var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/all_books');
  // res.render('index', { 
  //   isAuthenticated: req.isAuthenticated(),
  //   user: req.user
  // });
});

module.exports = router;

