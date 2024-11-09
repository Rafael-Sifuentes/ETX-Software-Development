
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

function toggleQuestion(questionElement) {
    questionElement.classList.toggle("is-active");
}



// GALLERY SWIPER JS CONTROLS
var swiper = new Swiper('.gallery-swiper-container', {
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
            slidesPerView: 2,
        },
  
         1080: {
           slidesPerView: 3,
         },
     },
  });