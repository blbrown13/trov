var express = require("express");
var app = express();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// middleware
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('favicon'); //use this to add icon to webpage
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./src/config/passport.js')(passport);


// ports
var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port " + port);

// routing to server
var server = require('./src/server/server.js');
app.use('/', server);

// serving client files
app.use(express.static('src/client'));

// ********************************************************************

app.get('/logout', function(req, res) {
  console.log('* /logout route called *');
  req.logout();
  res.redirect('/');
});

app.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true,
}));

app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',     // '/profile'
  failureRedirect: '/',
}));

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}




module.exports = app;
