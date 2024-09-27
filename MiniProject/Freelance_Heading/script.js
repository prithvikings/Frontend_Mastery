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
// var allowCopyAndPaste = (e)=> {
//     e.stopImmediatePropagation();
//     return true;
//   };
//   document.addEventListener("copy", allowCopyAndPaste, true);
//   document.addEventListener("paste", allowCopyAndPaste, true);
//   document.addEventListener("onpaste", allowCopyAndPaste, true);