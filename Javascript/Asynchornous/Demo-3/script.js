let bool=true;
let ans=new Promise((resolve,reject)=>{
    if(bool=true){
        return resolve();
    }else{
        return reject();
    }
})
.then(()=>{
    console.log("Resolved ho gaya");
})
.catch(()=>{
    console.log("Not resolved ");
})
//basically hum agar kahi promise karte hai to 2 cheez hi hota hai either we complete the promise or we not complete the promise in the same way in js if we complete the promise then .then() function works in resolve otherwise reject in .catch