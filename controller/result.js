class Result {
  static arrayEquals(arrA, arrB) {
    if (
      arrA.length === arrB.length &&
      arrA.every((value) => arrB.includes(value))
    )
      return true;
    else return false;
  }

  static singParagraph(key, color, checkResultElement) {
    var counter = JSON.parse(localStorage.getItem(key));
    localStorage.setItem(key, JSON.stringify(counter + 1));
    checkResultElement.parentElement.style.backgroundColor = color;
  }

  static compare(getAnswerKeys, answered, index) {
    const LOCAL_STORAGE = {
      TRUE_KEY: "true",
      FALSE_KEY: "false",
      BLANK_KEY: "blank",
    };

    const BACKGROUND_COLOR = {
      TRUE: "#00b40f36",
      FALSE: "#b100003d",
      BLANK: "#9c9c9c3d",
    };

    const PARAGRAPH_TAG = "p";

    const checkEmpty = [];
    const checkResultElement = document.getElementById(PARAGRAPH_TAG + index);

    if (this.arrayEquals(getAnswerKeys[index], answered)) {
      this.singParagraph(
        LOCAL_STORAGE.TRUE_KEY,
        BACKGROUND_COLOR.TRUE,
        checkResultElement
      );
    } else if (this.arrayEquals(checkEmpty, answered)) {
      this.singParagraph(
        LOCAL_STORAGE.BLANK_KEY,
        BACKGROUND_COLOR.BLANK,
        checkResultElement
      );
    } else {
      this.singParagraph(
        LOCAL_STORAGE.FALSE_KEY,
        BACKGROUND_COLOR.FALSE,
        checkResultElement
      );
    }
    this.popupResult();
  }

  static popupResult() {
    const RESULT_POPUP = "result-popup";
    const PROJECT_RESULT = "project-page";
    const RESULT_COUNTER_TEXT = "result-counter-text";
    const DISPLAY_BLOCK = "block";
    const DISPLAY_NONE = "none";

    const USER_NAME = "userName";
    const RESULT = {
      TRUE: "true",
      FALSE: "false",
      BLANK: "blank",
    };

    const COUNT = {
      TRUE: "True Count: ",
      FALSE: "False Count: ",
      BLANK: "Blank Count: ",
    };

    const popup = document.getElementById(RESULT_POPUP);
    const projectPage = document.getElementById(PROJECT_RESULT);
    const resultCounter = document.getElementById(RESULT_COUNTER_TEXT);
    popup.style.display = DISPLAY_BLOCK;
    projectPage.style.display = DISPLAY_NONE;

    resultCounter.innerHTML = `
    <h3>Hi ${JSON.parse(localStorage.getItem(USER_NAME))} your result:</h3>
    <p>${COUNT.TRUE + JSON.parse(localStorage.getItem(RESULT.TRUE))}</p>
    <p>${COUNT.FALSE + JSON.parse(localStorage.getItem(RESULT.FALSE))}</p>
    <p>${COUNT.BLANK + JSON.parse(localStorage.getItem(RESULT.BLANK))}</p>
`;
  }

  static popupScreen() {
    const RESULT_POPUP = "result-popup";
    const PROJECT_RESULT = "project-page";
    const DISPLAY_BLOCK = "block";
    const DISPLAY_NONE = "none";

    const popup = document.getElementById(RESULT_POPUP);
    const projectPage = document.getElementById(PROJECT_RESULT);
    popup.style.display = DISPLAY_NONE;
    projectPage.style.display = DISPLAY_BLOCK;
  }
}
