console.log("hello");
//$(document).ready(function() {
    var keys = require("./keys");
    var Spotify = require("node-spotify-api");
    //initialize the spotify api with the keys 
    var spotify = new Spotify(keys.spotify);


    module.exports.mySpotify = function(){
        
        /*
        function sleep(milliseconds) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
              if ((new Date().getTime() - start) > milliseconds){
                break;
              }
            }
          }
        //pause for half a second to not break spotify api
        sleep(500);
        //now call spotify for the artist
        */
        spotify.search({
            type: "track", 
            query: "505",//grabed from the users inputed argument after the liri command
            limit: 1 //only grab one song please
        }, function(err,data) {
            //check for errors
            if(err){
                return console.log('error occurred: ' + err);
            }
            //now drill into the data, which is the response from the api
            var artist_data = JSON.stringify(data, null, 2); //we will be drilling into songs now
            console.log(artist_data);

        });  
    }



//});

