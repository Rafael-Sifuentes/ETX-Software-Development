

// SWIPER JS

var swiper = new Swiper('.featured-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 800,
    loop: true,
  
      autoplay: {
          delay: 2000,
          disableOnInteraction: true,
        },
  
      navigation: {
        nextEl: '.featured-next',
        prevEl: '.featured-prev',
    },
    
       breakpoints: {

        744:{
            slidesPerView: 2,
        },
  
         1080: {
           slidesPerView: 3,
         },
     },
  });


// MENU SELECTION / FILTER JS
let container = document.querySelector('.menu');
var mixer;

if (container) {
    mixer = mixitup('.menu', {
      selectors: {
        target: '.menu-catagory'
      },
      animation: {
        duration: 400
      }
    });
  }
  
  const linkProducts = document.querySelectorAll('.menu-selection-item'); 
  
  linkProducts.forEach(l => l.addEventListener('click', activeProduct)); 
  
  function activeProduct() {
    linkProducts.forEach(l => l.classList.remove('active-featured')); 
    this.classList.add('active-featured'); 
  }



// ALL ONCLICK FUNCTION

function callNumber() {
  var phoneNumber = "2815478543";
  window.location.href = "tel:" + phoneNumber;
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' }); 
  }
}


// GOOGLE MAPS JS
