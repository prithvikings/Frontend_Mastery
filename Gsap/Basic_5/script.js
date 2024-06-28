let tl=gsap.timeline();
tl.from("#nav h2",{
    y:-20,
    opacity:0,
    duration:1,
})
tl.from("#part-2 h4",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.3
})
tl.from("h1",{
    scale:0,
    opacity:0,
})

//custom cursor
let main=document.querySelector("main");
let cursor=document.querySelector("#cursor");
main.addEventListener("mousemove",(dets)=>{
    cursor.style.top=dets.y+"px";
    cursor.style.left=dets.x+"px";
})