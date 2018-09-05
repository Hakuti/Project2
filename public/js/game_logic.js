//find all the artist of that genre and build the array
//jquery grab drop menu genre selection then ajax 
$(document).ready(function(){

    $(".dropdown-item").on("click",function(){
        var genre = $(this).attr("data-genre");
        console.log(genre);
    });

})



