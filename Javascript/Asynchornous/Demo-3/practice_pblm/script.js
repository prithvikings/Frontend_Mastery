//user will ask for a number between 0 to 9 and if then number is below 5 resolve if not reject
let not=document.createElement("h1");
let num=prompt("Enter number between 1 to 9: ");

let ans=new Promise((resolve, reject) => {
    if(num>9){
        return reject();
    }else{
        if(num>=5){
            return reject();
        }else{
            return resolve();
        }
    }
})

.then(()=>{
    not.innerText="It is Resolved";
    not.style.fontFamily="poppins";
    not.style.fontSize="100px";
    not.style.textAlign="center";
    document.body.appendChild(not);
})

.catch(()=>{
    not.innerText="It is Rejected";
    not.style.fontFamily="poppins";
    not.style.fontSize="100px";
    not.style.textAlign="center";
    document.body.appendChild(not);
})