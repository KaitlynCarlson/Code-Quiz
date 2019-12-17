
    var secondsLeft = 40;
    var countDown = document.getElementById("time-remaining");


    function setTime() {
        var timerInterval = setInterval(function () {
          --secondsLeft;
          countDown.textContent = 'Time remaining '+ secondsLeft + ' seconds';
      
          if (secondsLeft === 0) {
              clearInterval(timerInterval);
          }
        }, 1000);
    }


document.getElementById("start-quiz").addEventListener("click", setTime);