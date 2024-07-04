let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.part-2',
        start: '0% 50%', 
        end: '50% 50%', 
        scrub: 1,
        // markers:true,
    }
});

tl.to("#img3",{
    bottom:"-5vh",
})
tl.to("#img2, #img4",{
    bottom:"-10vh",
})
tl.to("#img1, #img5",{
    bottom:"-20vh",
})

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#part-5',
        start: '50% 50%', 
        end: '150% 50%', 
        scrub: 2,
        // markers:true,
        pin:true,
    }
});

tl2.to("#scroll-1",{
    bottom:"60vh",
})

tl2.to("#scroll-1",{
    opacity:0,
})

tl2.to("#scroll-2",{
    opacity:1,
},"sametime")

tl2.to(".phone-img",{
    x:"-30%"
},"sametime")

tl2.to("#scroll-2",{
    bottom:"60vh"
})

tl2.to("#scroll-2",{
    opacity:0,
})

tl2.to("#scroll-3",{
    opacity:1,
},"sametime2")

tl2.to(".phone-img",{
    x:"-57%"
},"sametime2")

tl2.to("#scroll-3",{
    bottom:"60vh" 
}) 

tl2.to("#scroll-3",{
    opacity:0,
})

tl2.to("#scroll-4",{
    opacity:1,
},"sametime3")

tl2.to(".phone-img",{
    x:"-85%"
},"sametime3")

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });