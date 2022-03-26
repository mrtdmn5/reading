const READING_TEST = "Reading Test";
const SENTENCES = "/database/sentences.json";
const POPUP_BTN = "button-popup";
const SELECTION_TYPE_CARET = "Caret";
const SPAN_TAG = "SPAN";
const RESTART_BTN = "restartButton";
const PARAGRAPH_TAG = "p";
const BODY_ID = "bodyElement";
const SPAN_NAME = "name";
const SEPARATOR_IS_NOT_REGISTER = -1;
const DELETE_ONE_VALUE = 1;
const CLEAR_RESULT_COUNT = 0;
const CLEAR_SEPARATOR_ARR = 0;
const arrayOfSeparatorIds = [];
var timeLimit = 0;
var testOver = false;
const LOCAL_STORAGE_KEY = {
  TIME: "time",
  USER_NAME: "userName",
  TRUE: "true",
  FALSE: "false",
  BLANK: "blank",
};

document.addEventListener("DOMContentLoaded", whenPageLoaded);
document.addEventListener("click", windowSelection);

function whenPageLoaded() {
  if (document.title == READING_TEST) {
    fetch(SENTENCES)
      .then((response) => response.json())
      .then((data) => {
        pragraphArray = data.sentences;
        UI.addWord(data.sentences, 0);
      });
  }

  var time = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.TIME));
  var userName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.USER_NAME));
  Timecounter.getTime(time, checkResult);
  localStorage.clear();
  localStorage.setItem(LOCAL_STORAGE_KEY.TIME, JSON.stringify(time));
  localStorage.setItem(LOCAL_STORAGE_KEY.USER_NAME, JSON.stringify(userName));
}
function clearResultCountFromStorage(key) {
  JSON.parse(localStorage.getItem(key));
  localStorage.setItem(key, JSON.stringify(CLEAR_RESULT_COUNT));
}

function checkResult() {
  clearResultCountFromStorage(LOCAL_STORAGE_KEY.TRUE);
  clearResultCountFromStorage(LOCAL_STORAGE_KEY.FALSE);
  clearResultCountFromStorage(LOCAL_STORAGE_KEY.BLANK);
  const getAnswerKeys = KEY.createAnswerArray(pragraphArray);
  let answered = [];

  for (var i = 0; i < pragraphArray.length; i++) {
    answered = StorageC.getFromStorage(PARAGRAPH_TAG + i);
    Result.compare(getAnswerKeys, answered, i);
  }

  testOver = true;
}
function clearAllElements() {
  const body = document.getElementById(BODY_ID);
  body.innerHTML = ``;
}
function restartGame() {
  whenPageLoaded();
  clearAllElements();
  testOver = false;
  arrayOfSeparatorIds.length = CLEAR_SEPARATOR_ARR;
}

function playReadingTest() {
  var selection = window.getSelection();

  var newSeparatorPosition = selection.baseNode.parentElement;
  console.log(newSeparatorPosition);
  var idRegistrationOfSeparators = arrayOfSeparatorIds.indexOf(
    newSeparatorPosition.id
  );
  var separatorTagName = selection.baseNode.parentElement.tagName;
  var selectedParagraph = newSeparatorPosition.parentElement.id;
  let separatorIndexNumber = newSeparatorPosition.getAttribute(SPAN_NAME);

  if (
    selection.rangeCount > 0 &&
    selection.type == SELECTION_TYPE_CARET &&
    separatorTagName == SPAN_TAG
  ) {
    if (idRegistrationOfSeparators == SEPARATOR_IS_NOT_REGISTER) {
      var sonrasivarmi = arrayOfSeparatorIds.indexOf(
        selectedParagraph + "s" + (separatorIndexNumber - -1)
      );
      if (sonrasivarmi != -1) {
        arrayOfSeparatorIds.splice(sonrasivarmi, DELETE_ONE_VALUE);
        console.log("bu" + (separatorIndexNumber - -1).toString());
        StorageC.removeSeparatorFromStorage(
          (separatorIndexNumber - -1).toString(),
          selectedParagraph
        );

        UI.removeSeparator(
          selectedParagraph + "s" + (separatorIndexNumber - -1)
        );
      }

      var oncesivarmi = arrayOfSeparatorIds.indexOf(
        selectedParagraph + "s" + (separatorIndexNumber - 1)
      );
      if (oncesivarmi != -1) {
        arrayOfSeparatorIds.splice(oncesivarmi, DELETE_ONE_VALUE);
        console.log(separatorIndexNumber - 1);
        StorageC.removeSeparatorFromStorage(
          (separatorIndexNumber - 1).toString(),
          selectedParagraph
        );

        UI.removeSeparator(
          selectedParagraph + "s" + (separatorIndexNumber - 1)
        );
      }

      UI.addSeparator(newSeparatorPosition);
      arrayOfSeparatorIds.push(newSeparatorPosition.id);
      StorageC.addStorage(selectedParagraph, separatorIndexNumber);

      if (StorageC.getFromStorage(selectedParagraph).length >= 2) {
        setTimeout(function () {
          let by = document.getElementById(newSeparatorPosition.id);
          by.scrollIntoView(true);
        }, 500);
      }
    } else {
      arrayOfSeparatorIds.splice(idRegistrationOfSeparators, DELETE_ONE_VALUE);
      console.log(arrayOfSeparatorIds);
      StorageC.removeSeparatorFromStorage(
        separatorIndexNumber,
        selectedParagraph
      );

      UI.removeSeparator(newSeparatorPosition.id);
    }
  }
}

function windowSelection(e) {
  if (POPUP_BTN == e.target.id) {
    Result.popupScreen();
  } else if (RESTART_BTN == e.target.id) {
    restartGame();
  } else if (!testOver) {
    playReadingTest();
  }

  e.preventDefault();
}
