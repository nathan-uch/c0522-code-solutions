// query select the tab container and assign to a variable
// query select all tabs and assign to variable
// query select all view and assign to a variable
// add a click event listener to the tab container
// check if a tab was clicked from the event target
// loop through each tab
// if the current tab is strictly equal to the event target
// change the class name of the tab to active
// all other tab class names should not have active
// get event target data view attribute (still inside event listener call back function)
// and assign it to a variable
// loop through the elements with class view
// get view at the current idnex's data-view attribute and assign to a variable
// check if the view data view equals to the tab data view attribute
// if it does, give it a class of view
// if not, make it hidden by adding hidden class

var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {

  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabs.length; i++) {
      if (event.target === $tabs[i]) {
        $tabs[i].className = 'tab active';
      } else {
        $tabs[i].className = 'tab';
      }
    }
  }

  var tabDataView = event.target.getAttribute('data-view');
  for (var n = 0; n < $views.length; n++) {
    var viewDataView = $views[n].getAttribute('data-view');
    if (viewDataView === tabDataView) {
      $views[n].className = 'view';
    } else {
      $views[n].className = 'view hidden';
    }
  }

});
