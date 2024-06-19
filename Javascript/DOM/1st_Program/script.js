let newText=document.createElement("h1");//it will help us to add new element in site it 2step process it is first process
newText.innerText="Hello Homies";
newText.style.textAlign="center";//here we are styling it
newText.style.fontFamily="poppins";
newText.style.color="rgb(75, 230, 8)";
let nav=document.querySelector("#main");
nav.append(newText)//2nd step process

let par=document.querySelector("p");
par.remove();//it will remove any element from js

//do it after learning event

//toggle button
let mn=document.querySelector("#main");
let currentMode="light";
let btn=document.querySelector(".but-btn");
btn.addEventListener("click",()=>{
    if(currentMode==="light"){
        mn.classList.add("dark");
        mn.classList.remove("light");
        currentMode="dark"
    }else{
        mn.classList.add("light");
        mn.classList.remove("dark");
        currentMode="light"
    }
    console.log(currentMode);
})
