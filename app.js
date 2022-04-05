let seconds = 00;
let tens = 00;
let minutes = 00;
let outputSeconds = document.getElementById('second');
let outputTens = document.getElementById('tens');
let outputMinutes = document.getElementById('minutes');
let buttonStart = document.getElementById('start');
let buttonStop = document.getElementById('stop');
let buttonReset = document.getElementById('reset');
let interval;

buttonStart.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startTime, 10);
});
buttonStop.addEventListener('click', () => {
  clearInterval(interval);
});
buttonReset.addEventListener('click', () => {
  clearInterval(interval);
  tens = '00';
  seconds = '00';
  minutes = '00';
  outputSeconds.innerHTML = seconds;
  outputTens.innerHTML = tens;
  outputMinutes.innerHTML = minutes;
});

let startTime = () => {
  tens++;
  console.log(tens);
  if (tens <= 9) {
    outputTens.innerHTML = '0' + tens;
  }
  if (tens > 9) {
    outputTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    outputSeconds.innerHTML = '0' + seconds;
    tens = 0;
    outputTens.innerHTML = '0' + tens;
  }
  if (seconds > 9) {
    outputSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    minutes++;
    outputMinutes.innerHTML = '0' + minutes;
    seconds = 0;
    outputSeconds.innerHTML = '0' + seconds;
  }
  if (minutes > 9) {
    outputMinutes.innerHTML = minutes;
  }
};
