function showAlert() {
    alert("The button was clicked!");
}

var square = document.getElementById("square"),
    clickMe = document.getElementById('clickMe'); //Keeping it unobstrusive
function doDemo () {

  var button = this;
  square.style.backgroundColor = "#f7a4";
  button.setAttribute("disabled", "true");
  setTimeout(clearDemo, 2000, button);
}

function clearDemo (button) {
  var square = document.getElementById("square");
  square.style.backgroundColor = "transparent";
  button.removeAttribute("disabled");
}

clickMe.onclick = doDemo; //Onclick call. Pass no arguments.​​​​​