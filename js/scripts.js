//seleção de elementos  
//const menu_btn = document.querySelector("#menu");
//const close_menu_btn = document.querySelector("close-menu");



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


//eventos