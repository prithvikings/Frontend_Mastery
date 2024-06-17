var arr=[1,2,3,4,5];
//add all members of array
var sum=0;
for(var i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log(sum);


var brr=[1,2,3,4,5];
//add all members of array
var count=0;
for(var i=0;i<brr.length;i++){
    count++;
}
console.log(count);

//how to loop an array
var crr=[1,2,4,5];
crr.forEach(function(val){
    console.log("hey");
})


//for printing all element of array we can use
var drr=[2,4,5,7,8];
drr.forEach(function(val){
    console.log(val);
})
//how to loop an array and do something witheach element.