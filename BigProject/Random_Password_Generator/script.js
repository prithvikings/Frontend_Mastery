const passwordBox=document.getElementById("Password");
const length=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
let button=document.querySelector("button");
button.addEventListener("click",()=>{
    createPassword();
})
const number='1234576890';
const symbol='@$';
const allChar=upperCase+lowerCase+number+symbol;
const createPassword=()=>{
    let Password="";
    Password+=upperCase[Math.floor(Math.random()* upperCase.length)];
    Password+=lowerCase[Math.floor(Math.random()* lowerCase.length)];
    Password+=number[Math.floor(Math.random()* number.length)];
    Password+=symbol[Math.floor(Math.random()* symbol.length)];
    while(length>Password.length){
    Password+=allChar[Math.floor(Math.random()* allChar.length)]; 
    }
    passwordBox.value=Password;
}