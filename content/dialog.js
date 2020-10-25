var darken = false;
var darkenEl = document.getElementById('darken');

function displayDialog(width, height, string, buttonNum) {
  if (!darken) {
    darken = true;
    allowToPressButton = false;
    darkenEl.style = "pointer-events: all; background: rgba(0,0,0,0.5); width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 15;";
    darkenEl.innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; width: 50%; height: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);\">" + string + "<button onclick=\"displayDialog()\" style=\"width: calc(100% - 11px); position: absolute; bottom: 5px; left: 5px\">OK</button></div>";
    $('#darken').fadeOut(0);
    $('#darken').fadeIn(150);
  } else {
    darken = false;
    allowToPressButton = true;
    /* darkenEl.style = "pointer-events: none; background: rgba(0,0,0,0); width: " + width + "%; height: " + height + "%; position: fixed; top: 0px; left: 0px; z-index: 15;";
    darkenEl.innerHTML = ""; */
    $('#darken').fadeOut(150);
  }
}
