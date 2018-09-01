//find all the artist of that genre and build the array
//jquery grab drop menu genre selection then ajax 
var genre = $(id_dropdown).val();

//make an ajax call to spotify for each of the artists in the selected genre
$.get("/api/:genre", function(data, status){
    console.log("Data: " + data + "\nStatus: " + status);
});