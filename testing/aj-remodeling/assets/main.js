function hideHeaderOnScroll() {
  let prevScrollPos = window.pageYOffset;
  const header = document.querySelector('header'); 

  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      header.style.top = '0'; 
    } else {
      header.style.top = '-100px'; 
    }

    prevScrollPos = currentScrollPos;
  });
}

hideHeaderOnScroll();

var swiper = new Swiper('.services-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 800,
    loop: false,
  
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
  
      navigation: {
        nextEl: '.review-next',
        prevEl: '.review-prev',
    },
    
       breakpoints: {
  
         1000: {
           slidesPerView: 3,
         },
     },
  });

  var gallerySwiper = new Swiper('.gallery-swiper', {
    
    slidesPerView: 1,
    spaceBetween: 24,
    speed : 800,
    loop: true,
    centeredSlides: true,

    navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev'
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
      },

    breakpoints: {

        1000:{
            slidesPerView : 3
        },
    }
  })




  let container = document.querySelector('.project-card-container');
  var mixer;
  
  if (container) {
    mixer = mixitup('.project-card-container', {
      selectors: {
        target: '.project-card'
      },
      animation: {
        duration: 300
      }
    });
  }
  
  const linkProducts = document.querySelectorAll('.project-selection-item'); 
  
  linkProducts.forEach(l => l.addEventListener('click', activeProduct)); 
  
  function activeProduct() {
    linkProducts.forEach(l => l.classList.remove('active-featured')); 
    this.classList.add('active-featured'); 
  }


/*=============== SCROLL REVEAL JS ===============*/
const sr = ScrollReveal({
	distance: '50px',
	duration: 1500,
  })
  
  sr.reveal(`.section-title, .home-title`,{
	origin: 'bottom',
  })

  sr.reveal(`.section-subtitle, .home-subtitle`,{
    origin: 'bottom',
    delay: 400,
    interval: 350,
    })

  sr.reveal(`.services-cta-list-item`,{
    origin: 'left',
    delay: 400,
    interval: 350,
    })