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

    var tabDataView = event.target.getAttribute('data-view');
    for (var n = 0; n < $views.length; n++) {
      var viewDataView = $views[n].getAttribute('data-view');
      if (viewDataView === tabDataView) {
        $views[n].className = 'view';
      } else {
        $views[n].className = 'view hidden';
      }
    }
  }

});
