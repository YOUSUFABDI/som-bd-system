const btnHumberger = document.querySelector("#btnHumberger");
const header = document.querySelector(".header__wrapper");
const body = document.querySelector("body");
const fadeElements = document.querySelectorAll(".has-fade");

// opening and closing nav menu mobile
function openNavMenu() {
  console.log("clicked");
  if (header.classList.contains("open")) {
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElements.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElements.forEach(function (element) {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  }
}

//Eventlistener
btnHumberger.addEventListener("click", openNavMenu);
