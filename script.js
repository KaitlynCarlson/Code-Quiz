// Set time variables
var secondsLeft = 40;
var countDown = document.getElementById("time-remaining");

// Set time function
function setTime() {
  var timerInterval = setInterval(function() {
    --secondsLeft;
    countDown.textContent = "Time remaining: " + secondsLeft + " seconds";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
document.getElementById("start-quiz").addEventListener("click", setTime);

// Quiz questions variables

var accessQuestions = questions;
console.log(accessQuestions);

$("#start-quiz").on("click", function() {
  // Hide Code Quiz Home Jumbotron
  $("#home").hide();

  // Create new <div> with class Jumbotron to display questions when start-quiz button is clicked and appending to container div

  var questionDisplay = $("<div>");
  questionDisplay.addClass("jumbotron questions");
  $(".container").append(questionDisplay);
  $(questionDisplay).show();

  // Display first question "title"
  var questionOne = $("<h1>");
  questionOne.addClass("display-4");
  questionOne.text(accessQuestions[0].title);
  $(questionDisplay).append(questionOne);

  // Display first question "choices"
  for (var i = 0; i < accessQuestions[0].choices.length; ++i) {
    var choicesOne = $("<button></button>  <br><br>");
    choicesOne.addClass("btn btn-outline-dark choices-one");
    choicesOne.text(accessQuestions[0].choices[i]);
    $(questionDisplay).append(choicesOne);

    $(choicesOne).on("click", function() {
      // Hide question one content
      $(questionOne).hide();
      $(".choices-one").hide();

      // Create question two content

      //Display question two
      var questionTwo = $("<h1>");
      questionTwo.addClass("display-4");
      questionTwo.text(accessQuestions[1].title);
      $(questionDisplay).append(questionTwo);

      // Display question two "choices"
      for (var i = 0; i < accessQuestions[1].choices.length; ++i) {
        var choicesTwo = $("<button></button>  <br><br>");
        choicesTwo.addClass("btn btn-outline-dark choices-two");
        choicesTwo.text(accessQuestions[1].choices[i]);
        $(questionDisplay).append(choicesTwo);
      }

      $(choicesTwo).on("click", function() {
        // Hide question one content
        $(questionTwo).hide();
        $(".choices-two").hide();

        // Create question three content

        //Display question three
        var questionThree = $("<h1>");
        questionThree.addClass("display-4");
        questionThree.text(accessQuestions[2].title);
        $(questionDisplay).append(questionThree);

        // Display question two "choices"
        for (var i = 0; i < accessQuestions[2].choices.length; ++i) {
          var choicesThree = $("<button></button>  <br><br>");
          choicesThree.addClass("btn btn-outline-dark choices-three");
          choicesThree.text(accessQuestions[2].choices[i]);
          $(questionDisplay).append(choicesThree);
        }

        $(choicesThree).on("click", function() {
          // Hide question one content
          $(questionThree).hide();
          $(".choices-three").hide();

          // Create question four content

          //Display question four
          var questionFour = $("<h1>");
          questionFour.addClass("display-4");
          questionFour.text(accessQuestions[3].title);
          $(questionDisplay).append(questionFour);

          // Display question two "choices"
          for (var i = 0; i < accessQuestions[3].choices.length; ++i) {
            var choicesFour = $("<button></button>  <br><br>");
            choicesFour.addClass("btn btn-outline-dark choices-three");
            choicesFour.text(accessQuestions[3].choices[i]);
            $(questionDisplay).append(choicesFour);
          }
        });
      });
    });
  }
});
