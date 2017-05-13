var LocalStrategy    = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var configAuth = require('./auth');
var db = require('../server/db.js');
var express = require('express');
var server = express.Router();

// load up the user model
// var User       = require('../server/db.js'); // *NEED TO CHANGE FOR SQL DB


// var FB = require('fb');
// fb = new FB.Facebook();

// checkToken = () => {
//   fb.getLoginStatus(function(response) {
//     if (response.status === 'connected') {
//       var accessToken = response.authResponse.accessToken;
//     }
//   });
// }

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
  // FACEBOOK ================================================================
  passport.use(new FacebookStrategy({
    clientID        : configAuth.facebookAuth.clientID,
    clientSecret    : configAuth.facebookAuth.clientSecret,
    callbackURL     : configAuth.facebookAuth.callbackURL,
    profileFields   : ['id', 'emails', 'name', 'displayName']
  },
  // facebook will send back the token and profile
  function(token, refreshToken, profile, done) {
    console.log(`\n[TOKEN]: ${token}\n`);
    console.log('\n[PROFILE]: ', profile);
    console.log('\n');
    // checkToken();
    // return done();

    // asynchronous
    process.nextTick(function() {
      var newUser = profile.displayName;
      var facebookId = profile.id;
      var email = profile.emails[0].value;

      console.log('*Displaying the following info...\n');
      console.log(`username: ${newUser}`);
      console.log(`facebookId: ${facebookId}`);
      console.log(`email: ${email}`);

      doDBQuery(newUser, facebookId, email);

    //   find the user in the database based on their facebook id
    //
    //     // if the user is found, then log them in
    //
    //       // if there is no user found with that facebook id, create them
    //       // set all of the facebook information in our user model -> CHANGE FOR SQL
    //      // set the users facebook id
    //        // we will save the token that facebook provides to the user
    //      // look at the passport user profile to see how names are returned
    //        // facebook can return multiple emails so we'll take the first
    //       // save our user to the database
    //
    //         // if successful, return the new user
    //         return done(null, newUser);
    //       });
    //     }
    //   });
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
            db.connection.query(`use trov`);
            db.connection.query(`INSERT INTO users (username, facebookId, email, isLoggedIn) VALUES ("${newUser}", "${facebookId}", "${email}", true)`);
          } else {
            db.connection.query(`INSERT INTO users (isLoggedIn) VALUES (true)`);
            console.log("\nUser exists!")
            console.log("User is logged-in!\n");
          }
        }
      }
    );
  };
};
