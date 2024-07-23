
// NAVIGATION JS 

const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const header = document.getElementById('header')
const lineTwo = document.getElementById('line-2')
const lineThree = document.getElementById('line-3')


if(navToggle){
    navToggle.addEventListener('click' , () =>{
        navMenu.classList.toggle('show-menu'),
        header.classList.toggle('header-alt'),
        lineTwo.classList.toggle('move'),
        lineThree.classList.toggle('move')
    })
}

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
  });

  gsap.to(".about-img", {
    // Set the parallax effect properties here
    x: "200px", // Move the image by 100px downwards when it comes into view
    opacity: 1, // Add opacity property with an end value of 1
    ease: "none", // Optional: Set ease to "none" for a linear transition

    scrollTrigger: {
      trigger: "#container-top", // Trigger the animation when the "about" section enters the viewport
      start: "top bottom", // Start the animation when the top of the image reaches the bottom of the viewport
      end: "bottom bottom", // End the animation when the bottom of the image reaches the top of the viewport
      scrub: true // Enable scrubbing for smoother scrolling effect
    }
  });

   gsap.to(".about-img-two", {
     x: "-300px",
     opacity: 1, 
     ease: "none",
     scrollTrigger: {
         trigger: "#container-bottom",
         start: "top bottom",
         end : "bottom bottom",
         scrub: true
     }
   })

   gsap.to(".about-background-image", {
    y: "-200px",
    scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end : "bottom top",
        scrub: true
    }
  })


/*=============== SCROLL REVEAL JS ===============*/
const sr = ScrollReveal({
	distance: '50px',
	duration: 2000,
  })
  
  sr.reveal(`.top`,{
	origin: 'top',
  })

  sr.reveal(`.bottom`,{
	origin: 'bottom',
  })

  sr.reveal(`.bottom-delayed`,{
    origin: 'bottom',
    delay: 400,
    interval: 350,

  })

  sr.reveal(`.left`,{
    origin: 'left',
  })

  sr.reveal(`.left-delayed`,{
    origin: 'left',
    delay: 400,
    interval: 350,

  })

  sr.reveal(`.right`,{
    origin: 'right',
  })
  