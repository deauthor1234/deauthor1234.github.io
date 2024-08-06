//Preloader
let preloader = document.querySelector('.preloader');
let nav = document.querySelector('.top');

window.addEventListener('load', () => {
  preloader.style.display = "none";
})

//Navbar Effect
window.addEventListener('scroll', () => {
  nav.classList.toggle('shadow', window.scrollY > 0);
  search.classList.remove("show");
  navbar.classList.remove("show");
})

//Navbar Opening Effect
let navbar = document.querySelector('.navbar')
let navIcon = document.querySelector('#nav-icon');

navIcon.addEventListener('click', function () {
  navbar.classList.toggle("show");
  search.classList.remove("show");
})

//Search Bar Effect
let search = document.querySelector('.search-wrapper')
let searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', function () {
  search.classList.toggle("show");
  navbar.classList.remove("show");
})