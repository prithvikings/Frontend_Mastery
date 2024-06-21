let navbar=document.querySelector("nav");
let menu=document.querySelector("#menu-link");
window.onscroll=()=>{
    if(window.scrollY>0){
        navbar.style.background="#eefff9";
    }else{
        navbar.style.background="transparent";
    }
}
const togglemenu=()=>{
    menu.classList.add('show-menu');
}