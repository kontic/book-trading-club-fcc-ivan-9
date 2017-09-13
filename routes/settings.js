var express = require('express')
  , User = require('../models/user')
  , router = express.Router();

//render settings page
router.get('/', function(req, res, next) {
  if(req.isAuthenticated()){
    User.findOne({name: req.user.name}, function(err, one_user){
      if (err) throw err;
      res.render('settings', { 
        isAuthenticated: req.isAuthenticated(),
        user: req.user,
        full_name: one_user.full_name,
        city: one_user.city,
        state: one_user.state
      });
    });
  }else{
    res.redirect('/');
  }
  
});

//update stuff
router.post('/', function(req, res){
  User.findOne({name: req.user.name}, function(err, one_user){
    if (err) throw err;
    one_user.full_name = req.body.fullname;
    one_user.state = req.body.state;
    one_user.city = req.body.city;
    one_user.save(function (err) {
      if (err) return console.error(err);
      // saved!
      res.redirect('/');
    });
  });
});

module.exports = router;



