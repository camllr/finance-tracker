console.log("App.js loaded");

const loginDiv = document.getElementById("login");
const dashboardDiv = document.getElementById("dashboard");
const loginForm = document.getElementById("loginForm");

loginDiv.hidden = true;
dashboardDiv.hidden = false;

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Login form submitted");

  loginDiv.classList.remove("d-flex");
  loginDiv.classList.add("d-none");

  dashboardDiv.classList.remove("d-none");
  dashboardDiv.classList.add("d-flex");
});
