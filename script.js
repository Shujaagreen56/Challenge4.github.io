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
console.log(secondsLeft); 

function countDown(){
//const timeLeft = 0; 
second -=1 
//const timeDone = timeOut - timeRemaining
console.log(second)
secondsLeft.innerHTML = second 
console.log(secondsLeft); 

if(second = 0){
    secondsLeft.innerHTML = 'Times up!';
      clearInterval(this.interval);
}

//if (timeDone <= 0 ){
  //  countDown.innerHTML = "End of Quiz"
   // clearInterval(timerId)
  //  return }

//const minutes = Math.floor(minute); 
//const seconds = Math.floor(timeDone % minute) / second ; 
//countDown.innerHTML = minutes + 'minutes' + seconds + 'seconds'
 }
 
 const setInterval = secondsLeft.innerHTML(countDown, 1000) 


//function windDown(){
  //  alert('Times up!') }
 //setTimeout(windDown, 50000) 







