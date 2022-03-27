//Viariáveis

var overlay = document.querySelector(".jl-overlay");
var frameImage = document.querySelector(".jl-gallery-frame-image");
var frameContainer = document.querySelector(".jl-gallery-frame-container");
var galleryImages = document.querySelectorAll(".jl-thumb-img");
var closeGallery = document.querySelectorAll(".jl-close-gallery");
var btnNext = document.querySelector(".jl-item-next");
var btnPrev = document.querySelector(".jl-item-prev");
var currentSlide = document.querySelector(".jl-current-slide");
var totalSlide = document.querySelector(".jl-total-slide");
var skeletonLoading = document.querySelector(".jl-skeleton-loading");

const skeletonAnim = (imagem) => {
  skeletonLoading.style.display = "flex";
  var myImage = new Image();
  myImage.src = imagem;
  myImage.addEventListener("load", function (e) {
    skeletonLoading.classList.add("jl-fade-out");
    setTimeout(() => {
      skeletonLoading.style.display = "none";
    }, 2000);
  });
};

const getImageSrc = function () {
  for (let index = 0; index < galleryImages.length; index++) {
    galleryImages[index].addEventListener("click", function (e) {
      var itemNum = this.getAttribute("data-item");
      var imageSrc = this.getAttribute("data-src");
      skeletonAnim(imageSrc);
      frameImage.setAttribute("src", imageSrc);
      frameImage.setAttribute("data-index", itemNum);
      overlay.classList.add("jl-is-open");
      frameContainer.classList.add("jl-is-open");
      galleryCounterMax();
      galleryCounter();
    });
  }
};
for (let index = 0; index < closeGallery.length; index++) {
  closeGallery[index].addEventListener("click", function (e) {
    overlay.classList.remove("jl-is-open");
    frameContainer.classList.remove("jl-is-open");
  });
}

const nextItem = function () {
  //Identificamos o item atual no frame
  var currItemNum = frameImage.getAttribute("data-index");
  //Definimos o número do próximo item
  var nextItemNum = parseInt(currItemNum) + 1;
  //Fazemos o loop e identificamos o match
  for (let index = 0; index < galleryImages.length; index++) {
    var item = galleryImages[index];
    var itemNum = parseInt(item.getAttribute("data-item"));
    if (itemNum == nextItemNum) {
      //capturamos data-src
      var nextSrc = item.getAttribute("data-Src");
      var nextIndex = item.getAttribute("data-item");
      //passamos o data-src para a tag do frame
      frameImage.setAttribute("src", nextSrc);
      frameImage.setAttribute("data-index", nextIndex);
      skeletonAnim(nextSrc);
    }
  }
};

const prevItem = function () {
  //Identificamos o item atual no frame
  var currItemNum = frameImage.getAttribute("data-index");
  //Definimos o número do próximo item
  var prevItemNum = parseInt(currItemNum) - 1;
  //Fazemos o loop e identificamos o match
  for (let index = 0; index < galleryImages.length; index++) {
    var item = galleryImages[index];
    var itemNum = parseInt(item.getAttribute("data-item"));
    if (itemNum == prevItemNum) {
      //capturamos data-src
      var prevSrc = item.getAttribute("data-Src");
      var prevIndex = item.getAttribute("data-item");
      //passamos o data-src para a tag do frame
      frameImage.setAttribute("src", prevSrc);
      frameImage.setAttribute("data-index", prevIndex);
      skeletonAnim(prevSrc);
    }
  }
};

var galleryCounter = function () {
  var currItemNum = frameImage.getAttribute("data-index");

  if (currItemNum < 10) {
    currentSlide.innerHTML = "0" + currItemNum;
  } else {
    currentSlide.innerHTML = currItemNum;
  }
};

var galleryCounterMax = function () {
  if (galleryImages.length < 10) {
    totalSlide.innerHTML = "0" + galleryImages.length;
  } else {
    totalSlide.innerHTML = galleryImages.length;
  }
};

getImageSrc();

btnNext.addEventListener("click", function (e) {
  nextItem();
  galleryCounter();
});

btnPrev.addEventListener("click", function (e) {
  prevItem();
  galleryCounter();
});
