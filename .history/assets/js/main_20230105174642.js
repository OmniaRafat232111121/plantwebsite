let navMenu = document.getElementById('nav_menu');
let navList = document.getElementById('nav_list');
let navItem = document.getElementById('nav ul li');
let closeButton = document.getElementById('nav_close');
let navToggle = document.getElementById('navToggle');
const header = document.getElementById('header');
navToggle.addEventListener('click', function () {
    navList.classList.toggle('show-menu');

    
})
/*change background header*/
window.addEventListener('scroll', function () {
   header.classList.toggle("change-header",window.scrollY > 40)
})


/*toggle questions*/
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;

    question.classList.toggle("show-text");
  });
});


ScrollReveal().reveal('.left-content', { delay: 500 },{interval: 100});
ScrollReveal().reveal('.right-content', { delay: 800 });

ScrollReveal().reveal('.social_icons', { origin: 'left' });

ScrollReveal().reveal('.social_icons', {origin: 'left'});

ScrollReveal().reveal('.left-about img, .contact-container .right-contact', { origin: 'right' }, { delay: 800 });

