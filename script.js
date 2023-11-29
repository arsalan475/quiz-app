let question = document.querySelector(".question");
let optionContainer = document.querySelector(".option-container");
let options = document.querySelectorAll(".opt");
let quizContainer = document.querySelector(".quiz-container");
let result = document.querySelector(".result-card");
let btnContainer = document.querySelector(".btn-container");
let ansChangedTime = 60;
let submit = document.querySelector("#submit");
let show = document.querySelector("#show-result");
let counter = 0;
let scoretext = document.querySelector(".score");
let percentage = document.querySelector(".percentage");
let score = 0;
let passed = document.querySelector(".passed");
let congrats = document.querySelector(".congrats");
result.classList.add("hide");
const quiz = {
  questions: [
    "Q1) what is js",
    "Q2) what is the full form of  html",
    "Q3) what is the best programing language",
  ],
  options: {
    optionsForQuestion0: [
      "programming language",
      "markup language",
      "static language",
      "all of them",
    ],
    optionsForQuestion1: [
      "hyper text markup language",
      "hyper transfer protocol",
      "Object orinted Programming",
      "None of them",
    ],
    optionsForQuestion2: ["html", "javaScript", "Phython", "java"],
  },

  rightAns: ["option1", "option1", "option2"],
};

let id;
let intfun;
submit.addEventListener("click", changeAns);
optionContainer.addEventListener("click", getId);

function displayQuiz() {
  question.innerText = quiz.questions[counter];
  options[0].innerText = quiz.options[`optionsForQuestion${counter}`][0];
  options[1].innerText = quiz.options[`optionsForQuestion${counter}`][1];
  options[2].innerText = quiz.options[`optionsForQuestion${counter}`][2];
  options[3].innerText = quiz.options[`optionsForQuestion${counter}`][3];
  let radio = document.querySelectorAll("input[type=radio ]");
  radio.forEach((radioBtn) => {
    radioBtn.checked = false;
  });
}

function changeAns() {
  checkAns();
  counter++;

  if (counter < quiz.questions.length) {
    displayQuiz();
  } else {
    time.style.display = "none";
    clearInterval(intfun);
    showResult();
  }
  num = ansChangedTime;
  id = "";
}
function getId(e) {
  id = e.target.closest(".options").classList[0];
}

function checkAns() {
  if (id === quiz.rightAns[counter]) {
    score++;
    console.log("right ans");
  } else {
    console.log("wrong ans");
  }
}

function showResult() {
  optionContainer.removeEventListener("click", getId);
  submit.removeEventListener("click", changeAns);

  percentage.textContent = `${Math.trunc((score * 100) / 3)}%`;
  scoretext.textContent = score;
  show.style.display = "inline-block";
  optionContainer.style.display = "none";
  question.style.display = "none";
  submit.style.display = "none";
  btnContainer.classList.add("center");
  if ((score * 100) / 3 < 50) {
    passed.textContent = "failed";
    congrats.textContent = "better Luck next time";
  }
  console.log("finished Quiz");
}

displayQuiz();

let time = document.querySelector(".timer");

time.innerText = "1";
let num = ansChangedTime;

function tick() {
  if (num > -1) {
    let minutes = `${Math.trunc(num / 60)}`.padStart(2, "0");
    let seconds = `${num % 60}`.padStart(2, "0");
    num--;

    time.textContent = `${minutes}:${seconds}`;
  } else {
    changeAns();
    num = ansChangedTime;
  }
}

intfun = setInterval(tick, 1000);

show.addEventListener("click", () => result.classList.remove("hide"));
