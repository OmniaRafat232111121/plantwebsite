
let navMenu = document.getElementById('nav_menu');
let navList = document.getElementById('nav_list');
let closeButton = document.getElementById('nav_close');
let navToggle = document.getElementById('navToggle');
const header = document.getElementById('header');
const themeButton = document.getElementById('theme-button');
const btns = document.querySelectorAll(".question-btn");
const scrollUp = document.getElementById('scroll-up');
const addToCartBtn = document.querySelectorAll(".add-cart");
const totalCount = document.querySelector("#total__counter");
const totalCost = document.querySelector(".total__cost");

const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';
let cartItems=[];
// selected in storage
const selectedTheme = localStorage.getItem('selected-theme');
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
window.addEventListener('scroll', function () {
  scrollUp.classList.toggle("show-scroll",window.scrollY >= 400)
})
/*scroll reveal*/
const setScroll=() => {
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

}
setScroll();
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

const changeTheme=(selectedTheme) => {
  if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}
}
changeTheme();

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const cartCounter = document.querySelector(".cart__counter");
const cartDOM = document.querySelector(".cart__items");
cartCounter.addEventListener("click", () => {
  cartDOM.classList.toggle("active");
})



addToCartBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let parentElement = btn.parentElement.parentElement;
    const product = {
      id: parentElement.querySelector("#product__id").value,
      name: parentElement.querySelector(".product__name").innerText,
      image: parentElement.querySelector("#image").getAttribute("src"),
      price: parentElement.querySelector(".product__price").innerText
        .replace("$", ""),
      quantity: 1

    }
    //console.log(product);
    let isIncart = cartItems.filter(item => item.id === product.id).length > 0;

    if (!isIncart) {
      addItemToTheDOM(product);
     
    } else {
      alert("Product Already in the Cart");
      return;
    }
       const cartDOMItems = document.querySelectorAll(".box");
    cartDOMItems.forEach(individualItem => {
      //console.log(individualItem);
      if (individualItem.querySelectorAll('#product__id').value === product.id) {
        increaseItem(individualItem, product);
        
      }
     
    })

  
    cartItems.push(product);
    // console.log(isIncart);
      //  console.log(parentElement.querySelector('.product__name'))
      calculateTotal();
  });
  


     
});

function addItemToTheDOM(product) {
  cartDOM.insertAdjacentHTML("afterbegin",
  `
    <div class="box">
                 
                 <input type="hidden" name="" id="product__id" value="${product.id}" />
                <img src="${product.image}" alt="" id="image"/>
                  <h3 class="product__name">${product.name}</h3>
                     <a class="btn__small" action="decrease">&minus;</a>
                      <h4 class="product__quantity">${product.quantity}</h4>
                      <a class="btn__small" action="increase">&plus;</a>
                <div>
                    
                    <span class="product__price">$ ${product.price}</span>
                
                           
                     
                            
                       
                </div>

            </div>
    `
     


  )
}

function increaseItem(individualItem, product){

    individualItem.querySelector("[action='increase']").addEventListener('click', () => {
        // Actual Array
        cartItems.forEach(لاخء=> {
            if (cartItem.id === product.id) {
                individualItem.querySelector(".product__quantity").innerText = ++cartItem.quantity;
                calculateTotal();     
                   
            }
        })
    });

}


function calculateTotal(){
  let total=0;
  cartItems.forEach(item=>{
    total+=item.quantity * item.price;
  });
   totalCost.innerText= total;
    totalCount.innerText = cartItems.length;
}

function increaseItems(individualItem, product) {
  individualItem.querySelector("[action='increase']").addEventListener('click', () => {
    cartItems.forEach(cartItem => {
      if (cartItem.id === product.id) {
        individualItem.querySelector('.product__quantity').innerText = ++cartItem.quantity;
        calculateTotal();
       }
     })
   })
 }
