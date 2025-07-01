

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

var gallerySwiper = new Swiper('.gallery-frame-two', {

  slidesPerView: 1,
    spaceBetween: 24,
    speed: 600,
    loop: false,
    centeredSlide: true,
  
     autoplay: {
         delay: 2000,
         disableOnInteraction: true,
       },

       pagination: {
        el: ".gallery-pagination",
      },
  
      navigation: {
        nextEl: '.gallery-slide-next',
        prevEl: '.gallery-slide-prev',
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

// Select all the list items
const faqItems = document.querySelectorAll('.faq-list-item');

// Function to handle the accordion logic
const toggleFaqItem = (clickedItem) => {
    // Check if the clicked item is already active
    const isItemActive = clickedItem.classList.contains('active');

    // First, close all other items
    faqItems.forEach(item => {
        // If the item is not the one we clicked, remove its active class
        if (item !== clickedItem) {
            item.classList.remove('active');
        }
    });

    // Then, toggle the active class on the clicked item
    // If it was already active, this will close it. If not, it will open it.
    if (!isItemActive) {
        clickedItem.classList.add('active');
    } else {
         clickedItem.classList.remove('active');
    }
};

// Add a click event listener to each FAQ item's header
faqItems.forEach(item => {
    const header = item.querySelector('.list-item-header');
    header.addEventListener('click', () => {
        toggleFaqItem(item);
    });
});


// SCROLL REVEAL JS
const sr = ScrollReveal({
  distance: '100px',
  duration: 2000,
})

sr.reveal(`.section-title, .home-title-img-container, .home-subtitle, .top`,{
  origin: 'top',
  interval: 250,
})

sr.reveal(`.bottom`,{
  origin: 'bottom',
  interval: 250,
})

sr.reveal(`.left`,{
  origin: 'left',
  interval: 250,
})

sr.reveal(`.right`,{
  origin: 'right',
  interval: 250,
})

