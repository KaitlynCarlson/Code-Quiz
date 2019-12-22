$(document).ready(function() {
  $("#questions-jumbotron").hide();
  $("#quizCompleted").hide();
  $("#history").hide();

  // Global Variables
  var questionsIndex = 0;
  var timerEl = $("#time-remaining");
  var secondsLeft = questions.length * 10;
  var countDown;

  $("#start-quiz").on("click", function firstSet() {
    $("#home").hide();
    $("#questions-jumbotron").show();

    startTimer();
    generateQuestion();
  });

  // Start Time Function
  function startTimer() {
    countDown = setInterval(clockTick, 1000);
  }

  function clockTick() {
    --secondsLeft;
    if (secondsLeft >= 0) {
      $("#time-remaining").text(
        "Time remaining: " + secondsLeft + " remaining"
      );
    } else if (secondsLeft < 0) {
      secondsLeft = 0;
      endGame();
    }
  }

  function stopTimer() {
    countDown = clearInterval(clockTick);
  }

  function endGame() {
    stopTimer();
    generateScore();
    $("#quizCompleted").show();
    $("#questionDisplay").hide();
    $("#choiceButtons").hide();
    $("#questions-jumbotron").hide();
  }

  function generateQuestion() {
    // get current question object from array
    var currentQuestion = questions[questionsIndex];

    var titleElement = document.getElementById("questionDisplay");
    titleElement.textContent = questions[questionsIndex].title;

    var choicesElement = document.getElementById("choiceButtons");
    choicesElement.innerHTML = "";

    // Loop through all the choices and create a button for each
    for (var i = 0; i < currentQuestion.choices.length; ++i) {
      var choiceNode = document.createElement("button");

      choiceNode.setAttribute("class", "choices");
      choiceNode.setAttribute("value", currentQuestion.choices[i]);

      choiceNode.textContent = currentQuestion.choices[i];

      // attach click event listener to each choice
      choiceNode.onclick = clickButton;

      // display on the page
      choicesElement.appendChild(choiceNode);
    }
  }

  function clickButton() {
    console.log(this.value);
    if (this.value !== questions[questionsIndex].answer) {
      // penalize time
      secondsLeft -= 10;

      // display new time on page
      timerEl.textContent = secondsLeft;
    }

    questionsIndex++;

    if (questionsIndex === questions.length) {
      endGame();
    } else {
      generateQuestion();
    }
  }
  function generateScore() {
    $("#score").text("Score: " + secondsLeft);
  }
  document
    .getElementById("initials-submit")
    .addEventListener("click", showHistory);

  function showHistory(event) {
    $("#quizCompleted").append($("#scoreTitle"));
    $("#quizCompleted").append($("#highscoreDisplay"));
    $("#quizCompleted").append($("#codeQuizHome"));
    $("#quizCompleted").append($("#clear"));
    event.preventDefault();
    init();
    var score = userName.value.trim() + userScore.value;
    if (userScore === "") {
      return;
    }
    storeUser();
  }
  // global variables for high score

  var userScores;
  var scoreList = document.querySelector("#highscoreDisplay");
  var userName = document.querySelector("#userName");
  var userScore = document.querySelector("#score");

  //Storing high score to local storage
  function init() {
    var storedScores = JSON.parse(localstorage.getItem("userScores"));
    if (storedScores !== null) {
      userScores = storedScores;
    }
    displayScores();
  }
  function displayScores() {
    scoreList.innerHTML = "";
    for (var i = 0; i < userScores.length; ++i) {
      var userScores = userScores[i];
      var li = document.createElement("li");
      li.textContent = userScores;
      li.setAttribute("data-index", i);
    }
  }
  function storeUser() {
    localStorage.setItem("userScores", JSON.stringify(userScores));
  }
});
