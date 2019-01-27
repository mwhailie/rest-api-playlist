const express = require('express');
const User = require('../models/user');
const router = express.Router();

//add a new users to the db
//if get an error creating, call next in middleware
router.post('/users', function(req, res, next){
  // console.log(req.body);
  // var user = new User(req.body);
  // user.save();
  // Or, use mongoose function create
  User.create(req.body).then(function(user){
    res.send(user);
  }).catch(next);
});
//get a full list of users from db
router.get('/users', function(req, res, next){
  // console.log('GET request');
  User.find({}).then(function(users){
    res.send(users);
  });
});
//get a user with id from db
router.get('/users/:id', function(req, res, next){
  // console.log('GET request');
  User.findOne({_id:req.params.id}).then(function(user){
    res.send(user);
  });
});
//update a user in the db
// id : route parameter
router.put('/users/:id', function(req, res, next){
  // console.log(req.params.id);
  User.findOneAndUpdate({_id:req.params.id}, req.body).then(function(user){
    User.findOne({_id:req.params.id}).then(function(user){
      res.send(user)
    })
  }).catch(next);
});
//delete a user in the db
router.delete('/users/:id', function(req, res, next){
  // console.log(req.params.id);
  User.findOneAndDelete({_id:req.params.id}).then(function(user){
    res.send(user);
  });
  // res.send({type:'DELETE'});
});

module.exports = router;
