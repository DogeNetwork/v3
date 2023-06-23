javascript:(function () {
  var defaultTitle = 'sadas';
  var defaultIcon = '';

  var storedTitle = localStorage.getItem('tabTitle');
  var storedIcon = localStorage.getItem('tabIcon');

  var newTitle = storedTitle || defaultTitle;
  var newIcon = storedIcon || defaultIcon;

  document.title = newTitle;
  var icon = document.querySelector('link[rel="icon"]');
  icon.setAttribute('href', 'https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png');

  localStorage.setItem('tabTitle', newTitle);
  localStorage.setItem('tabIcon', newIcon);
})();
