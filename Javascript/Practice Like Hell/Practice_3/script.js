//3.create a form with input field and a submit button. use javascript to validate the form and display an error message if the input is invalid.

/*Jab bhi forms ke sath deal karo yaad rakho ki submit hone par forms page ko reload kar deta hai aur tumhe khayaal rakhna hai ke pages reload naa ho nahi to agar page reload hua to js nahi chalega kyunki js chal paaye se pahle hi page reload ho chuka hoga*/

/*Form ko submit kare par reload se rokne ke liye hum prevent default ka use karte hai */

let form = document.querySelector("form");
let inps = document.querySelectorAll('input[type="text"]');
let h4 = document.querySelector("h4");

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let allValid = true;

    for (let i = 0; i < inps.length; i++) {
        if (inps[i].value.trim() === '') {
            h4.innerText = "Some fields are error";
            h4.style.color = "red";
            allValid = false;
            break;
        }
    }

    if (allValid) {
        h4.textContent = "";
    }
});

