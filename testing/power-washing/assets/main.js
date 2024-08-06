

var swiper = new Swiper('.services-container', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,

//     navigation: {
//       nextEl: '.gallery-next',
//       prevEl: '.gallery-prev',
//   },

     autoplay: {
         delay: 1800,
         disableOnInteraction: true,
       },
    
      breakpoints: {
        600: {
            slidesPerView: 2,
        },

        1000: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper('.gallery-container', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,

//     navigation: {
//       nextEl: '.gallery-next',
//       prevEl: '.gallery-prev',
//   },

   autoplay: {
       delay: 1800,
       disableOnInteraction: true,
     },
  
    breakpoints: {
      600: {
          slidesPerView: 2,
      },
  },
});



/*=============== SCROLL REVEAL JS ===============*/
const sr = ScrollReveal({
	distance: '50px',
	duration: 2000,
  })
  
  sr.reveal(`.top`,{
	origin: 'top',
  })

  sr.reveal(`.bottom`,{
	origin: 'bottom',
  })

  sr.reveal(`.bottom-delayed`,{
    origin: 'bottom',
    delay: 400,
    interval: 350,

  })

  sr.reveal(`.left`,{
    origin: 'left',
  })

  sr.reveal(`.left-delayed`,{
    origin: 'left',
    delay: 400,
    interval: 350,

  })

  sr.reveal(`.right`,{
    origin: 'right',
  })
  