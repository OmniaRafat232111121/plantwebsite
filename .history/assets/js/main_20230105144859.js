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
const questions = document.querySelectorAll('.question');
questions.forEach(function (question) {
    //console.log(question);
    const btn = question.querySelector('.question-btn');
    
    btn.addEventListener('click', function () {
        question.classList.toggle('show-text');
    })
})



const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.question-title')

    accordionHeader.addEventListener('click', () =>{
        const = document.querySelector('.accordion-open')

        toggleItem(item)

        if(show-text && show-text!== item){
            toggleItem(show-text)
        }
    })
})

