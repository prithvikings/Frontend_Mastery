/*
-filter
create a new array of elements that give true for condition/filter example:-all even elements;
let newArr=arr.filter((val)=>{
    return val%2==0;
})*/

//it will return only even number in newarray
let arr=[2,3,4,5,6,7,8,9,10];
let newarr=arr.filter((val)=>{
    return val%2==0;
})

//it will return only number greater than 3

let greater=arr.filter((val)=>{
    return val>3;
})

//here we can see that their is not changes is made on original array.