//6.create a tabbed interface where clicking on tabs display different content section without page reload.
let Home=document.querySelector("#Home");
let About=document.querySelector("#About");
let Contact=document.querySelector("#Contact");
let HomeTxt=document.querySelector("#Home-txt");
let AboutTxt=document.querySelector("#about-txt");
let ContactTxt=document.querySelector("#contact-txt");

HomeTxt.style.display="block";
HomeTxt.style.width="50%";

Home.addEventListener("click",()=>{
    removetext();
    HomeTxt.style.display="block";
    HomeTxt.style.width="50%";
})

About.addEventListener("click",()=>{
    removetext();
    AboutTxt.style.display="block";
    AboutTxt.style.width="50%";
})

Contact.addEventListener("click",()=>{
    removetext();
    ContactTxt.style.display="block";
    ContactTxt.style.width="50%";
})

const removetext=()=>{
    document.querySelectorAll("h3").forEach((h3)=>{
        h3.style.display="none";
    })
}