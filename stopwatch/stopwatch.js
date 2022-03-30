window.onload = function() {
  var seconds = 0;
  var cents = 0;
  var appendSeconds = document.getElementById("seconds");
  var appendCents = document.getElementById("cents");
  var buttonStart = document.getElementById("start");
  var buttonStop = document.getElementById("stop");
  var buttonReset = document.getElementById("reset");
  var Interval;

  buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(StartTimer, 10);
  }
  buttonStop.onclick = function() {
    clearInterval(Interval);
  }
  buttonReset.onclick = function() {
    clearInterval(Interval);
    cents = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendCents.innerHTML = cents;
  }

  function StartTimer() {
    cents++;

    if(cents<=9){
      appendCents.innerHTML = "0" + cents;
    }
    else if(cents<100) {
      appendCents.innerHTML = cents;
    }
    else {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      cents = 0;
      appendCents.innerHTML = "00";
      if(seconds > 9) {
        appendSeconds.innerHTML = seconds;
      }
    }
  }
}