var swiper = new Swiper('.gallery-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    navigation: {
      nextEl: '.gallery-next',
      prevEl: '.gallery-prev',
  },

    // autoplay: {
    //     delay: 1800,
    //     disableOnInteraction: true,
    //   },
    
      breakpoints: {
        600: {
            slidesPerView: 2,
        },

        1000: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper('.features-container', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,

  navigation: {
    nextEl: '.feature-next',
    prevEl: '.feature-prev',
},

  // autoplay: {
  //     delay: 1800,
  //     disableOnInteraction: true,
  //   },
  
    breakpoints: {
      600: {
          slidesPerView: 2,
      },

      1000: {
        slidesPerView: 3,
      },
  },
});



document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
});

gsap.to(".timeline-overflow-container", {
  x: "-1884px",
  scrollTrigger: {
      trigger: "#trigger-here",
      start: "top bottom",
      end : "bottom top",
      scrub: true,
      onEnter: () => {
          document.querySelector('.sticky-container').classList.add('active');
      },
      onLeave: () => {
          document.querySelector('.sticky-container').classList.remove('active');
      },
      onEnterBack: () => {
          document.querySelector('.sticky-container').classList.add('active');
      },
      onLeaveBack: () => {
          document.querySelector('.sticky-container').classList.remove('active');
      }
  }
});