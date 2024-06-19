/* -map-create a new array with the result of some operation the value its callback returns are used to form new array.

map is very similar to for each loop ye bhi har ek element tak jake operation karta hai but their is slight difference
aur woh hai ki map kaam ke baad ek naya aray return karta hai but whereas for each har ek eleemt tak sirf operation tha.

Syntax-arr.map(callBackFunction(value,index,array));

generally we dont use index and array in it.

let newArr=arr.map((val)=>{
    return val*2;
})*/

let nums=[2,3,4];
let newnums=nums.map((val)=>{
    return val*val;
});
console.log(newnums);
console.log(nums);//orignal pe kuch change nahi hua but naya wala change ho gaya.