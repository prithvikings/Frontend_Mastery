// 9.build a character counter for a text area or input field which updates in real
// user types and enforces a character limit.

let textarea=document.querySelector("textarea");
let count=document.querySelector("span");
textarea.addEventListener("input",()=>{
    count.innerText=textarea.value.length;
})