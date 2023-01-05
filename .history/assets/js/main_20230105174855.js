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
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr().reveal('.left-content', { delay: 500 },{interval: 100});
srl().reveal('.right-content', { delay: 800 });

srl().reveal('.social_icons', { origin: 'left' });

srl().reveal('.left-about',{ delay: 400 }, {origin: 'right'});

srl().reveal('.left-about img, .contact-container .right-contact', { origin: 'right' }, { delay: 800 });

