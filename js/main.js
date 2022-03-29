//Declarando variáveis
var btnContact = document.querySelector(".jl-btn-contact");
var toggleModal = document.querySelectorAll(".jl-toggle-modal");
var myScrollDown = document.querySelector(".jl-scroll-down");
var topbarBackground = document.querySelector(".jl-topbar-background");
var postGallery = document.querySelector(".jl-post-gallery");
const menuButton = document.querySelector(".jl-btn-menu-mob");
const menuMobile = document.querySelector(".jl-menu-mob");
var overlay = document.querySelector(".jl-overlay");
var modalOrcamento = document.querySelector("#jl-modal-orcamento");
var menuBtnIcon = document.querySelector(".jl-btn-menu-mob ion-icon");
var close = document.querySelector(".jl-close-all");

//Page Preloader
window.addEventListener("load", function (e) {
  let pagePreloader = document.querySelector(".jl-preloader");
  pagePreloader.classList.add("jl-fade-out");
  this.setTimeout(function () {
    pagePreloader.style.display = "none";
  }, 1000);
});

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener("click", function (e) {
  let boxContact = document.querySelector(".jl-contact-info");
  boxContact.classList.toggle("jl-is-open");
  this.classList.toggle("jl-change-icon");
});

//Abrindo e fechando o modal de orçamento
for (let index = 0; index < toggleModal.length; index++) {
  toggleModal[index].addEventListener("click", function (e) {
    overlay.classList.toggle("jl-is-open");
    modalOrcamento.classList.toggle("jl-is-open");
    modalOrcamento.classList.toggle("jl-slide-top-in");
    adjustMenu();
  });
}

//Ajustando a altura da página

//Animando elementos on scroll com waypoints

var waypoint = new Waypoint({
  element: document.body,
  handler: function (direction) {
    if (direction == "down") {
      topbarBackground.style.maxHeight = "100%";
      topbarBackground.classList.add("jl-fade-in");
    } else {
      topbarBackground.style.maxHeight = "0px";
      topbarBackground.classList.remove("jl-fade-in");
    }
  },
  offset: "-30px",
});

var waypoint = new Waypoint({
  element: myScrollDown,
  handler: function (direction) {
    if (direction == "down") {
      myScrollDown.classList.toggle("jl-fade-out");
      setTimeout(() => {
        myScrollDown.classList.toggle("jl-display-none");
      }, 1000);
    } else {
      myScrollDown.classList.toggle("jl-fade-out");
      myScrollDown.classList.toggle("jl-display-none");
    }
  },
  offset: "80%",
});

//Animando o menu mobile
menuButton.addEventListener("click", function (e) {
  menuMobile.classList.toggle("jl-menu-is-closed");
  overlay.classList.toggle("jl-is-open");
  if (menuBtnIcon.getAttribute("name") === "menu-outline") {
    menuBtnIcon.setAttribute("name", "close-outline");
  } else {
    menuBtnIcon.setAttribute("name", "menu-outline");
  }
});

overlay.addEventListener("click", function (e) {
  closeAll();
});

close.addEventListener("click", function (e) {
  closeAll();
});
var closeAll = () => {
  menuMobile.classList.add("jl-menu-is-closed");
  overlay.classList.remove("jl-is-open");
  modalOrcamento.classList.remove("jl-is-open");
  modalOrcamento.classList.remove("jl-slide-top-in");
  if (menuBtnIcon.getAttribute("name") !== "menu-outline") {
    menuBtnIcon.setAttribute("name", "menu-outline");
  }
  adjustMenu();
};

var adjustMenu = () => {
  if (modalOrcamento.classList.contains("jl-is-open") == true) {
    menuButton.classList.add("jl-display-none");
  } else {
    menuButton.classList.remove("jl-display-none");
  }
};
