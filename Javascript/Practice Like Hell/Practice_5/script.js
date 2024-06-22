//5.build a countdown time that start when a button is clicked and the display in real-time
let counter=document.querySelector("h3");
let start=document.querySelector("#start");
let stop=document.querySelector("#stop");
let interval;
start.addEventListener("click",()=>{
    let count=0;
    interval=setInterval(()=>{
        counter.innerText=count;
        count++;
    },1000)
})
stop.addEventListener("click",()=>{
    clearInterval(interval);
})


//setinterval ek function hai jo 2 cheez accept karta hai callback and timer callback ka mtlb function hota hai. timer ko hum milisecond mein likhte hai.
