// query select both chevrons, all circles, circles container and images
// set counter to 0

// add event listener to each chevron
//      if chevron clicked, fire function for chevron clicks which will:
//          check if right or left chevron was clicked
//          if right:
//              hide current image and display next image
//              if last image is displayed, go back to first image
//          if left:
//              hide current image and display previous image
//              if first image is display, go to the last image
//          both clicks reset the interval

// add event listeners to circle container
//      check if an icon was clicked
//          if yes, hide the current image and reset the circle to not filled
//          then set the counter to the current data circle id display minus 1
//          use current counter to set the image at the counter index to show
//          use current counter to set the circle at counter to become solid

// add set interval to change to next image after 3 seconds

// declare function for moving from last image to first image
//      if counter equals length of images...
//      hide last image and make last circle blank
//      reset counter
//      and show image at counter and circle at counter becomes solid

// declare function for moving from first image to last
//      if counter equals to zero
//      hide first image and make first circle blank
//      set counter to length of images minus 1
//      show image at counter and cricle at counter becomes solid

// delcare function to reste the interval
//    calls on clear interval with the previously declared interval ID
//    redelcares the interval ID variable with set interval at 3s

var $leftChevron = document.querySelector('.fa-chevron-left');
var $rightChevron = document.querySelector('.fa-chevron-right');
var $circles = document.querySelectorAll('.fa-circle');
var $circlesContainer = document.querySelector('.dots-container');
var $images = document.querySelectorAll('.carousel-img');
var count = 0;

$leftChevron.addEventListener('click', chevronClicked);
$rightChevron.addEventListener('click', chevronClicked);
$circlesContainer.addEventListener('click', circleClicked);

var carouselIntervalID = setInterval(nextImg, 3000);

function chevronClicked(event) {
  if (event.target.className.includes('right')) {
    nextImg();
    resetInterval();
  } else if (event.target.className.includes('left')) {
    prevImg();
    resetInterval();
  }
}

function circleClicked(event) {
  if (event.target.matches('i')) {
    $images[count].className = 'carousel-img hidden';
    $circles[count].className = 'fa-regular fa-circle fa-lg';
    count = event.target.getAttribute('data-circle-id') - 1;
    $images[count].className = 'carousel-imge';
    $circles[count].className = 'fa-solid fa-circle fa-lg';
    resetInterval();
  }
}

function nextImg() {
  if (count === $images.length - 1) {
    lastToFirstImg();
  } else if (count >= 0) {
    $images[count].className = 'carousel-img hidden';
    $circles[count].className = 'fa-regular fa-circle fa-lg';
    count++;
    $images[count].className = 'carousel-img';
    $circles[count].className = 'fa-solid fa-circle fa-lg';
  }
}

function prevImg() {
  if (count === 0) {
    firstToLastImg();
  } else {
    $images[count].className = 'carousel-img hidden';
    $circles[count].className = 'fa-regular fa-circle fa-lg';
    count--;
    $images[count].className = 'carousel-img';
    $circles[count].className = 'fa-solid fa-circle fa-lg';
  }
}

function lastToFirstImg() {
  $images[count].className = 'carousel-img hidden';
  $circles[count].className = 'fa-regular fa-circle fa-lg';
  count = 0;
  $images[count].className = 'carousel-img';
  $circles[count].className = 'fa-solid fa-circle fa-lg';
}

function firstToLastImg() {
  $images[count].className = 'carousel-img hidden';
  $circles[count].className = 'fa-regular fa-circle fa-lg';
  count = $images.length - 1;
  $images[count].className = 'carousel-img';
  $circles[count].className = 'fa-solid fa-circle fa-lg';
}

function resetInterval() {
  clearInterval(carouselIntervalID);
  carouselIntervalID = setInterval(nextImg, 3000);
}
