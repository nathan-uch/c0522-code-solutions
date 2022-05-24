var $openModal = document.querySelector('.open-modal-btn');
var $noBtn = document.querySelector('.modal-btn');
var $modalCont = document.querySelector('.modal-container');

$openModal.addEventListener('click', openModal);
$noBtn.addEventListener('click', closeModal);

function openModal(event) {
  $modalCont.style.display = 'block';
}

function closeModal(event) {
  $modalCont.style.display = 'none';
}
