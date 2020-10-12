var timerEl = document.querySelector("#countdown");
var contentEl = document.querySelector("#content");
var startBtn = document.querySelector("#start");
var score = document.querySelector("#score");
var myForm = document.querySelector("#myform");
var allDone = document.querySelector("#alldone");

var currentQuestion = 0;
var timeLeft = 75;
var correctAnswer = [];
var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: ["<script>", "<js>", "<javascript>", "<scripting>"],
    correct: 0,
  },
  {
    question: " What is the correct place to insert a JavaScript?",
    answer: [
      "Both the <head>section and the <body> section are correct",
      "The <head> section",
      "The <body> section",
    ],
    correct: 0,
  },
  {
    question: "How do you create a function in JavaScript?",
    answer: [
      "function:myFunction()",
      "function= myFunction()",
      "function myFunction()",
    ],
    correct: 2,
  },
  {
    question: "How can you add a comment in a JavaScript?",
    answer: [
      "//This is a comment",
      "This is a comment",
      "<!--This is a comment-->",
    ],
    correct: 0,
  },

  {
    question: "How do you declare a JavaScript variable?",
    answer: ["var carName", "variabe carName", "v carName"],
    correct: 0,
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answer: ["if i === 5", "if i = 5", "if i == 5 then", "if i = 5 then"],
    correct: 0,
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    answer: ["rnd(7.25)", "Math.rnd(7.25)", "round(7.25)", "Math.round(7.25)"],
    correct: 3,
  },
  {
    question: " which operator is used to assign a value to a variable?",
    answer: ["*", "-", "x", "="],
    correct: 3,
  },
  {
    question: "Which event occurs when the user clicks on HTML element?",
    answer: ["onclick", "onmouseover", "onchange", "onmouseclick"],
    correct: 0,
  },
];


function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "Time is up!";
      clearInterval(timeInterval);
    }
  }, 1000);
  displayQuestion(0);
}

startBtn.addEventListener("click", function (event) {
  countdown();
});

var clearContent = function () {
  contentEl.innerHTML = "";
};

var displayQuestion = function (index) {
  clearContent();
  var eachQuestion = questions[index];
  var questionHeader = document.createElement("h2");
  questionHeader.textContent = eachQuestion.question;
  var answerList = document.createElement("div");
  for (let i = 0; i < eachQuestion.answer.length; i++) {
    var btn = document.createElement("button");
    btn.textContent = eachQuestion.answer[i];
    btn.addEventListener("click", function () {
      evaluateAnswer(i === eachQuestion.correct);
      if (i === eachQuestion.correct) {
        var done = document.querySelector("#done");
        window.alert("Correct!!");

        correctAnswer.push(eachQuestion.answer[i]);
      } else {
        var done = document.querySelector("#done");
        timeLeft = timeLeft - 10;
        if (questions.length < 0) {
        } else {
          window.alert("Wrong!!");
        }
      }
    });
    answerList.append(btn);
  }
  contentEl.append(questionHeader, answerList);
};

var evaluateAnswer = function (correct) {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion(currentQuestion);
  } else {
    var done = document.querySelector("#done");
    clearContent();
    allDone.textContent = "All done!";

    score.textContent = "Your final score is " + correctAnswer.length;
    localStorage.setItem('score', correctAnswer.length)
    var form = document.createElement("form");
    var label = document.createElement("label");
    var formInput = document.createElement("input");
    formInput.setAttribute("id", "init");
    var submitInput = document.createElement("input");
    label.textContent = "Enter Initials";

    submitInput.type = "submit";
    submitInput.value = "Submit";

    form.appendChild(label);
    form.appendChild(formInput);
    form.appendChild(submitInput);
    myForm.appendChild(form);
  }
};



// function saveLocalStorarage() {
//     localStorage.setItem("initals",      )
//       document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
//     }
//     function name()
//     {
//     var input = document.getElementById("init");
//     window.alert(input);
//     }
