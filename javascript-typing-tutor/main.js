document.addEventListener('keydown', checkLetter);

var $accuracy = document.querySelector('.accuracy');
var $letters = document.querySelectorAll('span');
var currentIndex = 0;
var currentMistakes = 0;

var $resetBtn = document.querySelector('.reset');
$resetBtn.addEventListener('click', reset);

function checkLetter(event) {
  if (($letters[currentIndex].textContent === event.key) || ($letters[currentIndex].innerHTML === '&nbsp;' && event.key === ' ')) {
    $letters[currentIndex].className = 'correct';
    currentIndex++;
    $letters[currentIndex].className = 'current';
  } else if ($letters[currentIndex].textContent !== event.key) {
    $letters[currentIndex].className = 'wrong' + ' current';
    currentMistakes++;
  }

  var acc = Math.ceil(((($letters.length - currentMistakes) * 100) / $letters.length));
  $accuracy.textContent = 'Accuracy: ' + acc + '%';
  if (acc < 0) {
    $accuracy.textContent = 'Accuracy: 0%';
  }
}

function reset(event) {
  for (var i = 0; i < $letters.length; i++) {
    $letters[i].classList.remove('current');
    $letters[i].classList.remove('wrong');
    $letters[i].classList.remove('correct');
    $letters[0].className = 'current';
    currentIndex = 0;
    currentMistakes = 0;
    $accuracy.textContent = 'Accuracy: 100%';
  }
}
