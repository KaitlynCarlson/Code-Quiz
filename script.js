var accessQuestions = questions;
var questionOne = questions[0].title;
var questionTwo = questions[1].title;
var questionThree = questions[2].title;
var questionFour = questions[3].title;
var choicesOne = questions[0].choices;
var choicesTwo = questions[1].choices;
var choicesThree = questions[2].choices;
var choicesFour = questions[3].choices;
var answerOne = questions[0].answer;
var answerTwo = questions[1].answer;
var answerThree = questions[2].answer;
var answerFour = questions[3].answer;
var secondsLeft;
var countDown;

$("#questions-jumbotron").hide();
$("#quizCompleted").hide();
$("#history").hide();

$("#start-quiz").on("click", function firstSet() {
  $("#home").hide();

  $("#questions-jumbotron").show();

  // Set time function

  secondsLeft = 40;
  setInterval(function() {
    --secondsLeft;

    if (secondsLeft >= 0) {
      $("#time-remaining").text("Time remaining " + secondsLeft + " remaining");
    }
    if (secondsLeft < 0) {
      secondsLeft = 0;
      $("#time-remaining").text("Time remaining " + secondsLeft + " remaining");
    }

    if ($("#questionAccuracy").text() === "Incorrect!") {
      secondsLeft = secondsLeft - 10;
    }
  }, 1000);

  // function penaltyDeduct() {
  //   secondsLeft -= 10;
  // }

  $("#questionDisplay").text(questionOne);
  $("#index-zero")
    .text(choicesOne[0])
    .addClass("choices-one");
  $("#index-one")
    .text(choicesOne[1])
    .addClass("choices-one");
  $("#index-two")
    .text(choicesOne[2])
    .addClass("choices-one");
  $("#index-three")
    .text(choicesOne[3])
    .addClass("choices-one");

  $(".choices-one").on("click", function() {
    if ($(this).text() !== answerOne) {
      $("#questionAccuracy").text("Incorrect!");
    } else if ($(this).text() === answerOne) {
      $("#questionAccuracy").text("Correct!");
    }

    $("#questionDisplay").text(questionTwo);
    $("#index-zero")
      .text(choicesTwo[0])
      .addClass("choices-two");
    $("#index-one")
      .text(choicesTwo[1])
      .addClass("choices-two");
    $("#index-two")
      .text(choicesTwo[2])
      .addClass("choices-two");
    $("#index-three")
      .text(choicesTwo[3])
      .addClass("choices-two");

    $(".choices-two").on("click", function() {
      if ($(this).text() !== answerTwo) {
        $("#questionAccuracy").text("Incorrect!");
      } else if ($(this).text() === answerTwo) {
        $("#questionAccuracy").text("Correct!");
      }

      $("#questionDisplay").text(questionThree);
      $("#index-zero")
        .text(choicesThree[0])
        .addClass("choices-three");
      $("#index-one")
        .text(choicesThree[1])
        .addClass("choices-three");
      $("#index-two")
        .text(choicesThree[2])
        .addClass("choices-three");
      $("#index-three")
        .text(choicesThree[3])
        .addClass("choices-three");

      $(".choices-three").on("click", function() {
        if ($(this).text() !== answerThree) {
          $("#questionAccuracy").text("Incorrect!");
        } else if ($(this).text() === answerThree) {
          $("#questionAccuracy").text("Correct!");
        }

        $("#questionDisplay").text(questionFour);
        $("#index-zero")
          .text(choicesFour[0])
          .addClass("choices-four");
        $("#index-one")
          .text(choicesFour[1])
          .addClass("choices-four");
        $("#index-two")
          .text(choicesFour[2])
          .addClass("choices-four");
        $("#index-three")
          .text(choicesFour[3])
          .addClass("choices-four");

        $(".choices-four").on("click", function() {
          if ($(this).text() !== answerFour) {
            $("#finalQuestionAccuracy").text("Incorrect!");
          } else if ($(this).text() === answerFour) {
            $("#finalQuestionAccuracy").text("Correct!");
          }

          $("#quizCompleted").show();
          $("#questions-jumbotron").hide();
          $("#score").text("You scored " + secondsLeft);

          $("#initials-submit").on("click", function() {
            $("#quizCompleted").hide();
            $("#history").show();

            $("#codeQuizHome").on("click", function() {
              window.location.reload();
            });
          });
        });
      });
    });
  });
});
