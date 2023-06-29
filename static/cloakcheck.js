javascript:(function () {
  var defaultTitle = 'Doge Unblocker';
  var defaultIcon = 'doge.jpg';

  var storedTitle = localStorage.getItem('tabTitle');
  var storedIcon = localStorage.getItem('tabIcon');

  var newTitle = storedTitle || defaultTitle;
  var newIcon = storedIcon || defaultIcon;

  document.title = newTitle;
  var icon = document.querySelector('link[rel="icon"]');
  icon.setAttribute('href', 'newIcon');

  localStorage.setItem('tabTitle', newTitle);
  localStorage.setItem('tabIcon', newIcon);
})();
