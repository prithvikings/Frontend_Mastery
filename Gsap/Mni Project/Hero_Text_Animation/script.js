function breakTheText(){
    let h1=document.querySelector("h1");
    let splitedtxt=h1.textContent.split("");
    let clutter="";
    splitedtxt.forEach((elem)=>{
        clutter+=`<span>${elem}</span>`
    })
    h1.innerHTML=clutter;
}
breakTheText();
gsap.from("h1 span",{
    y:50,
    stagger:0.15,//agar isko minus kar denge to yeh ulta stagger karega
    delay:0.5,
    duration:0.8,
    opacity:0,
})