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

/*scroll up*/
const scrollUp = document.getElementById('scroll-up');
window.addEventListener('scroll', function () {
  scrollUp.classList.toggle("show-scroll",window.scrollY >= 400)
})

/*scroll reveal*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.home-container`)
sr.reveal(`.right-content img`, { delay: 500 });
sr.reveal(`.left-about`, { delay: 500 });
sr.reveal(`.right-about`, { delay: 900 });
sr.reveal(`.about-boxes .box , .left-contact `, { delay: 500 })
sr.reveal(` .right-contact `, {delay: 900})
sr.reveal(`.social-icons`, {delay: 600})
sr.reveal(` .products-boxes .box , .question, .footer`,{interval: 100})


