const navToggle = document.querySelector(".nav_toggle");
const  links = document.querySelector(".main_nav");
const body = document.querySelector("body");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
    body.classList.toggle("body-hidden");
})