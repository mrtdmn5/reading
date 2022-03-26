const START_BTN = "start-btn";
const FORM_LOGIN = "form-login";
const USER_NAME_INPUT = "userName";
const TIMER = "timer";
const READING_TEST_PAGE = "pages/project.html";
const ZERO_TIME = 0;
const USER_NAME_BLANK = 0;
const LOCAL_STORAGE_KEY = {
  TIME: "time",
  USER_NAME: "userName",
};

const OPACITY = {
  HIGH: "1.0",
  LOW: "0.3",
};

const elementHidden = document.getElementById(START_BTN);
const formLogin = document.getElementById(FORM_LOGIN);
const userName = document.getElementById(USER_NAME_INPUT);
const timer = document.getElementById(TIMER);

keyPress = false;
timePress = false;

userName.addEventListener("focus", function () {
  userName.addEventListener("keyup", function (e) {
    if (userName.value.length != USER_NAME_BLANK) {
      keyPress = true;
    } else {
      keyPress = false;
    }
    validateControl();
  });
});

function timeChange() {
  if (timer.value != ZERO_TIME) timePress = true;
  else timePress = false;

  validateControl();
}

function validateControl() {
  if (!!keyPress && !!timePress) elementHidden.style.opacity = OPACITY.HIGH;
  else elementHidden.style.opacity = OPACITY.LOW;
}

elementHidden.addEventListener("click", function () {
  if (!!keyPress && !!timePress) {
    elementHidden.href = READING_TEST_PAGE;
    localStorage.setItem(LOCAL_STORAGE_KEY.TIME, JSON.stringify(timer.value));
    localStorage.setItem(
      LOCAL_STORAGE_KEY.USER_NAME,
      JSON.stringify(userName.value)
    );
  }
});
