


// Set time variables 
var secondsLeft = 40;
var countDown = document.getElementById("time-remaining");

    // Set time function
    function setTime() {
        var timerInterval = setInterval(function () {
          --secondsLeft;
          countDown.textContent = 'Time remaining: '+ secondsLeft + ' seconds';
        
          if (secondsLeft === 0) {
            clearInterval(timerInterval);
          }
    
        }, 1000);
    }
document.getElementById("start-quiz").addEventListener("click", setTime);


// Quiz questions variables

var accessQuestions = questions;
console.log(accessQuestions);

$("#start-quiz").on("click", function (){
   
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
    for (var i = 0; i < accessQuestions[0].choices.length; ++i){

    var choicesOne = $ ("<button></button>  <br><br>");
    choicesOne.addClass("btn btn-outline-dark choices-one");
    choicesOne.text(accessQuestions[0].choices[i]);
    $(questionDisplay).append(choicesOne);
    
    $(choicesOne).on("click", function(){
        $(questionOne).hide();
        $(".choices-one").hide();

    });

}


});

 
console.log(accessQuestions[0].choices);
// $("#start-quiz").on("click", function(){
    //     var titleDisplay = accessQuestions[0];
    //     titleDisplay.addClass("display-4");
    //     $("<h1>").text(titleDisplay.title);
    
    // });



// function myFunction(){
//     for (var i = 0; i < accessQuestions.length; ++i){
//         var titleDisplay = $("<h1>");
//         titleDisplay.text(accessQuestions[0].title);
//         console.log(titleDisplay);
//     }
// }
// $(".display-4").text(questions[0].this.title);

 // Quiz questions functions: 
 // I need to use a for loop to move over the length of the array by object order 
 // titles shall be appended to P
 // choices shall be appended to button tags
 
