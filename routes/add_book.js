var express = require('express');
var Book = require('../models/book');
var router = express.Router();

/* GET add_book page. */
router.post('/', function(req, res, next) {
  if(req.isAuthenticated()){
    var book = new Book({
      book_name: req.body.book_name,
      thumbnail: req.body.book_thumbnail,
      added_by: req.user.name
    });
    book.save().then(function(){
      //---
      res.end("ok");
    });
    
  }else{
    res.end('not_logged_in');
  }
});

module.exports = router;


