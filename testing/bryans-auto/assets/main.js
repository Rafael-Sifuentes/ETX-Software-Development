

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
    loop: true,
    centeredSlide: true,
  
      navigation: {
         nextEl: '.swiper-next',
         prevEl: '.swiper-prev',
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

var aboutSwiper = new Swiper('.about-frame-two', {

  slidesPerView: 1,
    spaceBetween: 24,
    speed: 600,
    loop: true,
    centeredSlide: true,

    navigation: {
      nextEl: '.about-next',
      prevEl: '.about-prev',
    },

    breakpoints: {
      744:{
        slidesPerView: 2,
      },

      1440:{
        slidesPerView: 3,
        centeredSlide: false,

      }
    }
})


// SCROLL REVEAL JS
const sr = ScrollReveal({
  distance: '100px',
  duration: 2500,
})

sr.reveal(``,{
  origin: 'top',
  interval: 450,
})

sr.reveal(``,{
  origin: 'bottom',
  interval: 450,
})

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function (e) {
        // Prevent double-toggling when clicking the button itself
        if (e.target.closest('.service-toggle-btn')) return;

        const modal = this.querySelector('.service-card-modal');
        const toggleBtn = this.querySelector('.service-toggle-btn');
        const icon = toggleBtn.querySelector('i');

        this.classList.toggle('toggled');
        modal.classList.toggle('toggled');
        toggleBtn.classList.toggle('toggled');
        icon.classList.toggle('toggled');
    });

    // Optional: add toggle for just the button too
    card.querySelector('.service-toggle-btn').addEventListener('click', function (e) {
        e.stopPropagation(); // prevent bubbling up to the card

        const card = this.closest('.service-card');
        const modal = card.querySelector('.service-card-modal');
        const icon = this.querySelector('i');

        card.classList.toggle('toggled');
        modal.classList.toggle('toggled');
        this.classList.toggle('toggled');
        icon.classList.toggle('toggled');
    });
});


document.querySelectorAll('.gallery-swiper-card').forEach(card => {

  card.addEventListener('click', function (e) {

      if (e.target.closest('.swiper-card-toggle')) return;

      const modal = this.querySelector('.swiper-imgs-container');
      const toggleBtn = this.querySelector('.swiper-card-toggle'); // This gets the toggle button related to the card

      // Make sure modal and toggleBtn exist before toggling classes
      if (modal) {
          modal.classList.toggle('toggled');
      } else {
          console.warn('Modal element not found for card:', this);
      }

      if (toggleBtn) {
          toggleBtn.classList.toggle('toggled');
          // Also toggle 'toggled' class on the card itself when the main card area is clicked
          this.classList.toggle('toggled'); 
      } else {
          console.warn('Toggle button not found for card:', this);
      }
  });

  // This listener is for the specific toggle button inside each card
  const specificToggleBtn = card.querySelector('.swiper-card-toggle');
  if (specificToggleBtn) { // Add a check to ensure the toggle button exists
      specificToggleBtn.addEventListener('click', function (e) {
          e.stopPropagation(); // Prevent the card's click listener from firing

          // 'this' here directly refers to the specificToggleBtn that was clicked
          this.classList.toggle('toggled');

          // Get the parent .gallery-swiper-card and toggle its 'toggled' class
          const parentCard = this.closest('.gallery-swiper-card');
          if (parentCard) {
              parentCard.classList.toggle('toggled');
          }

      });
  } else {
      console.warn('Toggle button with class .swiper-card-toggle not found within:', card);
  }
});


// MAPBOX OBJECT JS
// Replace with your actual Mapbox Public Access Token
mapboxgl.accessToken = 'pk.eyJ1IjoicmFmYWVsLXNpZiIsImEiOiJjbWM4cm1qMGcwenRwMnFwd2N1NWEyYzR3In0.qshipJ89JZAIWOhZakaBGA'; 

const map = new mapboxgl.Map({
    container: 'map', // The ID of the HTML element where the map will be embedded
    style: 'mapbox://styles/mapbox/streets-v12', // Your map style URL (e.g., streets, light, dark, satellite)
    center: [-94.71788, 31.35508], // [longitude, latitude] for Aldine, Texas
    zoom: 16, // Starting zoom level
    padding: { top: 50, bottom: 50, left: 50, right: 50 } 
});

// Optional: Add navigation controls (zoom in/out, compass)
map.addControl(new mapboxgl.NavigationControl());

// Optional: Add a marker for the shop's location
new mapboxgl.Marker({
  color: '#2F27CE' // Set the pin color here!
})
    .setLngLat([-94.71788, 31.35508]) // [longitude, latitude]
    .addTo(map);

// Optional: You can add event listeners, e.g., when the map loads
map.on('load', () => {
    console.log('Map loaded successfully!');
});