var timerEl = document.querySelector("#countdown");
var contentEl = document.querySelector("#content");
var startBtn = document.querySelector("#start");
var currentQuestion = 0
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
      "fucntion:myFunction()",
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
    answer: ["if(i === 5", "if i = 5", "if i == 5 then", "if i = 5 then"],
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
// ---------- original code  ----------
// function countdown() {
//   var timeLeft = 75;
//   var timeInterval = setInterval(function () {
//     if (timeLeft > 1) {
//       timerEl.textContent = timeLeft + " seconds remaining";
//       timeLeft--;
//     } else if (timeLeft === 1) {
//       timerEl.textContent = timeLeft + " second remaining";
//       timeLeft--;
//     } else {
//       timerEl.textContent = "";
//       clearInterval(timeInterval);
//     }
//   }, 1000);
//   displayQuestion(0)
// }
// ---------- End of original code ----------


// ---------- Ahmad's Edit ---------- 
function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + " seconds remaining";
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + " second remaining";
        timeLeft--;
      } else {
        timerEl.textContent = "";
        clearInterval(timeInterval);
      } 

    }, 1000);
    
    
    currentQuestion++
    while (currentQuestion < questions.length) {
    clearContent();
    var question = questions[0];
    var questionHeader = document.createElement("h2");
    questionHeader.textContent = question.question;
    var answerList = document.createElement("ul");
    for (let i = 0; i < question.answer.length; i++) {
  
      //i added this line 168-170
      // var button= document.createElement("button")
      // button.textContent= question.answer [i]
      // document.getElementById ("choice").append
  
  
      var li = document.createElement("li");
      li.textContent = question.answer[i];
      li.addEventListener('click', function(){
        //  evaluateAnswer(i===question.correct)       
          if (i === question.correct) {
              var done = document.querySelector("#done")
              done.innerHTML = 'Correct!'
          } else {
              var done = document.querySelector("#done")
              done.innerHTML = 'Wrong!'
              timeLeft-=10
          }
      })
      answerList.append(li);
  
    }
    contentEl.append(questionHeader, answerList);
}
  };  
// ---------- End of Ahmad's Edit ----------



//my for loop- might not need it
var score = 0;
// for (var i = 0; i < questions.length; i++) {
//   var answer = confirm(questions[i].question);
//   if (
//     (answer === true && questions[i].answer === true) ||
//     (answer === false && questions[i].answer === false)
//   ) {
//     score++;
//     alert("Correct!");
//   } else {
//     alert("Wrong!");
//     // also, subtract 10 seconds from each wrong answer
//   }
// }
// }

//alert("You got" + score + "/" + questions.length);

startBtn.addEventListener("click", function (event) {
  console.log(event.target);
  countdown();
});
// hides start page
// reveals first question
// starts the countdown

// var scores = [
// document.querySelector("#next").addEventListener("click", function() {
//     // var a = document.querySelector("#question-title");
//     var a = document.querySelector("#content");
//     for (var i = 0; i < questions.length; i++) {
//         // console.log(questions[i].question)
//         if (a.style.display != 'none') {
//             a.style.display = 'none';
//             document.getElementById("myquestion").innerHTML = questions[i].question;
//             for (var b = 0; b < questions[i].answer.length; b++) {
//                 document.getElementById("myanswers").innerHTML = questions[i].answer[b];

//             }
//         }

//     }

//     // .textContent = questions[i].question;
//     // i++;
//     // document.querySelector("#whee").setAttribute("class", "");
//     //document.querySelector("#whee").setAttribute("style", "background-color: blue")
//     // localStorage.setItem("name", "Hannah");
//     // scores = [
//     //     {
//     //         initials: "hf",
//     //         scores: 2
//     //     }
// });

//     localStorage.setItem("scores", JSON.stringify(scores));
// })

// //clearInterval with global variable timeInterval after last question is done

// console.log(localStorage);

// var whatIsInsideLocalStorage = localStorage.getItem("name");
// console.log(whatIsInsideLocalStorage);

// var storedScores = JSON.parse(localStorage.getItem("scores"));
// console.log(storedScores);

// var nullArrExample = JSON.parse(localStorage.getItem("doesntExist"));
// console.log(nullArrExample);
// nullArrExample.push({
//     initials: "hf",
//     score: 2
//
var clearContent = function () {
  contentEl.innerHTML = "";
};

// var displayQuestion = function (index) {
//   clearContent();
//   var question = questions[index];
//   var questionHeader = document.createElement("h2");
//   questionHeader.textContent = question.question;
//   var answerList = document.createElement("ul");
//   for (let i = 0; i < question.answer.length; i++) {

//     //i added this line 168-170
//     // var button= document.createElement("button")
//     // button.textContent= question.answer [i]
//     // document.getElementById ("choice").append


//     var li = document.createElement("li");
//     li.textContent = question.answer[i];
//     li.addEventListener('click', function(){
//        evaluateAnswer(i===question.correct)       
//         if (i === question.correct) {
//             var done = document.querySelector("#done")
//             done.innerHTML = 'Correct!'
//         } else {
//             var done = document.querySelector("#done")
//             done.innerHTML = 'Wrong!'
//         }
//     })
//     answerList.append(li);

//   }
//   contentEl.append(questionHeader, answerList);

// };

// var evaluateAnswer = function (correct) {
//     console.log()
//     currentQuestion++
//     if (currentQuestion < questions.length){
//         displayQuestion(currentQuestion)
//     } else {
//         var done = document.querySelector("#done")
//         done.innerHTML = 'finished'
//             // you need to create another page to show the form instead of showing "finished"
//     }
    
// }

