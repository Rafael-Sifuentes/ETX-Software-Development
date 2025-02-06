
function callNumber() {
    var phoneNumber = "9366524468";
    window.location.href = "tel:" + phoneNumber;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); 
    }
}

// GALLERY SWIPER JS CONTROLS
var swiper = new Swiper('.gallery-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 800,
    loop: true,
  
     autoplay: {
         delay: 2000,
         disableOnInteraction: true,
       },
  
      navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
    },
    
       breakpoints: {

        744:{
            slidesPerView: 3,
            centeredSlides: true,
        },
     },
  });


// SCROLL REVEAL JS
const sr = ScrollReveal({
    distance: '80px',
    duration: 2200,
  })
  
  sr.reveal(`.section-title, .home-title`,{
    origin: 'top',
  })
  
  sr.reveal(`.section-subtitle, .home-subtitle, .p-text, .home-img, .button p`, {
    origin: 'top',
    delay: 400,
    interval: 300,
  })

  sr.reveal(`.section-accent` , {
    origin: 'left',
    delay: 300,
  })

  sr.reveal(`.service-item-info` , {
    origin: 'bottom',
    interval: 200,
  })