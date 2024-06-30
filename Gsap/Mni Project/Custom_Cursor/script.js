let main=document.querySelector("#main");
let crsr=document.querySelector("#cursor");
let img=document.querySelector("#img");
main.addEventListener("mousemove",(dets)=>{
    gsap.to(crsr,{
        x:dets.x,
        y:dets.y,
        // duration:1
    })
})

img.addEventListener("mouseenter",()=>{
    crsr.innerHTML="View More";
    crsr.style.cursor="Pointer";
    gsap.to(crsr,{
        scale:2,
        backgroundColor:"#ffffff8a"
    })
})
img.addEventListener("mouseleave",()=>{
    crsr.innerHTML="";
    gsap.to(crsr,{
        scale:1,
        backgroundColor:"#fff"
    })
})