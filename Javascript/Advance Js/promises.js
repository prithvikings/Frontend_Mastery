const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
     return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.


// Callbacks
// function ke andar as a parameter pass kiya gaya function ko callback function kehte hain.
// user se data mangao and jab data mil jaye to us data ke name, gender and email ko print karo.
//its basically jab data mil jaye tab agar koi function chalana hai to us function ko callback function kehte hain.


const getAllUsers=async(callback)=>{
    try{
        const response=await fetch("https://randomuser.me/api");
        const data=await response.json();
        callback(data.results[0])
    }
    catch{
        console.log("Error");
    }
}
getAllUsers((data)=>{
    console.log(data.name.first);
    console.log(data.email);
    console.log(data.gender);
})

// Another way of doing the same thing
function getAllUsers(url,callback){
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        callback(data.results[0]);
    })
    .catch(()=>{
        console.log("Error");
    })
}
getAllUsers("https://randomuser.me/api",(data)=>{
    console.log(data.name.first);
    console.log(data.email);
    console.log(data.gender);
});

async function getAllUsers() {
    try {
        const response = await fetch("https://randomuser.me/api");
        const data = await response.json();
        console.log(data.results[0].name.first);
        console.log(data.results[0].email);
        console.log(data.results[0].gender);
    } catch (error) {
        console.log("Error", error);
    }
}
getAllUsers();


// async await
// async function ke andar await keyword ka use hota hai. Await keyword tab tak wait karta hai jab tak promise resolve na ho jaye. 
//jab tak await function resolve nahi hota tab tak next line execute nahi hoti.

//Event Loop
// Event loop is a mechanism that makes sure that the code runs in a non-blocking way.Ye humesa check karta hai ki kya koi task ready ho gaya hai ya nahi in sidestack or callback queue and kya main stack ke saare task execute hue hai ki nahi.agar koi task ready ho gaya hai to us task ko side stack se main stack main le aata hai agar main stack khali hai.

//Generator
// Generators are functions that can be paused and resumed. They are created using function* syntax.

function* generatorFunction(){
    console.log("This will be executed first");
    yield 'Hello';
    console.log("I will be printed after the pause");
    yield 'World';
    return 'Generator is finished';
}

const genObj=generatorFunction();
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());

//web workers
// Web workers allow you to run JavaScript in a separate thread. This allows you to run heavy tasks without blocking the main thread.

