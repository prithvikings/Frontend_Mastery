/*Prompt the user to enter their full name. generate a username for them based on the input start with @,followed by their full name and ending with the full name length*/

// let a=prompt("Enter You Full-Name😘: ");
// let b='@';
// let length;
// length=a.length;
// console.log(`${b.concat(a).concat(length)}`);

//Another way of making this
let fullName=prompt("Enter Your Full Name: ");
let UserName='@'+fullName+fullName.length;
console.log(UserName);