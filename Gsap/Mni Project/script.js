//This code is base code it is for only one element but in the same way we can do for multiple element also
// let h1text=document.querySelector("#firsth1");
// let splitedtxt=h1text.textContent.split("");
// let clutter="";
// splitedtxt.forEach((elem)=>{
//     clutter+=`<Span>${elem}</span>`
//     // console.log(elem);
// })
// h1text.innerHTML=clutter;
function locosccroll(){
    
}
function splittingText(){
    let h1text=document.querySelectorAll("h1");
    h1text.forEach(elem => {
    let clutter="";
    let splitedtxt=elem.textContent.split("");
    splitedtxt.forEach(e=>{
        clutter+=`<span>${e}</span>`
    })
    elem.innerHTML=clutter;
});
}
function scroller(){
    gsap.to("#page2 h1 span",{
        color:"#E3E3C4",
        stagger:0.2,
        scrollTrigger:{
            trigger:"#page2 h1",
            scroller:"#main",
            // markers:true,
            start:"top 50%",
            end:"top 10%",
            scrub:2
        }
    })
}
splittingText();
scroller();