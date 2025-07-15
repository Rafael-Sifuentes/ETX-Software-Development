

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

gsap.registerPlugin(ScrollTrigger);

        // Create a timeline to sequence the animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".gallery-cards-container",
                start: "top top",
                // Increase the end value to give more scroll distance for the sequence
                end: "+=5000", 
                scrub: true,
                pin: true,
            }
        });

        // Add animations to the timeline sequentially

        tl.to(".gallery-card-6", { 
          yPercent: -100 
        });

        tl.to(".gallery-card-5", { 
          yPercent: -100 
        });

        // 1. Animate Card 4 up to reveal Card 3
        tl.to(".gallery-card-4", { 
            yPercent: -100 
        });

        // 2. Animate Card 3 up to reveal Card 2
        tl.to(".gallery-card-3", { 
            yPercent: -100 
        });

        // 3. Animate Card 2 up to reveal Card 1
        // This is the last animation in the sequence
        tl.to(".gallery-card-2", { 
            yPercent: -100 
        });


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