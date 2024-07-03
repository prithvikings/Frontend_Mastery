function revealToSpan(){
    document.querySelectorAll(".reveal")
.forEach((elem)=>{
    //create two spans
    let parent=document.createElement("span");
    let child=document.createElement("span");

    //parent and child both sets their respective classes
    parent.classList.add("parent");
    child.classList.add("child");

    //span parent get child and child gets elem details
    child.innerHTML=elem.innerHTML;
    parent.append(child);

    //elem replaces its value with parent span
    elem.innerHTML="";
    elem.appendChild(parent);
})
}
revealToSpan();
function loader(){
let tl=gsap.timeline();
tl.from(".child span",{
    x:"100%",
    opacity:0,
    duration:1.4,
    stagger:.2,
    ease:Power3.easeInOut
})
tl.to(".parent .child",{
    y:"-100%",
    duration:1,
    ease:Circ.easeInOut
})
tl.from(".paisa-loader i",{
    y:"-100%",
    // opacity:0,
    scale:0,
    duration:3,
    rotate:"360deg"
})
tl.to(".paisa-loader i",{
    opacity:0,
    duration:0.6,
})
tl.to("#loader",{
    delay:0.2,
    height:0,
    duration:0.9,
    ease:Circ.easeInOut
})
tl.to("#green",{
    height:"100%",
    top:0,
    duration:1,
    delay:-.6,
    ease:Circ.easeInOut
})
tl.to("#green",{
    height:"0%",
    top:0,
    duration:0.1,
    ease:Circ.easeInOut
})
}


loader();

function later(){
    tl.from("#page1",{
        y:1200,
        opacity:0
    })
}