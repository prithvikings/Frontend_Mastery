/*create newBtn new button element give it newBtn text "click me", background color of red & text color of white

insert the button as the first element inside the body tag*/
let newBtn=document.createElement("button");
newBtn.innerText="Click Me";
newBtn.style.backgroundColor="red";
newBtn.style.Color="white";
let news=document.querySelector("body");
news.prepend(newBtn);
