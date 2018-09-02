$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var gamer_tagInput = $("input#gamer_tag-input");
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an gamer_tag and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      gamer_tag: gamer_tagInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.gamer_tag || !userData.password) {
      return;
    }

    // If we have an gamer_tag and password we run the loginUser function and clear the form
    loginUser(userData.gamer_tag, userData.password);
    gamer_tagInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(gamer_tag, password) {
    $.post("/api/login", {
      gamer_tag: gamer_tag,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }

});
