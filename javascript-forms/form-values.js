var $form = document.forms[0];

$form.addEventListener('submit', function (event) {
  var formObj = {};
  formObj.name = $form.elements.name.value;
  formObj.email = $form.elements.email.value;
  formObj.message = $form.elements.message.value;
  console.log(formObj);
  $form.reset();
  event.preventDefault();
});
