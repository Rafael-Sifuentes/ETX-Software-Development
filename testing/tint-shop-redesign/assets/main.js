
// ALL BUTTON ONCLICK FUNCTIONS


function callNumber() {
    var phoneNumber = "9366398468";
    window.location.href = "tel:" + phoneNumber;
}

function getDirections(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var userLatitude 
 = position.coords.latitude;
      var userLongitude = position.coords.longitude; 


      var directionsURL = "https://www.google.com/maps/dir/?api=1&origin=" + userLatitude + "," + userLongitude + "&destination=602+South+Timberland+Dr,+Lufkin,+TX";

      window.open(directionsURL, '_blank');

    }, function(error) {
      var directionsURL = "https://www.google.com/maps/dir/?api=1&destination=602+South+Timberland+Dr,+Lufkin,+TX";

      window.open(directionsURL, '_blank');

      console.error("Error getting user location:", error);
    });
  } else {
    var directionsURL = "https://www.google.com/maps/dir/?api=1&destination=602+South+Timberland+Dr,+Lufkin,+TX";

    // Open the directions in a new tab
    window.open(directionsURL, '_blank');

    console.log("Geolocation is not supported by this browser.");
  }
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

function toggleNavBtn(toggleElement){
  toggleElement.classList.toggle("is-clicked")

  const callBtn = document.getElementById("nav-call")

  callBtn.classList.toggle("active")
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


  // PARALLAX EFFECT JS
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
  });  

  gsap.to(".home-background-video", {
    y: "300px",
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end : "bottom top",
        scrub: true
    }
  })



// SCROLL REVEAL JS
const sr = ScrollReveal({
  distance: '50px',
  duration: 2000,
})

sr.reveal(`.section-title, .home-title`,{
  origin: 'top',
})

sr.reveal(`.section-subtitle, .section-header-line, .home-subtitle`, {
  origin: 'top',
  delay: 400,
  interval: 350,
})

sr.reveal(`.about-list-item, .home-list-item`, {
  origin: 'top',
  delay: 400,
  interval: 200
})