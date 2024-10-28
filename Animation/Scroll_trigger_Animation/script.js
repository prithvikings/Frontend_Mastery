const cards = document.querySelectorAll(".card");
cards.forEach((cards)=>{
    gsap.to(cards,{
        scale:0.8,
        opacity:0,
        scrollTrigger:{
            trigger:cards,
            start:"top 15%",
            end:"bottom 15%",
            scrub:true,
        }
    })
})