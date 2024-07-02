//locoScroll
function locoscroll(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
//jab mouse move ho to hum log skew kar paaye aur maximum skew and minimum skew define kar paaye, jab mouse move ho to chapta ki value badhe aur jab mouse chalna band ho jaaye to chapta hata lo
//cursorsqueez
function cursorsqueez(){
    var xscale=1;
    var yscale=1;

    var xprev=0;
    var yprev=0;

    window.addEventListener("mousemove",(dets)=>{
        var xdiff=dets.clientX-xprev;
        var ydiff=dets.clientY-yprev;

        //dekho abhi jo difference hai woh kabhi -50 hai ya kabhi -110 hai ya kabhi 150 hai to agar hum log iske hisab se scale karenge to humara cursor bahut jyada bada ho jayega ya bahut jyada chota ho jayea so we have decided to make it between 1.2 to 0.8 let say if difference is 5.6 then it will come 1.2 or differene is 50 then it will come to 1.2 similarily if difference is -10 then it will come to 0.8 and if value lie between 0.8 and 1.2 then it will be same for example if value is 0.9 then it will be always 0.9 no need to change it we can do this with the help of clamp in gsap. clamp ka structure basically hota hai gsap.utils.clamp(minrang,maxrange,value);
        // console.log(xdiff,ydiff);
        // console.log(gsap.utils.clamp(.8,1.2,xdiff));
        // console.log(gsap.utils.clamp(.8,1.2,ydiff));

        xscale=gsap.utils.clamp(.8,1.2,xdiff);
        yscale=gsap.utils.clamp(.8,1.2,ydiff);

        xprev=dets.clientX;
        yprev=dets.clientY;

        customcrsr(xscale,yscale);
    })
}
//customCursor
function customcrsr(xscale,yscale){
    let crsr=document.querySelector("#cursor");
let main=document.querySelector("#main"); //main se yeh ho jayega 
    main.addEventListener("mousemove",(dets)=>{
    gsap.to(crsr,{
        // scale:xscale,yscale,
        x:dets.x,
        y:dets.y,
    })
})
}
//firstPageAnimation
function firstpageanime(){
    var tl=gsap.timeline();
    gsap.from("#nav a, #nav h4",{
        y:"-10",
        opacity:0,
        ease:Expo.easeInOut,
        duration:1.5
    })
    tl.from("#heading h1",{
        y:100,
        opacity:0,
        stagger:0.3,
        duration:0.5
    })
    tl.from("#heading h5",{
        x:100,
        opacity:0
    },"-=0.1")
    
    tl.from("#smallheadings",{
        x:100,
        opacity:0
    },"-=0.1")
    
    tl.from("#herofooter a",{
        y:-30,
        opacity:0
    },"-=0.1")
    
    tl.from("#iconset .circle",{
        stagger:0.2,
        opacity:0
    },"-=0.1")
}
//secondpageanime
function secondpageanime(){
    let elem=document.querySelectorAll(".elem");
    let crsr=document.querySelector("#cursor");
    var rotate=0;
    var diffrot=0;
    elem.forEach((e)=>{
        e.addEventListener("mouseleave",()=>{
            gsap.to(e.querySelector("img"),{
                opacity:0,
                ease:Power3,
                duration:0.5
            })
            crsr.innerHTML="";
            gsap.to(crsr,{
                scale:1,
                backgroundColor:"#fff"
            })
        })

        e.addEventListener("mousemove",(dets)=>{
            var diff=dets.clientY-e.getBoundingClientRect().top;
            diffrot=dets.clientX-rotate;
            rotate=dets.clientX;
            console.log(diff);
            gsap.to(e.querySelector("img"),{
                opacity:1,
                ease:Power3,
                top:diff,
                left:dets.clientX,
                rotate:gsap.utils.clamp(-20,20,diffrot*0.8)
            })
        })
        e.addEventListener("mouseenter",()=>{
            crsr.innerHTML="View More";
            gsap.to(crsr,{
                scale:4,
                backgroundColor:"#ffffff8a"
            })
        })
    })
}

//teeno element ko select karo, uske baad teeno par ek mousemove lagao jab mousemove ho to ye pata karo ki mouse kaha hai,jiske matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation v tez ho jaye.



//<--------functionCall----------->
// locoscroll(); //this is making site bit laggy
// cursorsqueez(); this is making site bit laggy
customcrsr();
firstpageanime();
secondpageanime();
