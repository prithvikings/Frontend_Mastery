//7.display a progress bar that upadates in real-time showing the progress of download, or form submisssion
let progress=document.querySelector("#progress");
let count=0;
let heading=document.querySelector("h3");
let interval=setInterval(()=>{
    if(count===100){
        clearInterval(interval);
        heading.style.opacity=1;
    }else{
        count++;
        progress.style.width=count+'%';
    }
},50)