var db = require("../models");
var myspotify = require("../public/js/spotifySearch.js");
//passport is the npm package we use for user authentication
var passport = require("../config/passport");

module.exports = function(app) {
  app.get("/api/:genre", function(req, res) {
    db.artists.findAll({}).then(result => console.log(result[1].artist_name));
    //myspotify.mySpotify("chance the rapper");
  });

  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.get("/api/game", function(req, res) {
    //select all the artists from the db of the genre selected on the dropdown
      db.artists.findAll({
        where: {genre: req.body.genre}
      }).then(function(dbartists){
        res.json(dbartists);
      })
    });


  // query spotify for all the artists related to selected genre
  app.get("/api", function(req, res) {
    db.artists.findAll({
      where: {genre: "Rap"}
    }).then(function(dbartists) {
      res.json(dbartists);

      //need to loop over dbartists and grab the artists' names then query spotify
      //for each and grab the song preview, album art for each
      for(var i =0; i < dbartists.length; i++){
        myspotify.mySpotify(dbartists[i].artist_name);
      }
    })
  });

  //routes for the user authentication / login
  //====================================================
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    //res.json("/members");

    //actually don't reroute to anywhere, the login is noted in the db and then the login/signup box is 
    //replaced with a drop down menu
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      username: req.body.username,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's username and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        username: req.user.username,
        id: req.user.id
      });
    }
  });

  
};
