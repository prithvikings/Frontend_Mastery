function sidenav(){
    let tl=gsap.timeline();
tl.to("#full",{
    right:0,
    duration:0.4
})
tl.from("#full h4",{
    opacity:0,
    stagger:0.2,
    x:150,
    duration:0.2
})
tl.from("#full i",{
    opacity:0
},"-=1")
tl.pause();
let menu=document.querySelector(".ri-menu-3-line");
let close=document.querySelector(".ri-close-line");
menu.addEventListener("click",()=>{
    tl.play();
})
close.addEventListener("click",()=>{
    tl.reverse();
})
}
// sidenav();
let cl=gsap.timeline();
cl.from("nav",{
    stagger:0.8,
    duration:0.6,
    opacity:0,
    y:-30
})
cl.from("#hero-head",{
    opacity:0,
    duration:0.3,
    delay:0.1,
    y:-10
})
cl.from("#hero-btn",{
    opacity:0,
    y:10,
    duration:0.2,
    stagger:0.15
})
cl.from("#iconset",{
    opacity:0,
    y:10,
    duration:0.2,
    stagger:0.15
})
cl.from("#v-s-head",{
    opacity:0,
    duration:0.6,
    x:-100,
    scrollTrigger:{
        trigger:"#v-s-head",
        scroller:"body",
        markers:false,
        start:"top 30%",
        end:"top 5%",
        scrub:0.1
    }
})
cl.from("#v-s-text",{
    opacity:0,
    y:100,
    scrollTrigger:{
        trigger:"#v-s-text",
        scroller:"body",
        markers:false,
        start:"top 30%",
        end:"top 5%",
        scrub:0.1
    }
},"-=0.4")

cl.from("#v-i-head",{
    opacity:0,
    duration:0.6,
    x:-100,
    scrollTrigger:{
        trigger:"#v-i-head",
        scroller:"body",
        markers:false,
        start:"top 30%",
        end:"top 5%",
        scrub:0.1
    }
})
cl.from("#v-i-text",{
    opacity:0,
    y:100,
    scrollTrigger:{
        trigger:"#v-i-text",
        scroller:"body",
        markers:false,
        start:"top 30%",
        end:"top 5%",
        scrub:0.1
    }
},"-=0.4")

