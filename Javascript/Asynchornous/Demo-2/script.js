console.log("hey1");
console.log("hey2");
setTimeout(()=>{
    console.log("hey3")
},0);
console.log("hey4");

// yaha pe dekho hey1,hey2,hey4 teeno main stack mein hai and hey3 side stack main hai so pehle hey1 ayega then hey2 then hey4 after main is blank then hey 3 side stack se ayega.
