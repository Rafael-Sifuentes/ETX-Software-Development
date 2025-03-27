

function callNumber() {
    var phoneNumber = "9033399017";
    window.location.href = "tel:" + phoneNumber;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); 
    }
}

function openInsta(){
  var instaUrl = "https://www.instagram.com/gabrielsmobiledetail/"
  window.open(instaUrl, '_blank')
}

document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.service-card-component');

  serviceCards.forEach(card => {
      const toggleButton = card.querySelector('.service-card-toggle');
      const toggleIcon = card.querySelector('.service-card-toggle i');
      const cardContent = card.querySelector('.card-content');
      const cardImage = card.querySelector('.service-card-img');

      toggleButton.addEventListener('click', () => {
          cardContent.classList.toggle('expanded');

          if (cardContent.classList.contains('expanded')) {
              // Move image, rotate icon, change colors, fade out image
              cardImage.style.transform = 'translateY(100%)';
              cardImage.style.opacity = '0'; // Fade out
              toggleIcon.style.transform = 'rotate(45deg)';
              toggleButton.style.backgroundColor = 'var(--text-color-w)';
              toggleIcon.style.color = 'var(--text-color-b)';
          } else {
              // Return image, reset icon, reset colors, fade in image
              cardImage.style.transform = 'translateY(0)';
              cardImage.style.opacity = '1'; // Fade in
              toggleIcon.style.transform = 'rotate(0deg)';
              toggleButton.style.backgroundColor = 'var(--primary-color)';
              toggleIcon.style.color = 'var(--text-color-w)';
          }
      });
  });
});

var gallerySwiper = new Swiper('.gallery-container', {

  slidesPerView: 1,
    spaceBetween: 24,
    speed: 600,
    loop: true,
    centeredSlide: true,
  
     autoplay: {
         delay: 2000,
         disableOnInteraction: true,
       },
  
      navigation: {
        nextEl: '.gallery-swiper-next',
        prevEl: '.gallery-swiper-prev',
    },

    breakpoints: {
      744:{
        slidesPerView: 2,
      },

      1440:{
        centeredSlide: true,
        slidesPerView: 3,
      }
    }

});


// SCROLL REVEAL JS
const sr = ScrollReveal({
  distance: '100px',
  duration: 2500,
})

sr.reveal(`.home-title, .home-subtitle, .about-title, .reviews-title, .services-subtitle, .packages-title, .gallery-title, .contact-subtitle, .contact-title`,{
  origin: 'top',
  interval: 450,
})

sr.reveal(`.about-info-item, .about-img-container`,{
  origin: 'bottom',
  interval: 450,
})