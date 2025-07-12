let center=document.querySelector('.center');

const btn=document.querySelector("#throttle");

const throttlefunction=(func,delay)=>{
    let prev=0;
    return(...args)=>{
        let now= new Date().getTime();
        if(now-prev>delay){
            prev=now;
            return func(...args);
        }
    }
}



center.addEventListener("mousemove",throttlefunction((e)=>{
    let imageDiv=document.createElement("div");
    imageDiv.classList.add("imageDiv");
    
    imageDiv.style.left=`${e.clientX}px`;
    imageDiv.style.top=`${e.clientY}px`;
    
    let image=document.createElement("img");
    image.setAttribute("src","https://images.unsplash.com/photo-1750412143850-68d5003c6a36?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    image.setAttribute("alt","Random Image");

    imageDiv.appendChild(image);
    document.body.appendChild(imageDiv);
    
    gsap.to(image,{
        y: "0",
        ease: "power1",
        duration: .6,

    })

    
    gsap.to(image,{
        y: "100",
        delay:.6,
        ease: "power2",
    })
    
    setTimeout(() => {
        imageDiv.remove();
    }, 2000);

},500));