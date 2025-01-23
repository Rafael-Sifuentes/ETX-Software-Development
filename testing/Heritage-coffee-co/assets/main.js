


// SCROLLING EFFECT ON HOME FEATURED LIST
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
  });  

  gsap.to(".home-list", {
    x: "-765px",
    scrollTrigger: {
        trigger: "#home-scroll-trigger",
        start: "center top",
        end : "+=500",
        scrub: true
    }
  })


// SWIPER JS
const featuredSwiper = new Swiper ('.featured-frame-one' , {

    loop: true,
    spaceBetween: 24,
    watchSlidesProgress: true,
    touchRatio: 0, 
    simulateTouch: false, 

    breakpoints: {
      744:{
        slidesPerView: 1,
      }
    }
})

const featuredThumbs = new Swiper ('.featured-frame-two', {
    
    loop: true,
    spaceBetween: 24,
    slidesPerView: 2,
    watchSlidesProgress: true,
    freeMode: true,


    thumbs: {
        swiper: featuredSwiper,
    },

    navigation: {
        nextEl: ".featured-next",
        prevEl: ".featured-prev",
      },

      breakpoints: {

        744:{
          slidesPerView: 2,
          freeMode: false,
        },

        1100:{
          slidesPerView: 3,
        }
      }
})

// MENU MIX IT UP JS
let container = document.querySelector('.menu-items-list');
  var mixer;
  
  if (container) {
    mixer = mixitup('.menu-items-list', {
      selectors: {
        target: '.component-3'
      },
      animation: {
        duration: 400
      }
    });
  }
  
  const linkProducts = document.querySelectorAll('.selection-list-item'); 
  
  linkProducts.forEach(l => l.addEventListener('click', activeProduct)); 
  
  function activeProduct() {
    linkProducts.forEach(l => l.classList.remove('active-featured')); 
    this.classList.add('active-featured'); 
  }


// SCROLL REVEAL JS
const sr = ScrollReveal({
    distance: '40px',
    duration: 2000,
  })
  
  sr.reveal(`.section-title, .home-title, .home-img`,{
    origin: 'top',
  })
  
  sr.reveal(`.section-subtitle, .home-subtitle, .p-text, .button, .home-img`, {
    origin: 'top',
    delay: 400,
    interval: 350,
  })