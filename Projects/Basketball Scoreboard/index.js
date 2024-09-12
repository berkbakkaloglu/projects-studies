let counthome = 0
let countguest = 0
let homeScoreEl = document.getElementById("homescore")
let guestScoreEl = document.getElementById("guestscore")

function onehome()
{
    counthome += 1
    homeScoreEl.textContent = counthome
    console.log(counthome)
    
}

function twohome()
{
    counthome += 2
    homeScoreEl.textContent = counthome
    console.log(counthome)
    
}

function threehome()
{
    counthome += 3
    homeScoreEl.textContent = counthome
    console.log(counthome)
    
}

function oneguest()
{
    countguest += 1
    guestScoreEl.textContent = countguest
    console.log(counthome)
    
}

function twoguest()
{
    countguest += 2
    guestScoreEl.textContent = countguest
    console.log(counthome)
    
}

function threeguest()
{
    countguest += 3
    guestScoreEl.textContent = countguest
    console.log(counthome)
    
}



let timeInSeconds = 1 * 720;
let timerInterval;
let timerButton = document.getElementById("startTimerBtn");
let periodcount = 1

function setPeriod(pr){
  document.getElementById(pr).textContent += counthome + ":" + countguest
  

}

function timer() {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  const displayTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById('demo').innerText = displayTime;

  if (timeInSeconds === 0) {
    clearInterval(timerInterval);
    setPeriod('p' + periodcount)
    periodcount += 1
    timeInSeconds = 1*5
    

    
  } else {
    timeInSeconds--;
  }
}

// Example: Start the timer after a delay of 3 seconds
/* setTimeout(function() {
  timerInterval = setInterval(timer, 1000); // Change from updateTimer to timer
}, 3000); */


function startTimer() {
    if (!timerButton.disabled) {
       /*  timerButton.disabled = true; */
        timerInterval = setInterval(timer, 1000);
}
}
function stopTimer() {
    clearInterval(timerInterval);
    timerButton.disabled = false; // Enable the "Start Timer" button
  }

function resetTimer() {
  countguest = 0 
  counthome = 0
  homeScoreEl.textContent = counthome
  guestScoreEl.textContent = countguest
  document.getElementById("p1").textContent = "P1:" 
  document.getElementById("p2").textContent = "P2:"
  document.getElementById("p3").textContent = "P3:"
  document.getElementById("p4").textContent = "P4:"
  periodcount = 1
}