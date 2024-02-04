const displayData = document.getElementById("demo");

displayData.textContent = "guest";

function clickFunction() {
  displayData.innerHTML = "login";
}

// another method for this

// document.getElementById("demo").textContent = "guest";

// document.getElementById("demo").addEventListener("click", clickFunction);

// function clickFunction() {
//   document.getElementById("demo").innerHTML = "login";
// }
