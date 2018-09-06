$(document).ready(function() {

  
  $("#start_modal").modal("show");

  $("#launch_game").on("click", function(){

  
  let nextQuestionCounter = 0;
  let livesLeft = 3;
  let priorHighStreak = 0;
  let streak = 0;
  let basePoints = 5;
  let totalPoints = 0;

  var totalTime = 0;
  var aVar;

  //function startTimer() {
  var startTimestamp = moment().startOf("day");
  function startTimer() {
    aVar = setInterval(function() {
      startTimestamp.add(1, "second");
      //document.getElementById('timer').innerHTML =
      //  startTimestamp.format('HH:mm:ss');
      //console.log(startTimestamp.format('s'));
      totalTime = startTimestamp.format("s");
      console.log(totalTime);
    }, 1000);
  }

  /*
    for (let i = 0; i < 4; i++) {
    $(".tile")
      .eq(i)
      .find("i")
      .text(arrayThis[i]);
  }
    */

  $.get("/api/game/pop").then(function(data) {
    var randomData = takeDataArtistData(data);

    var tempArray = [];
    //This is the initial first correct Answer
    let correctAnswerObject = randomData[0];
    let correctAnswer = randomData[0].song_name;
    let tempShuffled = findDuplicates(randomData, correctAnswer);
    //This is the initial first album image
    $(".card-img").attr("src", randomData[0].album_image_url);
    change(randomData[0].song_url);

    //This pushes text into the buttons from the temporary array: tempArray
    //   for (let i = 0; i < 4; i++) {
    //     $(".btn").eq(i).text(tempShuffled[i]);
    //   }
    for (let i = 0; i < 4; i++) {
      $(".tile")
        .eq(i)
        .find("i")
        .text(tempShuffled[i]);
    }

    //console.log(correctAnswer);
    //When it's new random Data
    //startTimer();

    $(".tile").on("click", function() {
      event.preventDefault();

      clearInterval(aVar);
      console.log(totalTime);
      //console.log(nextQuestionCounter);

      //When the answer is correct
      if ($(this).text() == correctAnswer) {
        //By incrementing the counter I'm acknowleding there is a new question

        nextQuestionCounter++;
        let nextQuestion = randomData[nextQuestionCounter];

        //Assign a new correctAnswer
        console.log(correctAnswer);
        correctAnswer = nextQuestion.song_name;
        //correctAnswerObject = nextQuestion[]
        //modify the img and audio src
        $(".card-img").attr("src", nextQuestion.album_image_url);
        // setTimeout(() => {
        change(nextQuestion.song_url);
        //}, 2000
        //)
        //console.log(nextQuestion.song_url);
        console.log(correctAnswer);
        console.log(nextQuestion.song_name);
        //Reset the temporary array
        tempArray = [];

        let tempShuffled = findDuplicates(randomData, correctAnswer);
        //console.log(tempArray);
        console.log(tempArray);
        for (let i = 0; i < 4; i++) {
          $(".tile")
            .eq(i)
            .find("i")
            .text(tempShuffled[i]);
        }
        //   for (let i = 0; i < 4; i++) {
        //     $(".btn").eq(i).text(tempShuffled[i]);
        //   }
        streak++;
        console.log("Current Streak: " + streak);
        totalPoints = calculatePointsPerRound(
          totalPoints,
          basePoints,
          streak,
          totalTime
        );
        console.log(totalPoints);
        console.log("Timer here: " + totalTime);
        totalTime = 0;
        console.log("Time after reassign: " + totalTime);
        //startTimer();
        resetInterval();

        //multiplier = 0;
      } else {
        nextQuestionCounter++;
        let nextQuestion = randomData[nextQuestionCounter];

        //Assign a new correctAnswer
        console.log(correctAnswer);
        correctAnswer = nextQuestion.song_name;
        //correctAnswerObject = nextQuestion[]
        //modify the img and audio src
        $(".card-img").attr("src", nextQuestion.album_image_url);
        // setTimeout(() => {

        change(nextQuestion.song_url);
        //}, 2000
        //)
        //console.log(nextQuestion.song_url);
        console.log(correctAnswer);
        console.log(nextQuestion.song_name);
        //Reset the temporary array
        tempArray = [];

        let tempShuffled = findDuplicates(randomData, correctAnswer);
        //console.log(tempArray);
        console.log(tempArray);
        for (let i = 0; i < 4; i++) {
          $(".tile")
            .eq(i)
            .find("i")
            .text(tempShuffled[i]);
        }
        //   for (let i = 0; i < 4; i++) {
        //     $(".btn").eq(i).text(tempShuffled[i]);
        //   }

        multiplier = 0;
        livesLeft--;
        priorHighStreak = checkIfNewHighStreak(streak, priorHighStreak);
        console.log(priorHighStreak);
        streak = 0;
        console.log(livesLeft);
        if (livesLeft == 0) {
          console.log("You lost");
          $(".modal").modal("show");

          //$("#goingPost".on(""))
          //send data to server of your points and streaks
          //Prompt a modal that cannot be dismissed
          //This modal contain several elements
          //P1, P2, P3 or whatever it may be
          //Append Streak, Points and average time it took to answer songs
        }
      }
    });

  });

  });

  function resetInterval() {
    //totalTime = 0;
    clearInterval(aVar);
    var startTimestamp = moment().startOf("day");
    aVar = setInterval(function() {
      startTimestamp.add(1, "second");
      //document.getElementById('timer').innerHTML =
      //  startTimestamp.format('HH:mm:ss');
      //console.log(startTimestamp.format('s'));
      totalTime = startTimestamp.format("s");
      console.log(totalTime);
      //console.log("restarted interval");
      //test1();
    }, 1000);
  }

  function calculatePointsPerRound(points, basepoints, streak, timeTaken) {
    let total;

    if (streak == 1) {
      streak = 1.5;
    }

    //if the time taken is less than 30 seconds and your streak is greater than 0
    if (timeTaken < 30 && streak > 0) {
      return (total = (30 - timeTaken) * streak * basepoints + points);
    }
    //if the time taken is less than 30 seconds, but your streak is 0
    else if (timeTaken < 30 && streak == 0) {
      return (total = timeTaken * basepoints + points);
    }
    //if the time taken was 30 seconds, but your streak is greater than 0
    else if (timeTaken == 30 && streak > 0) {
      return (total = streak * basepoints + points);
    }
    //if your time taken is 30 seconds, but your streak is 0
    else {
      return (total = basePoints + points);
    }
    //return total;
  }

  function checkIfNewHighStreak(streak, priorHighStreak) {
    if (streak > priorHighStreak) {
      return streak;
    } else {
      return priorHighStreak;
    }
  }

  function findDuplicates(randomData, theAnswer) {
    count = 1;
    theTempArray = [theAnswer];

    while (count != 4) {
      let song =
        randomData[Math.floor(Math.random() * randomData.length)].song_name;

      if (theTempArray.indexOf(song) === -1) {
        //append it to the array
        theTempArray.push(song);
        count++;
        console.log(theTempArray);
      }
    }
    let tempShuffled = shuffle(theTempArray);
    return tempShuffled;
  }

  function takeDataArtistData(data) {
    var arrayRandomSongBank = [];
    for (var i = 0; i < data.length; i++) {
      //console.log(data[i]);
      arrayRandomSongBank.push(data[i]);
    }
    return shuffle(arrayRandomSongBank);
  }

  function shuffle(array) {
    var m = array.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
});

function change(sourceUrl) {
  var audio = $("#myAudio");
  $("#ogg-src").attr("src", sourceUrl);
  /****************/
  audio[0].pause();
  audio[0].load(); //suspends and restores all audio element

  //audio[0].play(); changed based on Sprachprofi's comment below
  audio[0].oncanplaythrough = audio[0].play();
  /****************/
}

// for (let i = 0; i < 4; i++) {
//   $(".tile")
//     .eq(i)
//     .find("i")
//     .text(arrayThis[i]);
// }





