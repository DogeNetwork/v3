function showContextMenu(event) {
  event.preventDefault();
  var contextMenu = document.getElementById("contextMenu");
  contextMenu.style.left = event.clientX + "px";
  contextMenu.style.top = event.clientY + "px";
  contextMenu.style.display = "block";
}

function hideContextMenu() {
  var contextMenu = document.getElementById("contextMenu");
  contextMenu.style.display = "none";
}

var submenuOpen = false;

function toggleSubmenu(event) {
  var submenu = document.querySelector('.context-submenu');
  var submenuParent = document.querySelector('.with-submenu');

  if (submenuOpen) {
    submenu.style.display = 'none';
    submenuParent.classList.remove('open');
  } else {
    submenu.style.display = 'block';
    submenuParent.classList.add('open');
    event.stopPropagation(); // Prevent the click event from closing the right-click menu
  }

  submenuOpen = !submenuOpen;
}

  // Hide the submenu after clicking a button
  var submenu = document.querySelector('.context-submenu');
  submenu.style.display = 'none';
  submenuOpen = false;
}

function tabCloak() {
  var newTitle = 'My Drive - Google Drive';
  var newIcon = 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png';

  localStorage.setItem('tabTitle', newTitle);
  localStorage.setItem('tabIcon', newIcon);

  document.title = newTitle;
  var icon = document.querySelector('link[rel="icon"]');
  icon.setAttribute('href', newIcon);
}

function disableTabCloak() {
  var newTitle = 'Doge Unblocker';
  var newIcon = '/assets/img/doge.jpg';

  localStorage.setItem('tabTitle', newTitle);
  localStorage.setItem('tabIcon', newIcon);

  document.title = newTitle;
  var icon = document.querySelector('link[rel="icon"]');
  icon.setAttribute('href', newIcon);
}

function openWindow() {
  let url = window.location.href;
  var w = window.open("about:blank", "_blank", "status=no,toolbar=no,location=no,directories=no,resizable=yes,scrollbars=yes,width=9999999,height=99999");
  w.document.write('<iframe style="position: absolute;top: 0px;bottom: 0px;right: 0px;width: 100%;border: none;margin: 0;padding: 0;overflow: hidden;z-index: 99999;height: 100%;" src="' + url + '"></iframe>');
}

// Add event listeners to show/hide the context menu
document.addEventListener("contextmenu", showContextMenu);
document.addEventListener("click", hideContextMenu);

// Add event listener to hide the context menu and submenu when clicking outside of them
document.addEventListener("click", function(event) {
  var contextMenu = document.getElementById("contextMenu");
  var submenu = document.querySelector('.context-submenu');
  
  if (!contextMenu.contains(event.target)) {
    hideContextMenu();
    hideSubmenu();
  } else if (!submenu.contains(event.target)) {
    hideSubmenu();
  }
});

function hideSubmenu() {
  var submenu = document.querySelector('.context-submenu');
  submenu.style.display = 'none';
  submenuOpen = false;
}
