var darken = false;
var runningOnMobile = false;
var device = navigator.userAgent;
if (device.match(/Android/i)
 || device.match(/webOS/i)
 || device.match(/iPhone/i)
 || device.match(/iPad/i)
 || device.match(/iPod/i)
 || device.match(/BlackBerry/i)
 || device.match(/Windows Phone/i)){
 runningOnMobile = true;
}
var dialog = document.getElementById('darken');
var code = document.getElementById('codeBox').value;
