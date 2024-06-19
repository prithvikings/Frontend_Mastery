var arr=[1,2,3,4,5];
//add all members of array
var sum=0;
for(var i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log(sum);



// Another Way of addition
var arr=[12,2,3,4,5];
var sum=0;
arr.forEach(function(val){
    sum+=val;
});
console.log(sum);


var brr=[1,2,3,4,5];
// count all members
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

let heroes=["Spider Men", "ShaktiMan", "Batmen", "Raone", "AntMen"];
//ye for loop se hua hai
for(let i=0;i<=heroes.length;i++){
    console.log(heroes[i]);
}
//ye for of loop se hua hai
for(let hero of heroes){
    console.log(hero);
}
//ye for of loop se hua hai
for(let hero in heroes){
    console.log(heroes[hero]);
}
