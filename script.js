
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
nextButton.onclick = createQuestions;


function createQuestions() {
  var currentQuestion = questions[current];
  current++
  var title = currentQuestion.title;
  something.innerHTML = title;
  var correctAnswer = currentQuestion.correctAnswer;
  var options = currentQuestion.options;
  answerSpace.innerHTML = "";
  for (var i = 0; i < options.length; i++) {
    var Answer = options[i];
    var button = document.createElement("button" );
    button.setAttribute("class", "btn");
    button.innerHTML = Answer;
    answerSpace.appendChild(button);
    
    
    button.addEventListener("click", () => button.style.backgroundColor = 'green'); }
 
  }
    //function scores(userChoice, Answer){ 
    //if( userChoice = Answer ){
      // score = wins +1
    //}
    //if ( userChoice !== Answer){
      //score = losses +1
    //}}
   


     //colorChange()
  
 // document.querySelector("#Answers").addEventListener("click", colorChange); 
//function colorChange(){
//document.getElementById("correctAnswer").onclick = function (){
//document.getElementById("correctAnswer").style.backgroundColor = "#green";
//} 
  //document(getElementById)("#Answers").style.backgroundColor = ('red'); 


//var timeEl = document.querySelector(".time");
//var mainEl = document.getElementById("main");
var secondsLeft = document.getElementById('countdown');
var second = 10;
if(second===0)
  clearInterval("#countdown"); 
var countingDown = document.getElementById('#countdown'); 
var startButton = document.getElementById('start-btn');
startButton.onclick = start;

function start() {
  var interval = setInterval(countDown, 1000);
  createQuestions();

}


function countDown() {
  second--;
  console.log("first" + second);
  secondsLeft.textContent = second;
  console.log(secondsLeft);

  if (second == 0) {
    secondsLeft.textContent = 'Times up!';
    console.log(secondsLeft.textContent)
  }
  if (second < 0 ){
   document.innerHTML= clearInterval; 
 window.alert("PASS");
 ;  
  }
  ;

  // var setInterval = secondsLeft.innerHTML(countDown, 1000)
};

var goodBoy = document.querySelector('#correct');
var goodAnswer = document.querySelector('#submit-btn');
addEventListener("click", goodAnswer);
// var goodGirl = document.getElementsByid().addEventListener
function q1() {
  if (goodBoy === true) {
    Window.Alert('you win a million quarters');
  }
}

//else(window.Alert s('you lose nothing'); 

//start();



function selectQuestion() {

  // when button is pressed, the correct answer changes green, the rest of them turn yellow.

  // when the submit button is pressed, the screen displays pass or fail .


  // everytime we click the questions we have to grab correct answer from question Array

  // compare click answer to correct answer, "if statement"

  //inside the if statement, keep score on global score variable, if correct answer = clicked answer, score plus one

  //
}




