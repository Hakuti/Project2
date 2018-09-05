var db = require("../models");
//still using regualr html files with the login for now, just to test so we need path
var path = require("path");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      //if the user is already logged in send them to the pregame page to select a genre and start the game
      res.redirect("/pregame");
    } //otherwise send them to index to login or signup
      res.render("index");
  });

  //route to the game page
  app.get("/game", function(req, res) {
    /*if (req.user) {
      res.redirect("/game");
    }*/
      res.render("game");
  });


  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/pregame", isAuthenticated, function(req, res) {
    res.render("pregame")
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};