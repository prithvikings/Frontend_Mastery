// #1.global- window
// console.log(this);


// #2.function- window
// function abcd(){
//     console.log(this);
// }
// abcd();


// #3.method- object
// var obj={
//     name:function(){           //function jo object ke andar hota hai ussey hum log method bolte hai
//         console.log(this);
//     },
//     age:25,
//     email:"erjek@gmail.com"
// };
// obj.name();
// #4.function inside method (es5)- window
// var obj2={
//     sayName:function(){
//         console.log(this);//it will return object
//         function childFnc(){
//             console.log(this);// it will return window
//         }
//         childFnc();
//     }
// }
// obj2.sayName();
//es5 function inside method mein window return  karega but when we use it above method console log it will return the object

var obj3={
    sayName: function(){
        const beta = () => {
            console.log(this);// it will return object cause right now inside method we have used es6 type of function
        }
        beta();
    }
}
obj3.sayName();



// #5.function inside method (es6)- object
// #6.constructor function mein this ki value- new blank object
// #7.event listner mein this ki value- that element jisper event listner lag raha hai.