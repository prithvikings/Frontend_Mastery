//Theorey Part of template literals is: 
/*
A way to have embedded expression in string 

String interpolation:
To create string by doing substitution of placeholder.*/

let obj={
    name:"Pen",
    price:34
};

console.log("The name of the object is :",obj.name,"and the Price of the object is :",obj.price);

//Another way of writng same string in this way that is called template literals it is short method 
console.log(`The name of the object is : ${obj.name} and the price of the object is : ${obj.price}`);

//both will have same output but this method is modern and shortly used method.