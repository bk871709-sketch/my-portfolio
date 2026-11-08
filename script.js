const themeBtn = document.getElementById("theme-btn");
const yearSpan = document.getElementById("year");
const welcome = document.getElementById("welcome");
const profilePic = document.querySelector(".profile-pic");
const dpViewer = document.getElementById("dp-viewer");

yearSpan.textContent = new Date().getFullYear();

// Saved theme check
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "Light Mode";
}

// Dark / Light mode button
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

// Welcome screen hide after 2.5 seconds
setTimeout(function () {
  welcome.classList.add("hide");
}, 2500);

// Long press on photo -> show big DP (Instagram style)
let pressTimer;

function startPress() {
  pressTimer = setTimeout(function () {
    dpViewer.classList.add("show");
  }, 400);
}

function endPress() {
  clearTimeout(pressTimer);
  dpViewer.classList.remove("show");
}

if (profilePic) {
  // Phone (touch)
  profilePic.addEventListener("touchstart", startPress, { passive: true });
  profilePic.addEventListener("touchend", endPress);
  profilePic.addEventListener("touchcancel", endPress);

  // Computer (mouse)
  profilePic.addEventListener("mousedown", startPress);
  document.addEventListener("mouseup", endPress);

  // Long press par browser ka menu na khule
  profilePic.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
}