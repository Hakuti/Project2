var mySpotify = function(songName){
    //if user did not enter a song name default to "The Sign"
    if(songName === undefined){
        songName = "505"; //one of my favs, also "The Sign" pulls "The Light" - by MihTy,Jeremih,Ty Dolla $ign
    }
    //use the spotify object created on line 14 to call the node-spotify-api
    //npm lists search: function({type: `track1, query: 'your search'}) as the easiest way to make a call
    spotify.search({
        type: "track", 
        query: songName,//grabed from the users inputed argument after the liri command
        limit: 1 //only grab one song please
    }, function(err,data) {
        //check for errors
        if(err){
            return console.log('error occurred: ' + err);
        }
        //now drill into the data, which is the response from the api
        var songs = data.tracks.items; //we will be drilling into songs now
        //songs is an array of objects we will get data from 
        for(var i = 0; i < songs.length; i++){
            //grab the artists name 
            log(chalk.blue("artist(s): ") + chalk.red(songs[i].artists.map(getArtistName)));
            //grab the song name
            log(chalk.green("song name: ") + chalk.red(songs[i].name));
            //grab the preview link
            log(chalk.yellow("preview of song: ") + chalk.grey(songs[i].preview_url));
        }
    });  
}