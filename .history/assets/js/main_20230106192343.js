let navMenu = document.getElementById('nav_menu');
let navList = document.getElementById('nav_list');
let closeButton = document.getElementById('nav_close');
let navToggle = document.getElementById('navToggle');
const header = document.getElementById('header');
const themeButton = document.getElementById('theme-button');
const btns = document.querySelectorAll(".question-btn");
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';
// selected in storage
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon');
//listener
navToggle.addEventListener('click', function () {
    navList.classList.toggle('show-menu'); 
})
/*change background header*/
window.addEventListener('scroll', function () {
   header.classList.toggle("change-header",window.scrollY > 40)
})
/*toggle questions*/
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;

    question.classList.toggle("show-text");
  });
});

/*scroll up*/


window.addEventListener('scroll', function () {
  scrollUp.classList.toggle("show-scroll",window.scrollY >= 400)
})

/*scroll reveal*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home-container`)
sr.reveal(`.right-content img`, { delay: 500 });
sr.reveal(`.left-about`, { delay: 500 });
sr.reveal(`.right-about`, { delay: 900 });
sr.reveal(`.about-boxes .box , .left-contact `, { delay: 500 })
sr.reveal(` .right-contact `, {delay: 900})
sr.reveal(`.social-icons`, {delay: 600})
sr.reveal(` .products-boxes .box , .question, .footer`,{interval: 100})





const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
