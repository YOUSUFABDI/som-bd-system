const btnHumberger = document.querySelector("#btnHumberger");
const header = document.querySelector(".header__wrapper");
const body = document.querySelector("body");
const fadeElements = document.querySelectorAll(".has-fade");

let imageWrapper = document.querySelector(".image__wrapper");
let wrapperDots = document.querySelector(".dot__wrapper");
let imageNum = 0;

console.log('hello')

const data = [
  {
    imgSrc: "https://picsum.photos/650/500/?random=1",
    alink: "https://www.youtube.com/",
  },
  {
    imgSrc: "https://picsum.photos/650/500/?random=2",
    alink: "https://www.google.com.tw/",
  },
  {
    imgSrc: "https://picsum.photos/650/500/?random=3",
    alink: "https://www.facebook.com/",
  },
  {
    imgSrc: "https://picsum.photos/650/500/?random=4",
    alink: "https://www.instagram.com/",
  },
  {
    imgSrc: "https://picsum.photos/650/500/?random=5",
    alink: "https://zh.wikipedia.org/wiki/Wikipedia:%E9%A6%96%E9%A1%B5",
  },
];

btnHumberger.addEventListener("click", function () {
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
});

let changeImg = function () {
  let imgs = [...document.querySelectorAll(".image__wrapper a")];
  let btns = [...document.querySelectorAll(".dot__wrapper a")];

  imgs.forEach((item, index) => {
    item.style.display = index === imageNum ? "" : "none";
  });

  btns.forEach((item, index) => {
    index === imageNum
      ? item.classList.add("active")
      : item.classList.remove("active");
  });
};

let changeIndex = function (e) {
  e.preventDefault();

  if (this.classList.contains("arrow-l")) {
    imageNum = imageNum <= 0 ? data.length - 1 : imageNum - 1;
  } else if (this.classList.contains("arrow-r")) {
    imageNum = (imageNum) => (data.length - 1 ? (imageNum = 0) : imageNum + 1);
  } else {
    imageNum = this.dataset.num * 1;
  }
  changeImg();
};

data.forEach((item, index) => {
  let link = document.createElement("a");
  link.target = "_blank";
  link.href = item.alink;
  let img = document.createElement("img");
  img.src = item.imgSrc;
  link.appendChild(img);
  imageWrapper.appendChild(link);

  let dot = document.createElement("a");
  dot.classList.add("img-dot");
  dot.dataset.num = `${index}`;
  wrapperDots.appendChild(dot);
});

[...document.querySelectorAll(".buttons__wrapper a")].forEach((item) => {
  item.addEventListener("click", changeIndex);
});

changeIndex();
