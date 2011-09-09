function save_options() {
  var m = parseInt(document.getElementById("minutes_inactive").value);

  if ( m > 0 && m < 720 ){
		    localStorage["minutes_inactive"] = m;

		    // Update status to let user know options were saved.
		    var status = document.getElementById("status");
		    status.innerHTML = "Saved.";
		    setTimeout(function() {
		       status.innerHTML = "";
 		       }, 4000);

  } else {
    window.alert("Must be greater than 0 and less than 720");
  }
}

function restore_options() {
  load_minutes_inactive()
  load_idle_state();
}

function load_minutes_inactive() {
  var m = localStorage["minutes_inactive"];
  if (!m) {
    m = 7; //default
  }
  document.getElementById("minutes_inactive").value = m;
}

function load_idle_state() {
  var i = localStorage["is_idle"];
  var idleButton = document.getElementById("idleButton");
  if (i == 0) {
    idleButton.className = "";
  } else {
    idleButton.className = "toggled";
  }
}
