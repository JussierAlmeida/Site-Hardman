//seleção de elementos  
const menu_btn = document.querySelector("#menu");
const close_menu_btn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");
//funçoes



//eventos
[menu_btn,close_menu_btn].forEach((btn) =>{
    btn.addEventListener("click",(e)=>{
        menu.classList.toggle("menu-active");
    })
})