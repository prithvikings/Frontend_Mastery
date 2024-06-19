//for a given array of number print the square of each value using the forEach loop.
let arr=[2,3,4,5,6];
arr.forEach((num)=>{
    console.log(num*num);
});
//Another way of doing
let brr=[1,2,3,,6];
arr.forEach(function(val){
    console.log(val*val);
})

//Another way of doing
let grr=[2,3,4,5];
let calsquare=function(num){
    console.log(num*num);
};
grr.forEach(calsquare);


//Another Way of doing

let st=[2,3,5,6];
let square=(val)=>{
    console.log(val*val);
};
st.forEach(square);