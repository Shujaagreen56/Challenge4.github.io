
// number of right answers 
var wins = 0;
var losses = 0;
var winRate = 0;
var currentScore = 0; 

function highScore(){
 window.alert('Your final score is' + winRate + ' /3' );
 }; 

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
    options: ["Love", "Coding Language", "Dead", "Foreign",]
  },
  // add the rest of the questions, add the correct answer answer. click event on the answers to change background color
  {
    title: "What is one other CSS framework besides bootstrap ?",
    correctAnswer: "Pure",
    options: ["Pure", "Shoestrap", "Sandalstrap", "Airforce1strap",]
  }
];

// these are variables refercing HTML elements. 
// current is the index for the questions array. 
var currentIndex = 0;
var questionContainer = document.querySelector("#question-container")
var questionTitle = document.querySelector("#title");
var answerSpace = document.querySelector("#Answers");
var goodAnswerSpace = document.querySelector("#goodAnswers");
var nextButton = document.querySelector("#next-btn");
var submitButton = document.querySelector("#Submit-btn");
var secondsLeft = document.getElementById('countdown');
var second = 20;
var countingDown = document.getElementById('#countdown');
var startButton = document.getElementById('start-btn');

// create global variable for right answer

// create global for timer
let interval;
let button;
let answerChoicesArray;
let currentQuestion;
let buttonClicked;
let correctButton;
let goodAnswer;
let correctAnswer;
// = ('green'); }

function createQuestions() {
  //clear out previous answer choices 
  answerSpace.innerHTML = "";
  console.log('inside createQuestions');
  //update current question 
  currentQuestion = questions[currentIndex];
  // add one to the current index
  currentIndex++
  //update the text of the current question 
  
  questionTitle.textContent = currentQuestion.title;
  // set the correct answer for the current question we're on
  correctAnswer = currentQuestion.correctAnswer;
  console.log('correctAnswer is', correctAnswer);
  answerChoicesArray = currentQuestion.options;
  // for the current question create the answer choice buttons 
  for (var i = 0; i < answerChoicesArray.length; i++) {
    var greenButton = document.createElement("button");
    greenButton.textContent = answerChoicesArray[i];
    greenButton.setAttribute("class", "btn-answer-choice");
    answerSpace.appendChild(greenButton);
  }
  // for (var i = 0; i < correctAnswer.length; i++) {
  //   goodAnswer = correctAnswer[i];
  //   button = document.createElement("button");
  //   button.setAttribute("class", "btn");
  //   button.innerHTML = goodAnswer;
  //   answerSpace.appendChild(button);
  // }
  document.querySelectorAll(".btn-answer-choice").forEach( btn => btn.addEventListener("click", checkForAnswer));

  // buttonClicked = button.addEventListener("click", checkForAnswer);
  // buttonClicked = Answer
  // correctButton = button.addEventListener("click", checkForAnswer);
  // correctButton = goodAnswer
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

function checkForAnswer(e) {
  console.log('answer choice clicked');
  //target is the thing that was clicked on, e is the event 
  const target = e.target;
  const value = target.textContent
  console.log('The e.target.textContent is', value);
  // console.log('Checking for Answer');
  // console.log(options)
  // console.log(correctAnswer);
  //score = [correctButton + 1];

  if (value == correctAnswer) {
    console.log("right Answer");
      winRate ++
//currentScore = winRate * 33.33
   // console.log(currentScore)
    //winRate = currentScore
   // console.log(currentScore + ('%'))
    //document.getElementById('#button').backgroundColor = ('green') 
    // what do you want to have happen if the user selected thr right answer
  } else {
    console.log("wrong")
  }

  // move on to the next question
  createQuestions();
 
}

// console.log(correctAnswer); 

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
    highScore(); 
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

// nextButton.onclick = createQuestions;



