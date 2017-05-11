var express = require("express");
var app = express();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// middleware
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('favicon'); //use this to add icon to webpage
// var cors = require('express-cors');
require('./src/config/passport.js')(passport);


// app.use(cors({
//   allowedOrigins: [
//     'localhost:3000', 'localhost:3000/auth/facebook'
//   ]
// }));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());


// ports
var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port " + port);

// routing to server
var server = require('./src/server/server.js');

// cross-site
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  // res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



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

app.options('/auth/facebook', function(req, res) {
  res.end();
});

// app.get('/handleFacebookAuth',  passport.authenticate('facebook', { scope: 'email' }));
//
// app.get('/auth/facebook',
//   passport.authenticate('facebook', { scope: 'email' }),
//   function(req, res){
//     console.log('inside /auth/facebook');
//     res.redirect('/auth/facebook/callback');
//     // The request will be redirected to Facebook for authentication, with
//     // extended permissions.
//   }
// );
//
// app.get('/auth/facebook/callback', passport.authenticate('facebook', {
//   successRedirect: '/',     // '/profile'
//   failureRedirect: '/',
// }));

app.get('/auth/facebook',
  passport.authenticate('facebook')
);

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}




module.exports = app;
