// Selects element by class

var timeEl = document.querySelector(".time");
// Selects element by id
var mainEl = document.getElementById("main");
var secondsLeft = document.getElementById('countdown');
var second = 18 
//const minute = second * 60; 
//const timeOut = minute * 5;
//const timeRemaining = new Number(0)
//let timerId
//const minute = second * 60; 
//const timeOut = minute * 5;
//const timeRemaining = new Number(0)
//let timerId
//const minute = second * 60; 
//const timeOut = minute * 5;

//const timeRemaining = new Number(0)

//let timerId 



function countDown(){
//const timeLeft = 0; 
second -=1 
//const timeDone = timeOut - timeRemaining
console.log(second)
secondsLeft.innerHTML = seconds
console.log(secondsLeft)

if(second = 0){
    secondsLeft.innerHTML = 'Times up!'
      clearInterval()
console.log(secondsLeft.innerHTML)}}

//if (timeDone <= 0 ){
  //  countDown.innerHTML = "End of Quiz"
   // clearInterval(timerId)
  //  return }

//const minutes = Math.floor(minute); 
//const seconds = Math.floor(timeDone % minute) / second ; 
//countDown.innerHTML = minutes + 'minutes' + seconds + 'seconds'
 
 
 var setInterval = countDown.innerHTML(countDown, 1000) 


//function windDown(){
  //  alert('Times up!') }
 //setTimeout(windDown, 50000) 







