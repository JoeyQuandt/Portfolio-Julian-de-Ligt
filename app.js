const navBar = document.getElementById("navbar-section")
const nav = document.querySelector(".navbar-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el)
/*Scrolling active*/
window.addEventListener("scroll",function(){
  let windowPosition = window.scrollY>0;
  navBar.classList.toggle("navbar-section-active",windowPosition)
})

/*Hamburger Section*/
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


