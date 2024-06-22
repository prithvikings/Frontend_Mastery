//Insta Love Button
let cont=document.querySelector("#container");
let icon=document.querySelector("i");

cont.addEventListener("dblclick",()=>{
    icon.style.transform='translate(-50%,-50%) scale(1)';
    icon.style.opacity=0.8;
    setTimeout(()=>{
        icon.style.opacity=0;
    },1000);
    setTimeout(()=>{
        icon.style.transform='translate(-50%,-50%) scale(0)';
    },2000);
});

//set timeout give delay
setTimeout(()=>{
    icon.style.transform='translate(-50%,-50%) scale(0)';
},2000);