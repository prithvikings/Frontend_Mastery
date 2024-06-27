let tl=gsap.timeline();
tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
})
tl.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.3
})

tl.from("h1",{
    y:20,
    scale:0.2,
    opacity:0,
    duration:1,
})