
// number of right answers 
var wins = 0;
var losses = 0;
var winrate = 0;

//quiz questions array. 
var questions = [
  {
    title: "what is javascript used for ?",
    correctAnswer: "functionality",
    options: ["Style", "Framework", "fun", "functionality"]
  },
  {
    title: "what kind of language is javascript ?",
    correctAnswer: "Coding Language",
    options: ["Love", "Dead", "Foreign", "Coding Language"]
  },
  // add the rest of the questions, add the correct answer answer. click event on the answers to change background color
  {
    title: "What is one other CSS framework besides bootstrap ?",
    correctAnswer: "Pure",
    options: ["Shoestrap", "Sandalstrap", "Airforce1strap", "Pure"]
  }
];

// these are variables refercing HTML elements. 
// current is the index for the questions array. 
var current = 0;
var questionContainer = document.querySelector("#question-container")
var something = document.querySelector("#title");
var answerSpace = document.querySelector("#Answers");
var nextButton = document.querySelector("#next-btn");
var submitButton = document.querySelector("#Submit-btn");
var secondsLeft = document.getElementById('countdown');
var second = 20;
var countingDown = document.getElementById('#countdown');
var startButton = document.getElementById('start-btn');

// create global variable for right answer
let correctAnswer = questions.correctAnswer

// create global for timer
let interval;
let button; 
let Answer;
let options; 
let currentQuestion; 
let buttonClicked;
let correctButton;

var Answers = questions.options.splice(4,1)

function createQuestions() {
  console.log('inside createQuestions');
   currentQuestion = questions[current];
  current++
  var title = currentQuestion.title;
  something.innerHTML = title;
  correctAnswer = currentQuestion.correctAnswer;
   options = currentQuestion.options;
  answerSpace.innerHTML = "";
  for (var i = 0; i < options.length; i++) {
     Answer = options[i];
   button = document.createElement("button");
    button.setAttribute("class", "btn");
    button.innerHTML = Answer;
    answerSpace.appendChild(button);
  buttonClicked = button.addEventListener("click", checkForAnswer);
    buttonClicked = Answer
  }
}

//colorChange()
// document.querySelector("#Answers").addEventListener("click", colorChange); 
//function colorChange(){
//document.getElementById("correctAnswer").onclick = function (){
//document.getElementById("correctAnswer").style.backgroundColor = "#green";
//} 
//document(getElementById)("#Answers").style.backgroundColor = ('red'); 
//var timeEl = document.querySelector(".time");
//var mainEl = document.getElementById("main");

function checkForAnswer(score) {
 // console.log('Checking for Answer');
 // console.log(options)
  // console.log(correctAnswer);
  score = [ correctButton + 1 ]; 
  //if( correctButton == true ) {
    //console.log("right Answer")
//document.getElementById('#button').backgroundColor = ('green') 
    // what do you want to have happen if the user selected thr right answer
 // } else ( options.splice(4,1) == false)
    //console.log("wrong"); 
    // what now
 if(buttonClicked == Answers )
 console.log(score)
 
  }

function start() {
  interval = setInterval(countDown, 1000);
  createQuestions();
  // scores();
}

function countDown() {
  second--;
  //console.log("first" + second);
  secondsLeft.textContent = second;
  // console.log(secondsLeft);
  if (second <= 0) {
    secondsLeft.textContent = 'Times up!';
    // console.log(secondsLeft.textContent)
    clearInterval(interval)
  }
}

function selectQuestion() {
  // when button is pressed, the correct answer changes green, the rest of them turn yellow.

  // when the submit button is pressed, the screen displays pass or fail .


  // everytime we click the questions we have to grab correct answer from question Array

  // compare click answer to correct answer, "if statement"

  //inside the if statement, keep score on global score variable, if correct answer = clicked answer, score plus one

  //
}

startButton.onclick = start;
nextButton.onclick = createQuestions;



