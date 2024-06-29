//4.create an ul list. Allow user to add and remove list item dynamically using buttons.
let add=document.querySelector("#add");
let remove=document.querySelector("#remove");
let input=document.querySelector("input");
let ul=document.querySelector("ul");
let li;
add.addEventListener("click",()=>{
    if(input.value.trim()===""){}
    else{
        li=document.createElement("li");
        li.innerText=input.value;
        console.log(li);
        ul.appendChild(li);
        input.value="";
    }
})

remove.addEventListener("click",()=>{
    ul.removeChild(ul.lastChild);
})

