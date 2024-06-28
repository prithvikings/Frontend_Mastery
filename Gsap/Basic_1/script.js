
gsap.to("#box1",{
    x:1200,
    backgroundColor:"white",
    delay:1,
    duration:2,
    rotate:360,
    borderRadius:"50%",
    repeat:-1,//with -1 it is infinite time and when we give it only 1 then it will animate only for 2 one time as default and other because of our property
    yoyo:true,//basically issey woh jayega ayega jayega exactly same as real yoyo toy
    scale:1
})

gsap.from("#box2",{
    x:1200,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"yellow",
    borderRadius:"50%",
    scale:0,
    repeat:-1,
    yoyo:true
})