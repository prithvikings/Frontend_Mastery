//1. Create an Html Page With a button. When the button is clicked changet the text of a paragraph element.


//I have Maded it in bit advance method by adding toggle switch also but yeh question hume simple banana hai with out making toggle just have to change content by adding addeventlistner.
let para=document.querySelector("p");
let button=document.querySelector("button");
let mode="default";
button.addEventListener("click",()=>{
    if(mode==="default"){
        para.innerText="You Made My Days thank you";
        mode="update";
    }else{
        para.innerText="If you click On button I would be Happy";
        mode="default";
    }
})