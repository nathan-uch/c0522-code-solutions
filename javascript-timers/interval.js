// query select current display
// get the time by converting the text content to a number
// declare a count variable which equals the time number
// declare a count down function
// this function checks if current display countdown is at 0,
//     if yes it will display the final message
//     and it will clear the set timeout for the countdown
//     if not, it will display count as text content
//     and will decrement the count
// create a setTimeout function with the arguments of the count down function, one second delay and the time...
// assign it to a variable to be used in the clear timeout

var $display = document.querySelector('.countdown-display');
var time = Number($display.textContent);
var count = time;

function countDown(time) {
  if (count === 0) {
    $display.textContent = '~Earth Beeeelooowww Us~';
    clearTimeout(countDownTimeout);
  } else {
    $display.textContent = count;
    count--;
  }
}

var countDownTimeout = setInterval(countDown, 1000, time);
