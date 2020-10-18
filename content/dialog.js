var darken = false;
var darkenEl;

function displayDialog(string, buttonNum) {
  if (!darken) {
    darken = true;
    allowToPressButton = false;
    darkenEl.style = "tpointer-events: all; background: rgba(0,0,0,0.5); width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 15; transition: 0.5s";
    darkenEl.innerHTML = "<div class=\"border\" style=\"opacity: 1; display: block; width: 50%; height: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); transition: 0.5s;\">" + string + "<button onclick=\"displayDialog()\" style=\"width: calc(100% - 11px); position: absolute; bottom: 5px; left: 5px\">OK</button></div>";
  } else {
    darken = false;
    allowToPressButton = true;
    darkenEl.style = "pointer-events: none; background: rgba(0,0,0,0); width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 15; transition: 0.5s";
    darkenEl.innerHTML = "";
  }
}
