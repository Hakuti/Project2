$(document).ready(function() {
  // Getting references to our form and inputs
  var usernameInput = $("input#username_login");
  var passwordInput = $("input#password_login");

  // When the form is submitted, we validate there's an username and password entered
  $("#login_btn").on("click", function() {
    var userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.username || !userData.password) {
      return;
    }

    // If we have an username and password we run the loginUser function and clear the form
    loginUser(userData.username, userData.password);
    usernameInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(username, password) {
    $.post("/api/login", {
      username: username,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }


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
        })
    });

    function launch(test){
        console.log(test);
        //just locally storing the genre that was selected by the user
        //will be accessed on game launch on next page
        localStorage.setItem("genre", test);
        console.log("stored");
    }

});

});
