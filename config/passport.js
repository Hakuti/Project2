var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/gamer_tag and password
passport.use(new LocalStrategy(
  // Our user will sign in using an gamer_tag, rather than a "username"
  {
    usernameField: "gamer_tag"
  },
  function(gamer_tag, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        gamer_tag: gamer_tag
      }
    }).then(function(dbUser) {
      // If there's no user with the given gamer_tag
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect gamer_tag."
        });
      }
      // If there is a user with the given gamer_tag, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
