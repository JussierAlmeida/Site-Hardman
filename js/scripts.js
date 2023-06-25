//seleção de elementos 
//cria js
const menu_btn = document.querySelector("#menu");
const close_menu_btn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

//cria menu aereo
const desktoplinks = document.querySelectorAll("#navbar a");
const mobilelinks = document.querySelectorAll("#mobile-navbar a");
const alllinks = [...desktoplinks,...mobilelinks];

console.log(alllinks);
//banner aereo
const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

//funçoes
function smoothScroll(e){ 
   e.preventDefault();
   const href = this.getAttribute("href");
   const offsetTop = document.querySelector(href).offsetTop;
    scroll({
        top: offsetTop,
        behavior: "smooth",
    });
    setTimeout(()=>{
        if(menu.classList.contains(menu-active)){
        menu.classList.remove("menu-active");
        }
    },500);
}
//banner aereo
function showSlides(){
    for (let i =0; i<slides.length; i++){
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }
    slideIndex++;

    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex- 1].classList.add("active");
    dots[slideIndex- 1].classList.add("active");

    setTimeout(showSlides, 3000);
}
function smoothScroll(e){ 
   e.preventDefault();
   const href = this.getAttribute("href");
   const offsetTop = document.querySelector(href).offsetTop;
    scroll({
        top: offsetTop,
        behavior: "smooth",
    });
    setTimeout(()=>{
        if(menu.classList.contains(menu-active)){
        menu.classList.remove("menu-active");
        }
    },500);
}


//eventos
//cria js
[menu_btn,close_menu_btn].forEach((btn) =>{
    btn.addEventListener("click",(e)=>{
        menu.classList.toggle("menu-active");
    })
})

//cria menu aereo
alllinks.forEach((link)=>{
    link.addEventListener("click",smoothScroll);
});