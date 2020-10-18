var runningOnMobile = false;
var device = navigator.userAgent;
darkenEl = document.getElementById('darken');

const params = new URLSearchParams(window.location.search);

if (device.match(/Android/i)
 || device.match(/webOS/i)
 || device.match(/iPhone/i)
 || device.match(/iPad/i)
 || device.match(/iPod/i)
 || device.match(/BlackBerry/i)
 || device.match(/Windows Phone/i)){
  runningOnMobile = true;
}
var code = document.getElementById('codeBox');
var allowToPressButton = true;
