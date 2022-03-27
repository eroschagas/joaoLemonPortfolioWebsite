//Declarando variáveis
var btnContact = document.querySelector(".jl-btn-contact");
var toggleModal = document.querySelectorAll(".jl-toggle-modal");
var myScrollDown = document.querySelector(".jl-scroll-down");
var topbarBackground = document.querySelector(".jl-topbar-background");
var postGallery = document.querySelector(".jl-post-gallery");
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
    let overlay = document.querySelector(".jl-overlay");
    let modalOrcamento = document.querySelector("#jl-modal-orcamento");
    overlay.classList.toggle("jl-is-open");
    modalOrcamento.classList.toggle("jl-is-open");
    modalOrcamento.classList.toggle("jl-slide-top-in");
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
