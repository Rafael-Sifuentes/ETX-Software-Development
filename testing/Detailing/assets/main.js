gsap.registerPlugin(ScrollTrigger);

  gsap.to(".home-background-img", {
    scale: 1.5, // Adjust the final scale as needed
    duration: 1, // Duration of the scaling animation (can be short)
    ease: "none", // Linear scaling
    scrollTrigger: {
      trigger: ".home", // Trigger the animation when the .home section enters the viewport
      start: "top top", // Start the animation when the top of the trigger hits the top of the viewport
      end: "bottom top", // End the animation when the bottom of the trigger hits the top of the viewport
      scrub: true, // Smoothly animate based on scroll position
    }
  });

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



function openFacebook(){
  var faceUrl = "https://www.facebook.com/Gabriel8aa"
  window.open(faceUrl, '_blank')
}

function openReview() {
  const url = "https://www.google.com/search?q=detailers+in+jacksonville+texas&sca_esv=4b1e09beaa1370b6&sxsrf=AHTn8zonjBuLQcaycPhM3-WW3ZVNjgD7fg%3A1740620808212&source=hp&ei=CMS_Z8DgB7Hap84P8qTf0Ao&iflsig=ACkRmUkAAAAAZ7_SGBFrhxJsWWBaQv7Oy4Gr1G3fxHvF&ved=0ahUKEwjAhNTn3eKLAxUx7ckDHXLSF6oQ4dUDCBo&uact=5&oq=detailers+in+jacksonville+texas&gs_lp=Egdnd3Mtd2l6Ih9kZXRhaWxlcnMgaW4gamFja3NvbnZpbGxlIHRleGFzMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRigATIFECEYqwJIuG9QAFiAbXAJeACQAQGYAfMCoAHKK6oBCDEuMzQuMi4yuAEDyAEA-AEBmAIvoALMK8ICBBAjGCfCAgoQIxiABBgnGIoFwgIIEC4YgAQYsQPCAggQABiABBixA8ICCxAAGIAEGLEDGIMBwgIKEAAYgAQYRhj_AcICBRAAGIAEwgITEC4YgAQYsQMY0QMYgwEYxwEYCsICEBAAGIAEGLEDGIMBGMkDGArCAgoQABiABBiSAxgKwgINEAAYgAQYsQMYgwEYCsICBxAAGIAEGArCAgoQABiABBixAxgKwgINEC4YgAQYxwEYChivAcICDRAuGIAEGNEDGMcBGArCAgcQABiABBgNwgIMEAAYgAQYDRhGGP8BwgIHEC4YgAQYCsICCxAuGIAEGLEDGIMBwgILEC4YgAQYxwEYrwHCAgsQLhiABBjRAxjHAcICBxAjGLECGCfCAgUQLhiABMICBhAAGBYYHsICCxAAGIAEGIYDGIoFwgIFEAAY7wXCAggQABiABBiiBMICBRAhGJ8FmAMAkgcJMTAuMzMuMi4yoAejugI&sclient=gws-wiz#vhid=/g/11sp7pm1nq&vssid=lcl"; 
  window.open(url, '_blank');
}

// GALLERY SWIPER JS CONTROLS
var swiper = new Swiper('.reviews-frame-two', {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 600,
    loop: true,
  
     autoplay: {
         delay: 2000,
         disableOnInteraction: true,
       },
  
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    
  });

var gallerySwiper = new Swiper('.gallery-swiper-container', {

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
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },

    breakpoints: {
      744:{
        slidesPerView: 2,
      },

      1440:{
        centeredSlide: true,
        slidesPerView: 4,
      }
    }

});



  function toggleQuestion(questionElement) {
    const listItem = questionElement.closest('.services-list-item'); // Find the parent list item
    const listInfo = listItem.querySelector('.list-info'); // Find the corresponding list-info

    // Close any other open list-info elements
    const allListItems = document.querySelectorAll('.services-list-item');
    allListItems.forEach(item => {
        if (item !== listItem) { // Exclude the current item
            const otherListInfo = item.querySelector('.list-info');
            const otherQuestionBtn = item.querySelector('.services-toggle-btn');

            if (otherListInfo && otherQuestionBtn && otherQuestionBtn.classList.contains('is-active')) {
                otherListInfo.classList.remove('is-active');
                otherQuestionBtn.classList.remove('is-active');
            }
        }
    });

    // Toggle the current list-info and button
    questionElement.classList.toggle("is-active");
    if (listInfo) { // Check if listInfo exists (in case of error)
        listInfo.classList.toggle("is-active");
    }

}

const container = document.querySelector('.effect-container');
const cursor = document.querySelector('.services-toggle-btn');
let mouseMoveListener; // Store the listener function

function centerCursor() {
    gsap.to(cursor, { x: 0, y: 0, duration: 0.4, ease: "power2.out" });
}

container.addEventListener('mouseenter', () => {
    // Add the mousemove listener ONLY ONCE
    mouseMoveListener = (e) => { // Store the function in mouseMoveListener
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(cursor, { x: x, y: y, duration: 0.4, ease: "power1.out" });
    };
    container.addEventListener('mousemove', mouseMoveListener);
});

container.addEventListener('mouseleave', () => {
    // Remove the specific mousemove listener
    container.removeEventListener('mousemove', mouseMoveListener);
    mouseMoveListener = null; // Important: Reset the variable
    centerCursor();
});

centerCursor();



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