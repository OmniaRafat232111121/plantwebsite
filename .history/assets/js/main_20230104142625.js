let navMenu = document.getElementById('nav_menu');
let closeButton = document.getElementById('nav_close');
let navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', function () {
    console.log('Hello');
})

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}