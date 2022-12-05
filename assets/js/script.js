var appendSeconds = document.querySelector("#seconds");
var appendTens = document.querySelector("#tens")
var startButton = document.querySelector("#start");
var stopButton = document.querySelector("#stop");
var resetButton = document.querySelector("#reset");
var Interval ;
var seconds = 00;
var tens = 00;

startButton.addEventListener("click", function(){
    
    clearInterval(Interval);
    Interval = setInterval(startTimer,10);

});

function startTimer () {
    tens++; 
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    if (tens > 9){
      appendTens.innerHTML = tens;
    } 
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
   }
  

   stopButton.onclick = function() {
    clearInterval(Interval);
}

resetButton.onclick = function() {
  clearInterval(Interval);
 tens = "00";
 seconds = "00";
 appendTens.innerHTML = tens;
 appendSeconds.innerHTML = seconds;
}