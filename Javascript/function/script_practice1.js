//create a function using the function keyword that takes a string as an argument and return the number of vowels in the string.

function countVowels(str){
    var count=0;
    for(const char of str){
        
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
            count++;
        }
    }
    console.log(count);
}

//create an arrow function to perform same task.

var counting=(str)=>{
    var count=0;
    for(const char of str){
        
        if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
            count++;
        }
    }
    console.log(count);
}
