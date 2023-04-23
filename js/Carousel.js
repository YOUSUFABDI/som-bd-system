// Carousel
const images = [
  "../assests/images/Blood donation-pana.png",
  "../assests/images/Blood donation-cuate.png",
  "../assests/images/Doctors-pana.png",
  "../assests/images/Team spirit-pana.png",
];

const titles = [
  "Recent Blood Donation Happened",
  "Donate in Somali",
  "Want to donate for the first time?",
  "We need blood donors",
];

const contents = [
  "People realy need people today to saves aperson live by transution of bloood so make an appointment to donate today.",
  "Every day, patients in your community need blood transfusions to survive and thrive. Make an appointment to donate blood today.",
  "We always need new donors. Let us take you through the steps to becoming a donor.",
  "There are patients need blood if you give away even one unit of blood means you are saving live and you are live saver.",
];

const dotButtons = document.querySelectorAll(".img-dot");
const dotWrapper = document.getElementById("do__wrap");

let leftButton = document.querySelector(".left__btn");
let rightButton = document.querySelector(".right__btn");
let prevBtn = null;
let i = 0;
let time = 5000;

window.onload = slideImages;

document.slide.src = images[0];
document.querySelector(".cr__title").innerText = titles[0];
document.querySelector(".cr__content").innerText = contents[0];

changeImgDot();

function setImages() {
  document.slide.src = images[i];
  document.querySelector(".cr__title").innerText = titles[i];
  document.querySelector(".cr__content").innerText = contents[i];
}

// auto slide
function slideImages() {
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  changeImgDot();
  setImages();
  setTimeout("slideImages()", time);
}

//handle next button
function nextButton() {
  //changes images & titles & content
  if (i < images.length - 1) {
    i++;
    document.slide.src = images[i];
    document.querySelector(".cr__title").innerText = titles[i];
    document.querySelector(".cr__content").innerText = contents[i];
  } else {
    i = 0;
    document.slide.src = images[0];
    document.querySelector(".cr__title").innerText = titles[0];
    document.querySelector(".cr__content").innerText = contents[0];
  }

  changeImgDot();
  setImages();
}

//handles previous button
function prevButton() {
  //changes images
  if (i > 0) {
    i--;
  } else {
    i = images.length - 1;
  }

  //changes title
  if (titles.length > 0) {
    document.querySelector(".cr__title").innerText = titles[i];
  } else {
    i = titles.length - 1;
  }

  //changes content
  if (contents.length > 0) {
    document.querySelector(".cr__content").innerText = contents[i];
  } else {
    i = contents.length - 1;
  }

  changeImgDot();
  setImages();
}

//change image when click dot button
function changeImage(index) {
  document.querySelector(".cr__title").innerText = titles[index];
  document.querySelector(".cr__content").innerText = contents[index];
  document.slide.src = images[index];
}

//handles dot buttons
function handleDotBtn(e) {
  const isButton = e.target.nodeName === "BUTTON";

  if (!isButton) {
    return;
  }

  e.target.classList.add("active");

  if (prevBtn !== null) {
    prevBtn.classList.remove("active");
  }

  prevBtn = e.target;
}

//change image and dot possition
function changeImgDot() {
  dotButtons[i].classList.add("active");
  if (prevBtn !== null) {
    prevBtn.classList.remove("active");
  }
  prevBtn = dotButtons[i];
}

//Eventlistener
// btnHumberger.addEventListener("click", openNavMenu);
rightButton.addEventListener("click", nextButton);
leftButton.addEventListener("click", prevButton);
dotWrapper.addEventListener("click", handleDotBtn);
dotButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    changeImage(index);
  });
});
