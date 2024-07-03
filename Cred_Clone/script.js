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