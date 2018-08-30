console.log("hello");
//$(document).ready(function() {
    var keys = require("./keys");
    var Spotify = require("node-spotify-api");
    //initialize the spotify api with the keys 
    var spotify = new Spotify(keys.spotify);


    module.exports.mySpotify = function(songName){
        //if user did not enter a song name default to "The Sign"
        console.log("whats up spotify");
        if(songName === undefined){
            songName = "505"; //one of my favs, also "The Sign" pulls "The Light" - by MihTy,Jeremih,Ty Dolla $ign
        }
        //use the spotify object created on line 14 to call the node-spotify-api
        //npm lists search: function({type: `track1, query: 'your search'}) as the easiest way to make a call
        spotify.search({
            type: "artist", 
            query: songName,//grabed from the users inputed argument after the liri command
            limit: 1 //only grab one song please
        }, function(err,data) {
            //check for errors
            if(err){
                return console.log('error occurred: ' + err);
            }
            //now drill into the data, which is the response from the api
            var songs = JSON.stringify(data, null, 2); //we will be drilling into songs now
            console.log(songs);
            //songs is an array of objects we will get data from 
            //for(var i = 0; i < songs.length; i++){
               // console.log("whats in here: " + songs[i]);
                //grab the artists name 
                //console.log("artist(s): " + songs[i].artists.getArtistName);
                //grab the song name
                //console.log("song name: " + songs[i].name);
                //grab the preview link
                //console.log("preview of song: " + songs[i].preview_url);
            //}
        });  
    }



//});

