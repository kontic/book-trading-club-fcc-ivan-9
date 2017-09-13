var express = require('express');
var Book = require('../models/book');
var router = express.Router();

/* GET all_books page. */
router.get('/', function(req, res, next) {
  Book.find({}, function(err, books){
    if (err) throw err;
    res.render('all_books', { 
      isAuthenticated: req.isAuthenticated(),
      user: req.user,
      books: books
    });
  });
});

module.exports = router;


