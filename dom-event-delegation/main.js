var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', function (event) {
  console.log('event target:', event.target);
  console.log('event target tag name:', event.target.tagName);
  if (event.target.nodeName === 'BUTTON') {
    var closestTask = event.target.closest('.task-list-item');
    console.log('closest task:', closestTask);
    closestTask.remove();
  }
});
