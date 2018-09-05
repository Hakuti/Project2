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
            launch(genre);
        })
    });

    function launch(test){
        console.log("eyy " + test);
        $.get("/api/game", {genre: test});
    }


})



