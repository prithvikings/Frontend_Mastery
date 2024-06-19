/*create a <p> tag in html give it a class & some styling.
now create new class in css and try to this to the <p> element
did you notice how you overwrite the class name when you add a new class sove this Problem using classList*/

let par=document.querySelector("p");
let c=par.getAttribute("class");
let d=par.setAttribute("class","myClass");

//yaha pe humne jaise hi setAttribute ka use kiya to purani class ki value hat ke nayi lag gayi ye completely overwrite kar diya but what if we only want little bit of change so for that we use classList

//for add 

// par.classList.add("myClass");

//isme ye completely overwrite nahi karega par woh saari value hata dega jo humne second class ko di hai like in this case i have given only background color so it has changed that but setattribute mein ye completely overwrite ho jata hai.//we can remove also any class.


//for remove
// par.classList.remove("myClass");