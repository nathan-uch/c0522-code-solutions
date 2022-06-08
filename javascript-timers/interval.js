// query select the display
// set a variable time to null
// declare a count down function
// this function checks if time is 0,
//     if yes it will display the final message
//     and it will clear the set timeout for the countdown
//     if not, it will display the current time, remove 1 from the time and..
//     call the set timeout with the current time
// create a setTimeout function with the arguments of the count down function, one second delay and the time...
// assign it to a variable to be used in the clear timeout

var $display = document.querySelector('.countdown-display');
var time = 4;

function countDown(time) {
  if (time === 0) {
    $display.textContent = '~Earth Beeeelooowww Us~';
    clearTimeout(countDownTimeout);
  } else {
    $display.textContent = time;
    time--;
    setTimeout(countDown, 1000, time);
  }
}

var countDownTimeout = setTimeout(countDown, 1000, time);
