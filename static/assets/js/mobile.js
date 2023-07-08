let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);
if (isMobileDevice) {
    alert("Doge Unblocker has detected that you are accessing the website on mobile. Please use a computer instead as this website was not designed for mobile devices.");
 window.location.href = 'mobile.html';
} else {
    console.log('I love big tall guys twerking in the shower');
}
