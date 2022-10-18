/*Color change after scrolling*/
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    let windowPosition = window.scrollY>0;

    header.classList.toggle("scrolling-active",windowPosition)
})

/*Hamburger Section*/
const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});