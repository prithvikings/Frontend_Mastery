let uppercase = "ABCDEFGHJIKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "123456789";
let special = "@$_";
let passwordbox = document.querySelector("#Password");
let button = document.querySelector("button");
let icon = document.querySelector("i");
let allchar = uppercase + lowercase + special + number;
let size = 12;

button.addEventListener("click", () => {
    createpass();
});
const createpass=()=>{
    let pass="";
    pass+=uppercase[Math.floor(Math.random()*uppercase.length)];
    pass+=lowercase[Math.floor(Math.random()*lowercase.length)];
    pass+=number[Math.floor(Math.random()*number.length)];
    pass+=special[Math.floor(Math.random()*special.length)];
    while(size>pass.length){
        pass+=allchar[Math.floor(Math.random()*allchar.length)];
    }
    passwordbox.value=pass;
}
icon.addEventListener("click",()=>{
    passwordbox.select();
    document.execCommand("copy");
})