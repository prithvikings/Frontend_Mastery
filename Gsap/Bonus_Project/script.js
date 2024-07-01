function page1animation() {
    let tl=gsap.timeline();
tl.from("nav h1, nav h4, nav button",{
    opacity:0,
    y:-30,
    delay:0.1,
    duration:0.3,
    stagger:0.1
})
tl.from("#center-part-1 h1",{
    x:-200,
    opacity:0,
    duration:0.2
},)
tl.from("#center-part-1 p",{
    x:-100,
    opacity:0,
    duration:0.2
})
tl.from("#center-part-1 button",{
    y:30,
    opacity:0,
    duration:0.1,
})
tl.from("#center-part-2 img",{
    opacity:0,
},"-=0.1")//is line ka mtlb hai timeline ke andar delay dena kyunki kayi baar timeline mein delay sahi se kaam nahi karta ab is line ko likhne se humara animation 1 second pehle execute ho jayega

tl.from("#section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.2
})
}
function page2animation() {
    gsap.from("#services h3",{
        x:-100,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger:"#services h3",
            scroller:"body",
            start:"top 50%",
            end:"top 0",
            scrub:1
        }
    })
    
    gsap.from("#services p",{
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger:"#services p",
            scroller:"body",
            start:"top 50%",
            end:"top 0",
            scrub:1
        }
    })
    gsap.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#services p",
            scroller:"body",
            start:"top 50%",
            end:"top 0",
            scrub:1
        }
    })
    gsap.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#services p",
            scroller:"body",
            start:"top 50%",
            end:"top 0",
            scrub:1
        }
    })
    gsap.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#services p",
            scroller:"body",
            start:"top 50%",
            end:"top 0",
            scrub:1
        }
    })
    gsap.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:1,
        scrollTrigger:{
            trigger:"#services p",
            scroller:"body",
            start:"top 50%",
            end:"top 0",
            scrub:1
        }
    })
}
page1animation();
page2animation()