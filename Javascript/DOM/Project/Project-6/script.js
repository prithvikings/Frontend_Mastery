let elems = document.querySelectorAll(".elem");

elems.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        elem.childNodes[3].style.opacity = 1;
    });

    elem.addEventListener("mouseleave", () => {
        elem.childNodes[3].style.opacity = 0;
    });

    elem.addEventListener("mousemove", (event) => {
        elem.childNodes[3].style.left = event.clientX + "px";
        elem.childNodes[3].style.top = event.clientY + "px";
    });
});
