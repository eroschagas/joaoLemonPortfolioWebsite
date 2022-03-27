//PORTFOLIO SLIDER

//Var slider
var sliderContainer = document.querySelector(".jl-slider-container");
var sliderList = document.querySelector(".jl-slider-list");
var sliderItem = document.querySelectorAll(".jl-slider-item");
const sliderTotalItems = sliderItem.length;
var sliderListWidth = null;
var prevItem = document.querySelector(".jl-item-prev");
var nextItem = document.querySelector(".jl-item-next");
var sliderPos = 0;
var currentSlide = document.querySelector(".jl-current-slide");
var totalSlide = document.querySelector(".jl-total-slide");
var currentCounter = 1;
var navItems = document.querySelectorAll(".jl-item-navigator a");
var navCounter = document.querySelector(".jl-navigator-counter span");

//Capturando larguras individuais

var containerWidth = sliderContainer.parentElement.offsetWidth;

//Passando larguras dinâmicas

sliderContainer.style.width = containerWidth + "px";
for (let index = 0; index < sliderItem.length; index++) {
  sliderItem[index].style.width = containerWidth + "px";
  var sliderItemWidth = sliderItem[index].offsetWidth;
  sliderListWidth += sliderItemWidth;
}
sliderList.style.width = sliderListWidth + "px";

//Mudando a cor do primeiro algarismo

//HANDLERS

//Next-prev slide animation

var nextSlideAnim = function () {
  var lastItem = sliderListWidth - containerWidth;
  if (sliderPos == -lastItem) {
    return;
  }
  sliderPos -= containerWidth;
  anime({
    targets: sliderList,
    translateX: sliderPos,
    easing: "cubicBezier(0,1.01,.32,1)",
  });
};
var prevSlideAnim = function () {
  if (sliderPos == 0) {
    return;
  }
  sliderPos += containerWidth;
  anime({
    targets: sliderList,
    translateX: sliderPos,
    easing: "steps(1)",
  });
};

//Counter formatter

var counterFormatter = function (n) {
  if (n < 10) {
    return "0" + n;
  } else {
    return n;
  }
};
var counterFormatterColor = function (n) {
  if (n < 10) {
    return '<font color="#4d4c4c">0</font>' + n;
  } else {
    return n;
  }
};

//Counter add

var counterAdd = function () {
  if (currentCounter > 0 && currentCounter < sliderTotalItems) {
    currentCounter++;
    currentSlide.innerHTML = counterFormatter(currentCounter);
    navCounter.innerHTML = counterFormatterColor(currentCounter);
  }
};

//Counter remove

var counterRemove = function () {
  if (currentCounter > 1 && currentCounter <= sliderTotalItems) {
    currentCounter--;
    currentSlide.innerHTML = counterFormatter(currentCounter);
    navCounter.innerHTML = counterFormatterColor(currentCounter);
  }
};

//Set active nav

var setActiveNav = function () {
  for (let index = 0; index < navItems.length; index++) {
    navItems[index].classList.remove("jl-item-active");
    anime({
      targets: navItems[index],
      width: 20,
    });

    let myNavNum = navItems[index].getAttribute("data-nav");
    if (currentCounter == myNavNum) {
      navItems[index].classList.add("jl-item-active");
      anime({
        targets: ".jl-item-active",
        width: 90,
      });
    }
  }
};

//Set active slide

var setActiveSlide = function () {
  for (let index = 0; index < sliderItem.length; index++) {
    sliderItem[index].classList.remove("jl-slide-active");
    sliderItem[index]
      .querySelector(".jl-portfolio-item-box")
      .classList.remove("jl-scale-right");
    sliderItem[index].querySelector("img").classList.remove("jl-scale-up");
    sliderItem[index]
      .querySelector(".jl-portfolio-item-info")
      .classList.remove("jl-fade-from-left");
    sliderItem[index]
      .querySelector(".jl-btn-dark")
      .classList.remove("jl-fade-from-left");

    let mySlideNum = sliderItem[index].getAttribute("data-slide");
    if (currentCounter == mySlideNum) {
      sliderItem[index].classList.add("jl-slide-active");
      sliderItem[index]
        .querySelector(".jl-portfolio-item-box")
        .classList.add("jl-scale-right");
      sliderItem[index].querySelector("img").classList.add("jl-scale-up");
      sliderItem[index]
        .querySelector(".jl-portfolio-item-info")
        .classList.add("jl-fade-from-left");
      sliderItem[index]
        .querySelector(".jl-btn-dark")
        .classList.add("jl-fade-from-left");
    }
  }
};

//ACTIONS

totalSlide.innerHTML = counterFormatter(sliderTotalItems);
currentSlide.innerHTML = counterFormatter(currentCounter);
navCounter.innerHTML = counterFormatterColor(currentCounter);

anime({
  targets: ".jl-item-active",
  width: 90,
});

nextItem.addEventListener("click", function (e) {
  nextSlideAnim();
  counterAdd();
  setActiveNav();
  setActiveSlide();
});
prevItem.addEventListener("click", function (e) {
  prevSlideAnim();
  counterRemove();
  setActiveNav();
  setActiveSlide();
});
