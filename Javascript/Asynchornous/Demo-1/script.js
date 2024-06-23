// is example mein hum dekh skte hai ki settime out baad mein chal raha hai
// console.log("hey");
// setTimeout(() => {
//     console.log("hey2");
// }, 2000);
// console.log("hey3");


//ab agar hume ye chahiye cheezein line by line chale to hey3 ko hey 2 wale timeout function ke andar daal denge

console.log("hey1");
setTimeout(()=>{
    console.log("hey2");
    console.log("hey3");
},2000);

//acha ek aur baat settimeout ke andar jo function use ho raha hai ussey call back function v bolte hai.