//push-add to end --ye original array ke andar hi change karta hai.
let foodItems=["potato","apple","litchi","orange"];
console.log(foodItems);//before adding
foodItems.push("Chips");//way of adding 
console.log(foodItems);//after adding


console.log("--------Another method--------");


//pop-delete from end & return
let car=["Hyundai","Tata","Tesla","Bmw","Fortuner","Mahindra"];
console.log(car);
let b=car.pop();
console.log(car);
console.log(b);



console.log("--------Another method--------");


//toString():convert array to string it make new array orignal mein kuch nahi hota
let marks=[12,34,44,17,45];
console.log(marks);//right it is a marks
marks.toString();
console.log(marks);//but right now it is a string


console.log("--------Another method--------");


//concat-joins multiple arrays & return result ye orignal array ko change nahi karta.
let first=["prithvi","rahul","salman","shahruk","raj","tushar"];
let second=["Shivam","samay","tanmay","shahil","rajneekant","rohit"];
console.log(first);
console.log(second);
console.log(first.concat(second));


console.log("--------Another method--------");


//unshift-add to start-ye original ko change karta hai.
let marvel=["thor","spider","batmen"];
marvel.unshift("shaktiman");
console.log(marvel);


console.log("--------Another method--------");


//shift-delete from start & return
let marvale=["thor","spider","batmen"];
marvale.shift();
console.log(marvale);


console.log("--------Another method--------");


//slice():return a piece of the array ye bhi original mein change nahi karta
//syntax:-slice(startindex,endindex);
let bike=["hero","tvs","honda","yamaha","bajaj","kawasaki","royal","rajdoot"];
console.log(bike);//no change
console.log(bike.slice(0,2));//change
console.log(bike);//after change v main mein koi change nahi


console.log("--------Another method--------");


//splice():change original array(add,remove,replace)-origgnal mein change hota hai.
//syntax:-splice(startindex,delcount,newel);
let company=["realiance","Adani","Tata","jsw","jindal","marriot","jp morgan"];