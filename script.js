const themeBtn = document.getElementById("theme-btn");
const yearSpan = document.getElementById("year");
const welcome = document.getElementById("welcome");

yearSpan.textContent = new Date().getFullYear();

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "Light Mode";
}

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = "Dark Mode";
    localStorage.setItem("theme", "light");
  }
});

setTimeout(function () {
  welcome.classList.add("hide");
}, 2500);