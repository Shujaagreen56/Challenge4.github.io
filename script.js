
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = document.getElementById('countdown');
var second = 18 
//var countingDown = document.getElementById('#countdown'); 
function countDown(){
second -=1 
console.log(second)
secondsLeft.innerHTML = second
console.log(secondsLeft)

if(second == 0){
    secondsLeft.innerHTML = 'Times up!'
      clearInterval(setInterval)
console.log(secondsLeft.innerHTML)}
 
 var setInterval = secondsLeft.innerHTML(countDown, 1000) }


 var quizlet = document.getElementById('question')
  var answer = document.getElementById('answer')
  var answer1 = document.getElementById('answer1')
  var answer2 = document.getElementById('answer2')
  var correct = document.getElementById('correct')

  function q1 (){
    quizlet.innerHTML = '<p>What kind of language is Javascript ?</p>'
    answer.innerHTML = '<p>Love language</p>'
    answer1.innerHTML = '<p>Foreign language</p>'
    answer2.innerHTML = '<p>Dead language</p>'
    correct.innerHTML = '<p>Coding Language </p>'







  }









