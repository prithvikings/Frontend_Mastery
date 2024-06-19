//for a given array with prices of 5 items [250,645,300,900,50] all items have an offer of 10% off on them change the array to store final price after applying offer.



let items=[250,645,300,900,50];
let i=0;
for(let val of items){
    console.log(`The value before offer is ${val}`);
    let offer=val/10;
    items[i]=items[i]-offer;
    console.log(`The value after offer is ${items[i]}`);
    i++;
}


console.log("Another method");

for(let i=0;i<items.length;i++){
    console.log(`The value before offer is ${items[i]}`);
    let offer =items[i]/10;
    items[i]=items[i]-offer;
    console.log(`The value after offer is ${items[i]}`);
}