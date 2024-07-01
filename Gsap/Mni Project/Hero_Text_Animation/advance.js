function breakTheText(){
    let h1=document.querySelector("h1");
    let splitedtxt=h1.textContent.split("");
    let halfValue=Math.floor(splitedtxt.length/2);
    console.log(halfValue);
    let clutter="";
    splitedtxt.forEach((elem,idx)=>{
        if(idx<halfValue){
            clutter+=`<span class="a">${elem}</span>`
        }else{
            clutter+=`<span class="b">${elem}</span>`
        }
    })
    h1.innerHTML=clutter;
}
function animation(){
        gsap.from("h1 .a",{
        y:80,
        stagger:0.15,//agar isko minus kar denge to yeh ulta stagger karega
        delay:0.5,
        duration:0.6,
        opacity:0,
    })
    gsap.from("h1 .b",{
        y:80,
        stagger:-0.15,//agar isko minus kar denge to yeh ulta stagger karega
        delay:0.5,
        duration:0.6,
        opacity:0,
    })
}
breakTheText();
animation()