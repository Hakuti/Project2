var db = require("../models");
var myspotify = require("../public/js/spotifySearch.js");

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
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // query spotify for all the artists related to selected genre
  app.get("/api", function(req, res) {
    db.artists.findAll({
      where: {genre: "Rap"}
    }).then(function(dbartists) {
      res.json(dbartists);
    })
  });
};
