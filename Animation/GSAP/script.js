
//to animation it is used to move the element from current point to another point
// gsap.to("#box",{
//     duration: 2,
//     x: 100,
//     ease: "power1.inOut",
//     rotation: 360,
//     scale: 0.5,
//     opacity: 0,
// })

//from animation it is used to move the element from another point to current point
gsap.from("#box",{
    duration: 2,
    x: 100,
    ease: "power1.inOut",
    rotation: 360,
    scale: 0.5,
    opacity: 0,
    delay: 1,
    repeat: -1,
    backgroundColor: "yellow",
})