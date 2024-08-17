//immutable vs mutable iska lena dena primitivie and reference se hai
var arr=[1,2,3,4];
var arr2=arr;
arr2.pop();
console.log("The value of array 2: ",arr2)
console.log("The value of array 2: ",arr2)
/*Look Yaha pe array 2 se to value pop hui hi sath mein array 1 se v value hat gaya kyunki array immutable hai 
react js mein apko ek state naam ki cheej milegi us bande ko aap mutate nahi kar skte matlab ki directly uski value nahi hata ya jod sakte 
to hume issey real wala copy karna hoga uske liye spread operator use hoga*/
var arr3=[1,2,3,4];
var arr4=[...arr3];
arr4.pop();
console.log("The value of array 3: ",arr3);  
console.log("The value of array 4: ",arr4);  


var state={name:"Prithvi",age:18};
var copy={...state};
copy.age=20;
console.log("The value of state: ",state);
console.log("The value of copy: ",copy);
state=copy;
console.log("The value of state: ",state);
/*React mein data jab change hoga to ussey kuch is tarah se hi change karna hoga*/

//array objects destructuring 
/*Now for Array destructuring */
var obj={name:"Rahul",age:25};
const {age}=obj;//dekho is kaam ko aap obj.age se v kar skte ho but that is not good practice
console.log(age);
//array destructuring ka asli use yaha hai dekho
var media={
    name:"String",
    social:{
        facebook:{
            first:"Hahaha",
            second:"cchacah",
        },
    },
}
//ab let say mujhe baar baar second ko use karna hai so baar baar media.social.facebook.second type karna unconvinient hoga so we use destructuring 
console.log(media.social.facebook.second);
const{second}=media.social.facebook;
console.log(second);
//import and export for react
/*
hum log componenet banate hai component matlab page ka hissa navbar, sidebar, cart, landing , second, ab dikkat ye aati hai ki har hissa alag alag component hai aur componenets ko hum log alag alag files mein rakhte hai to last mein inhe jodna hota hai aur jodne ke liye import and export use karna hota hai.

navbar-export
sidebar-export
cart-export
landing-export
second-export
main-import navbar,sidebar,cart,landing,second;
*/

//arrow fncs
function abcd(){ //this is traditional function
    console.log("Hello traditional function");
}
abcd();

const hel=()=>{
    console.log("Hellooo modern arrow");
}
hel();

//arrow fncs with param
function abcd(name){ //this is traditional function
    console.log("Hello traditional function",name);
}
abcd("Rahul");
const helya=(name)=>{
    console.log("Hellooo modern arrow",name);
}
helya("Rohit");

//arrow function mein ek hi param pass karna hai to without bracket v kar skte hai
const helu=name=>{
    console.log("Hellooo modern arrow",name);
}
helu("srk");

//arrow function with implicit function
const aabda=()=>12;
console.log(aabda());
//arrow function with implicit return another example :
const hels=name=>console.log("Hellooo modern arrow",name);
hels("prithvi"); 


//map filter
/*
map filter - dono hi array pe chalte hai, aru dono ka kaam hai array par kuch perform karna and ek naya array return karna

map-har element par kuch karo and naye array mein rakho 
important baat map ke andar return karna ke wajah se hi elements naye array mein place hota hai

map ke andar aata hai function and function ke andar aata hai value 
filter-jo condition match kare wo element naye array mein rakho, aur jo nahi
*/
var marr=[1,2,3,4,5];
marr.map((val)=>{
    var ans=val;
    console.log(ans);
})

//another good example of array
var mstate=[1,2,3,4,5];
const mans=mstate.map((elem)=>{
    return elem*2;
})
console.log("Before Any Change state: ",mstate);
console.log("Making change : ",mans);
mstate=mans;
console.log("Copying in mstate from change: ",mstate);


//antoher question to solve related to map
//ek array hai saare number jo ki 5 se bade ho unke 5 jod dena and baaki numebrs waise ke waise return karo naye array mein
var marr=[1,2,3,4,5,6,7,8,9];
const hmans=marr.map((elem)=>{
    if(elem>5){
        return elem+5;
    }else{
        return elem;
    }
})
console.log("Before Any Change state: ",marr);
console.log("Making change : ",hmans);


//map filter mein ek hi farak hai, map saare bande lautata hai matlab ki count kam nahi hoga, filter bando ko kam kar skta hai

//jab og array ka size kam naa hona ho waha map use hota hai

//jab og array ka size kam karna ho waha filter use hota hai

//ek array mein se saare wo nums hata do jo ki 3 se chhote hai
var karr=[1,2,3,4,5,6];
const karrans=karr.filter(elem=>{
    return elem>3;
})
console.log("Before Any Change state: ",karr);
console.log("Making change : ",karrans);

//another good example of filter is: 
var empl=[
    {name:"Rakesh",age:25,gender:"Male"},
    {name:"Karthik",age:22,gender:"Male"},
    {name:"Salman",age:18,gender:"Male"},
    {name:"Alia",age:25,gender:"Female"},
    {name:"Deepika",age:35,gender:"Female"},
    {name:"Karan",age:55,gender:"others"},
]
const emplans=empl.filter((elem)=>{
    return elem.gender=="Male"&&elem.age>20;
})
console.log("Before Any Change state: ",empl);
console.log("Making change : ",emplans);
//arrays ek aisa data structure hai jo ki ek se jaada elements rakh skta hai
//[1,2,4,5,5];
//In Javascript we can put multiple data type in array because it is a dynamic array [1,2,3,4,apple,3.4];

