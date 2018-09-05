//find all the artist of that genre and build the array
//jquery grab drop menu genre selection then ajax 
$(document).ready(function(){

    $(".dropdown-item").on("click",function(){
        var genre = $(this).attr("data-genre");
        console.log(genre);
        //now lets pass this data somewhere that matters
        //when the start button
        $("#start_game").on("click", function(){
            console.log("hello " + genre);
            //send the genre as a route param; /api/game/:genre
            launch(genre);
            _launch();
            
        })
    });

    function launch(test){
        localStorage.setItem("genre",req.body.genre);
        //retrieve
        document.getElementById("result").innerHTML =
        localStorage.getItem("genre")
    }

});


