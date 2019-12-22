# Code-Quiz

A timed quiz on JavaScript basics that stores high scores.

[Code Quiz Application](https://kaitlyncarlson.github.io/Code-Quiz/ "Code Quiz")

## Purpose

We created this JavaScript Fundamentals Code Quiz for two reasons. First, and foremost, to demonstrate our understanding and prowess in coding JavaScript, jQuery, and manipulating the DOM. Second, as a way to gauge our progress and understanding of the curriculum covered in the course thus far.

## Functionality

The Code Quiz works like this:

1. First, the user is presented with a home page. Inside the home page is a button that launches the application.
2. On my page, this button is appropriately titled "Start Quiz".
3. When a user clicks the "start quiz" button there are many functions which deploy:
   1. A countdown timer begins in the top right corner
   2. A question appears with four choices which are displayed as buttons
   3. When the user selects their choice button the next set of choices and a question appear
      1.Simultaneously, if the previous answer was incorrect the user is penalized 10 seconds from their score.
4. This continues through 4 questions with 4 choices each until either the counter reaches 0, or the user answers the last question.
5. The user is then displayed a screen with their score, the value of the counter, and prompted to input their initals to save their high score.
6. When initials are submitted, the user is displayed the High Score History which they may clear with the "Clear High Score History" button; or, they can navigate back to the Code Quiz Home screen and try the quiz again!

## Bugs

At this stage, the application has a few bugs. The count down interval seems to continue counting down after the user has completed their quiz. If the counter reaches zero before the user has stored their score, it changes their score to zero.

Local storage is also clearing out when the page refreshes. I will continue working to de bug this.
