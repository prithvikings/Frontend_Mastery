let add=document.querySelector("#add");
let remove=document.querySelector("#remove");
let ul=document.querySelector("ul");
let input=document.querySelector("input");
let li;
add.addEventListener("click",()=>{
    if(input.value.trim()===""){}
    else{
        li=document.createElement("li");
        li.innerText=input.value;
        ul.appendChild(li);
        console.log(li);
        input.value="";
    }
})

remove.addEventListener("click",()=>{
    ul.removeChild(ul.lastChild);
})