(function () {
  var defaultTitle = 'Doge Unblocker';
  var defaultIcon = '/assets/img/doge.jpg';

  var storedTitle = localStorage.getItem('tabTitle');
  var storedIcon = localStorage.getItem('tabIcon');

  var newTitle = storedTitle || defaultTitle;
  var newIcon = storedIcon || defaultIcon;

  document.title = newTitle;
  var icon = document.querySelector('link[rel="icon"]');
  if (icon) {
    icon.setAttribute('href', newIcon);
  } else {
    icon = document.createElement('link');
    icon.setAttribute('rel', 'icon');
    icon.setAttribute('href', newIcon);
    document.head.appendChild(icon);
  }
})();
