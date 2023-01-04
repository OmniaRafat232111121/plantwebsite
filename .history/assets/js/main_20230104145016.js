let navMenu = document.getElementById('nav_menu');
let navList = document.getElementById('nav_list');
let navItem = document.getElementById('nav_item');
let closeButton = document.getElementById('nav_close');
let navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', function () {
         navItem.classList.toggle('show-menu');
})

