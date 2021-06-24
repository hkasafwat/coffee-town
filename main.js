window.addEventListener('DOMContentLoaded', function () {
  let button1 = document.querySelector(".button-1");
  let button2 = document.querySelector(".button-2");
  let button3 = document.querySelector(".button-3");

  let menu1 = document.querySelector(".menu-1");
  let menu2 = document.querySelector(".menu-2");
  let menu3 = document.querySelector(".menu-3");
  
  let menuToggle = document.querySelector(".menu-toggle");
  let dropdownMenu = document.querySelector(".nav-dropdown-menu");

  button1.addEventListener('click', function() {
    menu1.classList.toggle("hide-menu");
    menu1.classList.toggle("show-menu");

    document.querySelector('.button-1 i').classList.toggle('fa-chevron-down') ;
    document.querySelector('.button-1 i').classList.toggle('fa-chevron-up') ;
  });

  button2.addEventListener('click', function() {
    menu2.classList.toggle("hide-menu");
    menu2.classList.toggle("show-menu");

    document.querySelector('.button-2 i').classList.toggle('fa-chevron-down') ;
    document.querySelector('.button-2 i').classList.toggle('fa-chevron-up') ;
  });

  button3.addEventListener('click', function() {
    menu3.classList.toggle("hide-menu");
    menu3.classList.toggle("show-menu");

    document.querySelector('.button-3 i').classList.toggle('fa-chevron-down') ;
    document.querySelector('.button-3 i').classList.toggle('fa-chevron-up') ;
  });

  menuToggle.addEventListener('click', function() {
    dropdownMenu.classList.toggle("hide-menu");
    dropdownMenu.classList.toggle("show-menu");
  });

});