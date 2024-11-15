
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

function goToUber(){
  var url = 'https://www.ubereats.com/feed?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlVTJTIwUG9zdCUyME9mZmljZSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmY5ODkzODY2LWNiNGUtZjRjYi02ZmE4LTg0ZjM5MGRkZTZjYiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBMzAuMDI1NzM4MyUyQyUyMmxvbmdpdHVkZSUyMiUzQS05NS44NDU4NDI3JTdE'
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

sr.reveal(`.order-button`, {
  origin: 'bottom',
  delay: 400,
  interval: 200,
})