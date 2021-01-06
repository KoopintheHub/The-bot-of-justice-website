var darken = false;
var darkenEl = document.getElementById('darken');

function displayDialog(width, height, innerHTML) {
    if (!darken) {
        darken = true;
        document.getElementById('darken').style = "pointer-events: all; background: rgba(0,0,0,0.5); width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 15";
        document.getElementById('darken').innerHTML = "<div style=\"opacity: 1; background-color: rgba(255, 255, 255, 0.5); border: 1px solid black; border-radius: 18px; display: block; width: " + width + "px; height: " + height + "px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);\"><div style=\"position: absolute; left: 6px; top: 3px;\">" + innerHTML + "</div></div>";
        $('#darken').fadeOut(0);
        $('#darken').fadeIn(150);
    } else {
        darken = false;
        // document.getElementById('darken').style = "pointer-events: none; background: rgba(0,0,0,0); width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 15";
        // document.getElementById('darken').innerHTML = "";
        $('#darken').fadeOut(150);
    }
}
