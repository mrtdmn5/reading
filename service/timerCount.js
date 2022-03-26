class Timecounter {
  static getTime(timeLeft, checkResult) {
    const RESTART_BUTTON = "restartButton";
    const TIME_COUNTER = "timeCounter";
    const PROGRESSBAR = "progressBar";
    const BLACK = "black";
    const WHITE = "white";
    const GAME_OVER = "Over!";
    const SECOND = "s";
    const THRESHOLD_VALUE = 170;
    const ONE_SECOND = 1;
    const MAX_RGB_VALUE = 255;
    const MIN_RGB_VALUE = 0;
    const TIMEOUT = 0;

    const timeCounter = document.getElementById(TIME_COUNTER);
    const restartBtn = document.getElementById(RESTART_BUTTON);
    const progressBar = document.getElementById(PROGRESSBAR);

    var time = timeLeft;
    var timerBackground = (MAX_RGB_VALUE / timeLeft) * 2;
    var tempRed = MAX_RGB_VALUE;
    var tempGreen = MIN_RGB_VALUE;

    var downloadTimer = setInterval(function () {
      timeCounter.style.color = BLACK;
      if (TIMEOUT >= timeLeft) {
       
        clearInterval(downloadTimer);
        timeCounter.textContent = GAME_OVER;

        timerBackground = (MAX_RGB_VALUE / timeLeft) * 2;
        tempRed = MAX_RGB_VALUE;
        tempGreen = MIN_RGB_VALUE;
        timeCounter.style.color = WHITE;

        checkResult();
      } else {
        timeCounter.textContent = timeLeft + SECOND;

        timeCounter.style.background =
          "rgb(" + tempGreen + ", " + tempRed + ", 0)";

        

        if (THRESHOLD_VALUE > tempRed) {
          timeCounter.style.color = WHITE;
        }

        progressBar.value = time - timeLeft;
        progressBar.max = time - ONE_SECOND;

        if (MAX_RGB_VALUE == tempGreen) {
          tempRed -= timerBackground;
        } else {
          tempGreen += timerBackground;
        }
      }
      timeLeft -= ONE_SECOND;
    }, 1000);

    restartBtn.addEventListener("click", function () {
      clearInterval(downloadTimer);
    });
  }
}
