var $light = document.querySelector('.circle');
var $background = document.querySelector('.circle-container');
var clicks = 0;

$light.addEventListener('click', onOff);

function onOff(event) {
  if (clicks % 2 > 0) {
    $background.style.backgroundColor = 'black';
    $light.style.backgroundColor = '#1c1c1c';
    $light.style.boxShadow = 'none';
    clicks++;
  } else if (clicks % 2 === 0) {
    $background.style.backgroundColor = '#fef9f1';
    $light.style.backgroundColor = '#faea84';
    $light.style.boxShadow = '0 0 10px 10px #faefb7';
    clicks++;
  }
}
