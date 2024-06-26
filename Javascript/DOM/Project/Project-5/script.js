//custom cursor
let main=document.querySelector("#main");

let cursor=document.querySelector("#cursor");

main.addEventListener("mousemove", (dets) => {
    let x = dets.clientX;
    let y = dets.clientY;

    // Calculate the boundaries
    let crWidth = cursor.offsetWidth;
    let crHeight = cursor.offsetHeight;
    let maxX = window.innerWidth - crWidth;
    let maxY = window.innerHeight - crHeight;

    // Constrain the position
    if (x > maxX) x = maxX;
    if (y > maxY) y = maxY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    console.log(dets);
});