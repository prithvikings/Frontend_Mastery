//ek await lagane se ek .then() hat jayeaga
async function abcd(){
   let raw=await fetch(`https://randomuser.me/api/`)
   let ans= await raw.json();
    console.log(ans);
}
abcd();
console.log("hey")//it is sync code then it will be on top of async