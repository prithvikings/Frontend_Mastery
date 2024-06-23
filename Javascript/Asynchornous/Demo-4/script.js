//this is normal way of doing things after using async await we can do same thing where we will easily remove all .then go see in script1.js file and make sure to link it with html
function abcd(){
    fetch(`https://randomuser.me/api/`)
    .then(function(raw){
      return raw.json();  
    })
    .then(function(data){
        console.log(data);
    })
}
abcd();
