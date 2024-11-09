
// ALL BUTTON ONCLICK FUNCTIONS


function callNumber() {
    var phoneNumber = "9366398468";
    window.location.href = "tel:" + phoneNumber;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); 
    }
}



// GALLERY SWIPER JS CONTROLS
var swiper = new Swiper('.gallery-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 800,
    loop: true,
  
     autoplay: {
         delay: 2000,
         disableOnInteraction: false,
       },
  
      navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
    },
    
       breakpoints: {
  
         1000: {
           slidesPerView: 3,
         },
     },
  });