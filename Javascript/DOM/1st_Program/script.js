let newText=document.createElement("h1");//it will help us to add new element in site it 2step process it is first process
newText.innerText="Hello Homies";
newText.style.textAlign="center";//here we are styling it
newText.style.fontFamily="poppins";
newText.style.color="rgb(75, 230, 8)";
let nav=document.querySelector("#main");
nav.append(newText)//2nd step process

let par=document.querySelector("p");
par.remove();//it will remove any element from js