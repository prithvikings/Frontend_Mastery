let tl=gsap.timeline();
tl.to("#full",{
    right:0,
    duration:0.4
})
tl.from("#full h4",{
    opacity:0,
    x:150,
    stagger:0.2,
    duration:0.2
})
tl.from("#full i",{
    opacity:0,
})
tl.pause();
let menu=document.querySelector(".ri-menu-3-line");
let close=document.querySelector(".ri-close-line");
menu.addEventListener("click",()=>{
    tl.play();
})
close.addEventListener("click",()=>{
    tl.reverse();
})