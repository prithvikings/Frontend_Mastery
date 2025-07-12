let center=document.querySelector('.center');

center.addEventListener('mousemove', (e)=> {
    let rectlocation = center.getBoundingClientRect();
    let left = e.clientX - rectlocation.left;
    let width = rectlocation.width;

    if(left< width/2){
        let redcolor=gsap.utils.mapRange(0,width/2,255,0,left);
        gsap.to(center,{
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: "power1.inOut"
        })
    }else{
        let bluecolor=gsap.utils.mapRange(width/2,width,0,255,left);
        gsap.to(center,{
            backgroundColor: `rgb( 0, 0,${bluecolor})`,
            ease: "power1.inOut"
        })
    }
});


center.addEventListener('mouseleave', () => {
    gsap.to(center, {
        backgroundColor: 'white',
        ease: "power1.inOut"
    });
});