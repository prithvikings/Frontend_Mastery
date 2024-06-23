// 8.create a search bar that display live search result as user type updating the result without requring a full page reload.


//Making data Dynamicaly from js
let data=[
    {name:"Prithvi",src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Rohit",src:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Priti",src:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Priyanshu",src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]
let pers='';
data.forEach((elem)=>{
    pers+=`<div class="person">
                <div class="img">
                    <img src=${elem.src} alt="">
                </div>
                <h4>${elem.name}</h4>
            </div>`
})

let people=document.querySelector(".people");
people.innerHTML=pers;


//Now The Searching Part
let input=document.querySelector("input")
    input.addEventListener("input",()=>{
        // console.log(input.value);
        let matching =data.filter((elem)=>{
            return elem.name.startsWith(input.value);
        })
        // console.log(matching);
        let newuser='';
        matching.forEach((elem)=>{
            newuser+=`<div class="person">
                        <div class="img">
                            <img src=${elem.src} alt="">
                        </div>
                        <h4>${elem.name}</h4>
                    </div>`
        })
        
        let people=document.querySelector(".people");
        people.innerHTML=newuser;
    })
