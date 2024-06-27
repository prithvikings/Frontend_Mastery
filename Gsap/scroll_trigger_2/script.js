gsap.from("#page-1 #box",{
    rotate:360,
    scale:0,
    delay:1,
    duration:2
})

gsap.from("#page-2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page-2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})
gsap.from("#page-2 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:"#page-2 h2",
        scroller:"body",
        markers:true,
        start:"top 50%"
    }
})
