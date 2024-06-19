//we are given array of marks of studdents filter out the marks of studdents that scored 90+.

let arr=[87,95,83,23,98];
let newarr=arr.filter((val)=>{
    return val>90;
})


/*take a number n as input from user. create an array of numbers from 1 to n.
use the reduce method to calculate sum of all numbers in Array. 
use the reduce method to calculate product of all number in the Array.*/

let n=prompt("Enter a number: ");
let brr=[];
for(let i=0;i<=n;i++){
    brr[i-1]=i;
}
const sum=brr.reduce((result,current)=>{
    return result+current;
})
console.log(sum);
const product=brr.reduce((result,current)=>{
    return result*current;
})
console.log(product);
