//seleção de elementos  
//const menu_btn = document.querySelector("#menu");
//const close_menu_btn = document.querySelector("close-menu");

const desktoplinks = document.querySelectorAll("#navbar a");
const mobilelinks = document.querySelectorAll("#mobile-navbar a");
const alllinks = [...desktoplinks,...mobilelinks];

console.log(alllinks);

//funçoes
function smoothScroll(e){ 
   // e.preventDefault();
   const href = this.getAttribute("href");
   const offsetTop = document.querySelector(href).offsetTop;
    scroll({
        top: offsetTop,
        behavior: "smooth",
    });
}


//eventos
alllinks.forEach((link)=>{
    link.addEventListener("click",smoothScroll);
});