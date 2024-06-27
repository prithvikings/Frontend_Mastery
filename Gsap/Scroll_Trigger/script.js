gsap.from("#page-1 #box",{
    rotate:360,
    scale:0,
    delay:1,
    duration:2
})

//scroll trigger ko hum 2nd page pe lagayenge cause 1st wala to already visible hai
gsap.from("#page-2 #box",{
    rotate:360,
    scale:0,
    duration:2,
    // scrollTrigger:"#page-2 #box" //agar upar upar se dekhe to hum bas yeh bhi likh denge to bhi jab hum page ke paas pahucenge to yeh animate hoga
//but if you want to go deep then do this way
    scrollTrigger:{
        trigger:"#page-2 #box",
        scroller:"body",
        markers:true,//it is for our help
        start:"top 60%"//ye basically ek marker status deta hai jaise hi humara scroller start start se jake clash karega ye animation trigger hoga hum isko change kar skte hai by change its value
    }
})