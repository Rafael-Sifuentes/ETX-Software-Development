
// PARALLAX EFFECT JS
document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
});  

gsap.to(".home-background-container", {
  y: "300px",
  scrollTrigger: {
      trigger: "#home",
      start: "top top",
      end : "bottom top",
      scrub: true
  }
})

// HIDE NAV ON SCROLL
let isNavOpen = false;

function hideHeaderOnScroll() {
  let prevScrollPos = window.pageYOffset;
  const header = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (!isNavOpen) { 
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        header.style.top = '0';
      } else {
        header.style.top = '-100px';
      }

      prevScrollPos = currentScrollPos;
    }
  });
}

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

function toggleNav(){
  const navPage =  document.querySelector('.nav-page')
  const toggleBtn = document.querySelector('.nav-button')
  navPage.classList.toggle('is-active')
  toggleBtn.classList.toggle('rotate')
  isNavOpen = !isNavOpen
}

hideHeaderOnScroll();

function callNumber() {
  var phoneNumber = "2815478543";
  window.location.href = "tel:" + phoneNumber;
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' }); 

    if (isNavOpen) { 
      toggleNav(); // Call toggleNav() to close the nav
    }
  }
}

function goToUber(){
  var url = 'https://www.ubereats.com/store/marthas-taqueria/lqVLEDzOWLOkc3gFXcLGfQ?diningMode=PICKUP&ps=1&sc=SEARCH_SUGGESTION'
  window.open(url, '_blank')
}

function goToDoor(){
  var url = 'https://www.doordash.com/store/martha%E2%80%99s-tortillas-hockley-24861321/'
  window.open(url, '_blank')
}

function goToGrub(){
  var url = 'https://www.grubhub.com/'
  window.open(url, '_blank')
}


// SCROLL REVEAL JS
const sr = ScrollReveal({
  distance: '50px',
  duration: 2000,
})

sr.reveal(`.section-title, .home-title`,{
  origin: 'top',
})

sr.reveal(`.section-subtitle, .home-subtitle, .home-logo-container`, {
  origin: 'top',
  delay: 400,
  interval: 350,
})

sr.reveal(`.cta-img`, {
  origin: 'bottom',
  delay: 700,
})

sr.reveal(`.move-button`, {
  origin: 'bottom',
  delay: 400,
  interval: 200,
})