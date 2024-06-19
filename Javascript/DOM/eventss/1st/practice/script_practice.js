//create a toggle button that changes the screen to dark-mode when clicked & light mode when clicked again
// let bg=document.querySelector("main");
// let btn=document.querySelector("button");
// let current="Light";
// btn.addEventListener("click",()=>{
//     if(current==="Light"){
//         bg.style.backgroundColor="black";
//         current="dark";
//     }else if(current==="dark"){
//         bg.style.backgroundColor="Antiquewhite";
//         current="Light";
//     }
//     console.log(current);
// })

//Hum log is question ko classlist ke help se v kar skte hai 2 class bana ke jab koi light mode pe click kare to ek change hoke dusre class mein chala jaye.

let bg=document.querySelector("main");
let btn=document.querySelector("button");
let current="Light";
btn.addEventListener("click",()=>{
    if(current==="Light"){
        bg.classList.remove("light"); 
        bg.classList.add("dark");    
        current="dark";
    }else if(current==="dark"){
        bg.classList.remove("dark");
        bg.classList.add("light");
        current="Light";
    }
    console.log(current);
})