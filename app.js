 /*  mobile-hamburger-tutorial: https://www.youtube.com/watch?v=8r3hGIvyP3k  */

 function toggleClass(){
     let menu = document.querySelector(".hamburgerMenu");
     menu.classList.toggle("toggleCls");
 }

 let hamburger = document.querySelector(".hamIcon");
 hamburger.addEventListener("click", toggleClass);

 /* validation with JS-tutorial: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation */

 const email = document.getElementById("mail");

 email.addEventListener("input", function (event) {
        if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter valid email address.");
    }   else {
        email.setCustomValidity("");
    }  
 }
 );

