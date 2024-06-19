//create a H2 Heading elelmetn with text-"Hello Javascript".append "from prithvi raj" to this text using js.

let a=document.querySelector("h2");
a.innerText=a.innerText+" From Prithvi Raj";

//create 3 div with common class name box. acces them and some unique text to each of them.

let b=document.querySelectorAll(".elem");

b[0].innerText="New Unique valuee 1";
b[1].innerText="New Unique valuee 2";
b[2].innerText="New Unique valuee 3";

//we can use loop also here
let index=1;
for(let bs of b){
    bs.innerText=`New Unique Vaalue ${index}`;
    index++;
}