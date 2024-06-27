// gsap.to("#box1",{
//     x:1200,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })
// gsap.to("#box2",{
//     x:1200,
//     backgroundColor:"Yellow",
//     duration:1.5,
//     delay:2.5
// })
// gsap.to("#box3",{
//     x:1200,
//     borderRadius:"50%",
//     scale:0.5,
//     duration:1.5,
//     delay:4
// })

//timeline se cheezein synchoronous way mein ho jata hai line by line chalta hai

let tl=gsap.timeline();
tl.to("#box1",{
    x:1200,
    rotate:360,
    duration:1.5,
    // delay:1
})
tl.to("#box2",{
    x:1200,
    backgroundColor:"Yellow",
    duration:1.5,
    // delay:2.5
})
tl.to("#box3",{
    x:1200,
    borderRadius:"50%",
    scale:0.5,
    duration:1.5,
    // delay:4
})

//you might still be confused but jaise woh normal code likhne mein hume agar line by line usko chalane ke liye hume har element ke liye delay calculate karna padta tha taaki cheezein line by line chale but yaha pe dekho yeh already line by line hi hai

//but for further clarity go watch basic_5 folder
