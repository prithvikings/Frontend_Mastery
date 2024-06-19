/*
-reduce-it performs some operation & reduces the array to a single value. it return that single value.*/
const arr=[1,2,3,4,5];

//0 + 1 + 2 + 3 + 4 + 5
const output=arr.reduce((result,current)=>{
    return result+current;
})
console.log(output);
//expected output 15