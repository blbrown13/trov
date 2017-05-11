var LocalStrategy    = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
// load up the user model
// var User       = require('../server/db.js'); // *NEED TO CHANGE FOR SQL DB
var configAuth = require('./auth');

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
    callbackURL     : configAuth.facebookAuth.callbackURL
  },
  // facebook will send back the token and profile
  function(token, refreshToken, profile, done) {
    console.log(`\n[TOKEN]: ${token}\n`);
    console.log('\n[PROFILE]: ', profile);
    console.log('\n');
    // checkToken();
    return done();

    // asynchronous
    // process.nextTick(function() {
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
    // });
  }));
};
