
let rect=document.querySelector(".rect");
let width=rect.getBoundingClientRect().width;


window.addEventListener("mousemove", (e) => {
    let xval=gsap.utils.mapRange(0, window.innerWidth, 100+width/2, window.innerWidth-(100+width/2), e.clientX);
    gsap.to(".rect",{
        left:xval,
    })
});