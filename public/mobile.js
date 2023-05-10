let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);
if (isMobileDevice) {
    alert("Doge Unblocker has detected that you are accessing the website on mobile. Please use a computer instead as this website was not designed for mobile devices.");
  document.write('<iframe src="mobile.html" style="position: fixed; inset: 0px; outline: none; border: none; height: 100%; width: 100%; overflow: hidden;"></iframe>')
} else {
    console.log("You are using Desktop");
}