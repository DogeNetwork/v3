(function () {
  var defaultTitle = 'Doge';
  var defaultIcon = '/assets/img/doge.jpg';

  var storedTitle = localStorage.getItem('tabTitle');
  var storedIcon = localStorage.getItem('tabIcon');

  var newTitle = storedTitle || defaultTitle;
  var newIcon = storedIcon || defaultIcon;

  var icon = document.querySelector('link[rel="icon"]');
  if (icon) {
    icon.setAttribute('href', newIcon);
  } else {
    console.log('Tab Cloak Disabled');
  }

  if (storedTitle) {
    document.title = newTitle;
  }
})();
alert('This version of Doge Unblocker is outdated. Please join our Discord for a newer version.\n\nhttps://dsc.gg/unblockrr');
