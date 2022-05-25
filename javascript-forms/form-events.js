function handleFocus(event) {
  console.log('focus event was fired');
  console.log('focus event target:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('blue event target:', event.target.name);
}

function handleInput(event) {
  console.log('event target name:', event.target.name);
  console.log('event target value:', event.target.value);
}

var $nameInput = document.forms[0].name;
var $emailInput = document.forms[0].email;
var $messageInput = document.forms[0].message;

$nameInput.addEventListener('focus', handleFocus);
$nameInput.addEventListener('blur', handleBlur);
$nameInput.addEventListener('input', handleInput);

$emailInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('input', handleInput);

$messageInput.addEventListener('focus', handleFocus);
$messageInput.addEventListener('blur', handleBlur);
$messageInput.addEventListener('input', handleInput);
