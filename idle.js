function toggle_idle() {
  var i = localStorage["is_idle"];
  if (i == 1) {
    setIdleOff();
  } else {
    setIdleOn();
  }
}

function setIdleOn() {
  localStorage["is_idle"] = 1;
  var idleButton = document.getElementById("idleButton");
  idleButton.className = "toggled";
}

function setIdleOff() {
  localStorage["is_idle"] = 0;
  var idleButton = document.getElementById("idleButton");
  idleButton.className = "";
}