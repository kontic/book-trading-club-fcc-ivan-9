var express = require('express');
var Book = require('../models/book');
var router = express.Router();

/* GET my_books page. */
router.get('/', function(req, res, next) {
  if(req.isAuthenticated()){
    Book.find({added_by: req.user.name}, function(err, books){
      if (err) throw err;
      res.render('my_books', { 
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
        books: books
      });
    });
  }else{
    res.redirect('/');
  }
});

module.exports = router;



