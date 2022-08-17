const express = require('express')
const router = require('express').Router();
const passport = require('passport');
const routine = require('../models/routine');
const User = require('../models/user');




// The root route renders our only view
router.get('/', function(req, res) {
  //UPDATE THIS
  // Where do you want to go for the root route
  // in the student demo this was res.redirect('/movies'), what do you want?
  // This could be a landing page, or just redirect to your main resource page which you'll have an a tag that makes 
  // a request to `/auth/google` route below
  res.redirect('/users')
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/users', // UPDATE THIS, where do you want the client to go after you login 
    failureRedirect : '/users' //  UPDATE THIS, where do you want the client to go if login fails
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function(){ //< - req.logout comes from passport, and what it does is destorys the cookie keeping track of the user!
    res.redirect('/users') // <---- UPDATE THIS TO WHERE YOU WANT THE USER TO GO AFTER LOGOUT
  });
})




module.exports = router;

