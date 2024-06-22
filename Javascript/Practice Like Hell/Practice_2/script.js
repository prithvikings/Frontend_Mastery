// 2. Create a page with two images and a button.when the button is clicked,swap the source attribute of the images.
let button=document.querySelector("button");
let img1=document.querySelector(".img-1");
let img2=document.querySelector(".img-2");
button.addEventListener("click",()=>{
    let src1=img1.src;
    let src2=img2.src;
    img1.src=src2;
    img2.src=src1;
})