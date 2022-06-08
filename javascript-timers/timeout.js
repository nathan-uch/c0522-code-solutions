// query select the message for displaying text
// declare a function with a text parameter
// change the display text to the text parameter
// set a timeout function with the change text function with a 2s delay and text content

var $message = document.querySelector('.message');

function changeText(text) {
  $message.textContent = text;
}

setTimeout(changeText, 2000, 'Hello There');
