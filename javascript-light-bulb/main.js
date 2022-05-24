var $light = document.querySelector('.circle');
var $background = document.querySelector('.circle-container');
var isOn = true;

$light.addEventListener('click', onOff);

function onOff(event) {
  if (isOn === true) {
    $background.style.backgroundColor = 'black';
    $light.style.backgroundColor = '#1c1c1c';
    $light.style.boxShadow = 'none';
    isOn = false;
  } else if (isOn === false) {
    $background.style.backgroundColor = '#fef9f1';
    $light.style.backgroundColor = '#faea84';
    $light.style.boxShadow = '0 0 10px 10px #faefb7';
    isOn = true;
  }
}
