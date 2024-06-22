//Add Freind Features with same button
let btn=document.querySelector("#mode");
let add=document.querySelector("#Add");
let head=document.querySelector("h5");
let main=document.querySelector("body");
let card=document.querySelector("#card");
let name=document.querySelector("h3");
let flag=0;
let current="light";
btn.addEventListener("click",()=>{
    if(current==="light"){
        btn.style.color="black";
        btn.style.backgroundColor="white";
        btn.innerText="Light-Mode";
        card.style.backgroundColor="yellow";
        main.style.backgroundColor="#0C0C0C";
        name.style.color="black";
        add.style.backgroundColor="#0C1844";
        current="dark";
    }else{
        btn.style.color="#201a1a";
        btn.style.backgroundColor="#f8ff35";
        btn.innerText="Dark-Mode";
        card.style.backgroundColor="#fff";
        name.style.color="black";
        main.style.backgroundColor="cornflowerblue";
        add.style.backgroundColor="cadetblue";
        current="light";
    }
})
add.addEventListener("click",()=>{
    if(flag===0){
        head.innerText="Friend";
        head.style.color="green";
        add.innerText="Remove"
        add.style.color="#FAEF5D";
        add.style.backgroundColor="#9B3922";
        flag=1;
    }else{
        head.innerText="stranger";
        head.style.color="red";
        add.innerText="Add Friend"
        add.style.color="#fff";
        add.style.backgroundColor="cadetblue";
        flag=0;
    }
})
