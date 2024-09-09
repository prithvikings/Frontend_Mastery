document.querySelector(".ser-1").addEventListener("mousemove",()=>{
    document.querySelector(".h-div1").style.top = "0%";
    document.querySelector(".ser-1").style.cursor="pointer";
})

document.querySelector(".ser-1").addEventListener("mouseleave",()=>{
    document.querySelector(".h-div1").style.top = "100%";
})

document.querySelector(".ser-2").addEventListener("mousemove",()=>{
    document.querySelector(".h-div2").style.top = "0%";
    document.querySelector(".ser-2").style.cursor="pointer";
})

document.querySelector(".ser-2").addEventListener("mouseleave",()=>{
    document.querySelector(".h-div2").style.top = "100%";
})

document.querySelector(".ser-3").addEventListener("mousemove",()=>{
    document.querySelector(".h-div3").style.top = "0%";
    document.querySelector(".ser-3").style.cursor="pointer";
})

document.querySelector(".ser-3").addEventListener("mouseleave",()=>{
    document.querySelector(".h-div3").style.top = "100%";
})

document.querySelector(".ser-4").addEventListener("mousemove",()=>{
    document.querySelector(".h-div4").style.top = "0%";
    document.querySelector(".ser-4").style.cursor="pointer";
})

document.querySelector(".ser-4").addEventListener("mouseleave",()=>{
    document.querySelector(".h-div4").style.top = "100%";
})

var tl = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start:"50% 50%",
    end:"100% 100%",
    scrub:true,
    // markers: true,
}});
tl
.to(".banner-1",{
    left: "-20%",
}, 'a')
.to(".banner-2",{
    right: "-15%",
}, 'a')