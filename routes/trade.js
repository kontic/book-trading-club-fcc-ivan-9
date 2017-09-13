var express = require('express');
var Book = require('../models/book');
var router = express.Router();

/* GET trade page. */
router.get('/', function(req, res, next) {
  if(req.isAuthenticated()){
    Book.find({}, function(err, books){
      if (err) throw err;
      res.render('trade', { 
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
        books: books
      });
    });
  }else{
    res.redirect('/');
  }
});

router.post('/', function(req, res){
  if(req.isAuthenticated()){
    if(req.body.purpose === 'ask_for_book'){
      Book.findOne({_id: req.body.book_id}, function(err, book){
        if (err) throw err;
        book.borrowed_by = req.user.name,
        book.borrowed = false,
        book.save().then(function(){
          if (err) return console.error(err);
          //---
          res.end("ok");
        });
      });
    }
    else if(req.body.purpose === 'approve-trade'){
      Book.findOne({_id: req.body.book_id}, function(err, book){
        if (err) throw err;
        book.borrowed = true,
        book.save().then(function(){
          if (err) return console.error(err);
          //---
          res.end("ok");
        });
      });
    }
    else if(req.body.purpose === 'decline-trade'){
      Book.findOne({_id: req.body.book_id}, function(err, book){
        if (err) throw err;
        book.borrowed_by = '',
        book.borrowed = false,
        book.save().then(function(){
          if (err) return console.error(err);
          //---
          res.end("ok");
        });
      });
    }
    
  }else{
    res.end('not_logged_in');
  }
  
});

module.exports = router;


