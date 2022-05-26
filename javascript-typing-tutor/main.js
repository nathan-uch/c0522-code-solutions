document.addEventListener('keydown', checkLetter);

var currentIndex = 0;
var currentMistakes = 0;

var $resetBtn = document.querySelector('.reset');
$resetBtn.addEventListener('click', reset);

function checkLetter(event) {
  var $accuracy = document.querySelector('.accuracy');
  var $letters = document.querySelectorAll('span');
  if (($letters[currentIndex].textContent === event.key)) {
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
  var $accuracy = document.querySelector('.accuracy');
  var $letters = document.querySelectorAll('span');

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

// prevent spacebar from scrolling down the page
window.addEventListener('keydown', function (event) {
  if (event.keyCode === 32 && event.target === document.body) {
    event.preventDefault();
  }
});

// create your own typing test
var $createBtn = document.querySelector('.create-text-btn');
var $text = document.querySelector('.text-box');
var $textContainer = document.querySelector('.typing-text-container');

$createBtn.addEventListener('click', createText);

function createText(event) {
  var textArray = $text.value.toLowerCase().split('');
  if (textArray.length < 5) {
    alert('Your text is too short (minimum 5 chars).');
    return;
  }

  // clear current text
  var $currentSpans = document.querySelectorAll('span');
  for (var s = 0; s < $currentSpans.length; s++) {
    $textContainer.removeChild($currentSpans[s]);
  }

  // add text from text area
  var $accuracy = document.querySelector('.accuracy');
  for (var h = 0; h < textArray.length; h++) {
    var $span = document.createElement('span');
    var $letter = document.createTextNode(textArray[h]);
    $span.appendChild($letter);
    $textContainer.appendChild($span);
    currentIndex = 0;
    currentMistakes = 0;
    $accuracy.textContent = 'Accuracy: 100%';
  }
}
