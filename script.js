/* script.js */

function showAlert() {
    alert("Hello, this is a static web app with JavaScript!");
}

// Add event listener to the button
const button = document.getElementById("my-button");
button.addEventListener("click", showAlert);
