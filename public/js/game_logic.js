//find all the artist of that genre and build the array
//jquery grab drop menu genre selection then ajax 
var genre = $(id_dropdown).val();

$.ajax("/api/:genre", {
    type:"GET",
    data: realated_artists
})