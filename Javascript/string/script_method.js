//These are built in function to manipulate a string

//it make all character uppercase
let a="prithvi Raj";
console.log(a.toUpperCase());

//it make all character lowercase
let b="TUSHAR KUMAR";
console.log(b.toLowerCase());

//it remove white spaces
let c="prithvi Raj";
console.log(c.trim());

//it joins two string
let d="Salman";
let e="Khan";
console.log(d.concat(e))//joins two string

//it returns part of string
let f="Shahrukh Khan";
console.log(f.slice(0,8));
//slice mein ending value nahi bhi daalenge to fadak nahi parta

//it replace one string to other one 
let searchVal="Tushar Kumar";
let NewVal="Prithvi Raj";
console.log(searchVal.replace(searchVal,NewVal));

//it
let h="prithvi";
console.log(h.charCodeAt(4));