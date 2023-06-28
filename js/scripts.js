//seleção de elementos 
//cria js----------------------------------ok
const menu_btn = document.querySelector("#menu");
const close_menu_btn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

//cria menu aereo--------------------------ok
const desktoplinks = document.querySelectorAll("#navbar a");
const mobilelinks = document.querySelectorAll("#mobile-navbar a");
const alllinks = [...desktoplinks,...mobilelinks];

//banner aereo---------------------------------ok
const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

//funçoes

//---------------------------------ok
function smoothScroll(e){ 
   e.preventDefault();

   const href = this.getAttribute("href");
   const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth",
    });

    setTimeout(()=>{
        if(menu.classList.contains("menu-active")){
        menu.classList.remove("menu-active");
        }
    },500);
}
//banner aereo--------------------------------ok
function showSlides(){

    for (let i =0; i<slides.length; i++){
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }
    slideIndex++;

    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 3000);
}

//eventos
//cria js----------------------------ok
[menu_btn,close_menu_btn].forEach((btn) =>{
    btn.addEventListener("click",(e)=>{
        menu.classList.toggle("menu-active");
    });
});

//cria menu aereo ------------------ok
alllinks.forEach((link)=>{
    link.addEventListener("click",smoothScroll);
});
//inicialização---------------------ok
showSlides();