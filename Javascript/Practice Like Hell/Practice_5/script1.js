let start=document.querySelector("#start");
let counter=document.querySelector("h3");
let stop=document.querySelector("#stop");
let interval;
start.addEventListener("click",()=>{
    let count=0;
   interval= setInterval(()=>{
        count++;
        counter.innerText=count;
    },1000);
})

stop.addEventListener("click",()=>{
    clearInterval(interval);
})