

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
  
  const linkProducts = document.querySelectorAll('.project-selection-item'); // Select the filter items
  
  linkProducts.forEach(l => l.addEventListener('click', activeProduct)); // Add event listeners to each filter item
  
  function activeProduct() {
    linkProducts.forEach(l => l.classList.remove('active-featured')); // Remove bold from all filter items
    this.classList.add('active-featured'); // Add bold to the clicked filter item
  
    // This part remains the same, but make sure 'activeFeatured' function is correctly defined
    // linkProducts.forEach(l=> l.addEventListener('click', activeFeatured))
  }