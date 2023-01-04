let navMenu = document.getElementById('nav_menu');
let navList = document.getElementById('nav_list');
let navItem = document.getElementById('nav ul li');
let closeButton = document.getElementById('nav_close');
let navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', function () {
    navList.classList.add('show-menu');
    closeButton.classList.remove('show-menu')
})

