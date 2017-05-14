var LocalStrategy    = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var configAuth = require('./auth');
var db = require('../server/db.js');
var express = require('express');
var server = express.Router();

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new FacebookStrategy({
    clientID        : configAuth.facebookAuth.clientID,
    clientSecret    : configAuth.facebookAuth.clientSecret,
    callbackURL     : configAuth.facebookAuth.callbackURL,
    profileFields   : ['id', 'emails', 'name', 'displayName']
  },
  function(token, refreshToken, profile, done) {
    console.log('\n*Facebook Authentication:');
    console.log(`\n[TOKEN]: ${token}\n`);
    console.log('\n[PROFILE]: ', profile, '\n');

    process.nextTick(function() {
      var newUser = profile.displayName;
      var facebookId = profile.id;
      var email = profile.emails[0].value;

      console.log('*Displaying the following FB info...');
      console.log(`username: ${newUser}`);
      console.log(`facebookId: ${facebookId}`);
      console.log(`email: ${email}\n`);

      doDBQuery(newUser, facebookId, email);

      return done();
    });
  }));

  doDBQuery = function(newUser, facebookId, email){
    db.connection.query(`use trov`);
    db.connection.query(`SELECT * FROM users WHERE username = "${newUser}";`,
    function(error, result) {
      if(error) {
        console.log("Error querying")
      } else {
        if (result.length === 0) {
          // username doesn't exist
          console.log("User doesn't exist!")
          console.log("User created and logged-in!")
          db.connection.query(`use trov`);
          db.connection.query(`INSERT INTO users (username, facebookId, email, isLoggedIn) VALUES ("${newUser}", "${facebookId}", "${email}", true)`);
        } else {
          // username exists
          console.log("\nUser exists...")
          console.log("User is logged-in!\n");
          db.connection.query(`UPDATE users SET isLoggedIn=true WHERE username="${newUser}"`);
        }
      }
    }
  );
};
};
