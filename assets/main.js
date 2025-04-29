// Other utility functions
function callNumber() {
  var phoneNumber = "9362218751";
  window.location.href = "tel:" + phoneNumber;
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

window.openCalendly = () => { window.open('https://calendly.com/rafaelsifuentes-etxsoftware/30min', '_blank'); };


document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector('.navigation');
  const navToggleBtn = document.getElementById('nav-toggle-btn');
  const navListContainer = document.querySelector('.nav-list-container');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const desktopLinks = document.querySelectorAll('.desktop-nav-list a');
  const sections = document.querySelectorAll('header.section, section.section');

  let lastScrollTop = 0;
  const desktopBreakpoint = 1100; // match your CSS breakpoint

  // 1. Toggle Mobile Menu
  navToggleBtn.addEventListener('click', () => {
    navToggleBtn.classList.toggle('toggled');
    navListContainer.classList.toggle('toggled');
});

// 2. Close Mobile Menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggleBtn.classList.remove('toggled');
        navListContainer.classList.remove('toggled');

        // Ensure highlight is applied after closing the menu
        highlightNavLink();
    });
});

// 3. Highlight Active Link Based on Scroll
function highlightNavLink() {
    let scrollPos = window.scrollY + 200;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            // Remove active class from all links
            mobileLinks.forEach(link => link.classList.remove('active'));
            desktopLinks.forEach(link => link.classList.remove('active'));

            // Add active class to the corresponding links
            mobileLinks.forEach(link => {
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
            desktopLinks.forEach(link => {
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// 4. Hide/Show Nav on Scroll (Desktop Only)
function handleNavVisibility() {
    const currentScroll = window.scrollY;

    if (window.innerWidth > desktopBreakpoint) {
        if (currentScroll > lastScrollTop && currentScroll > 100) {
            // Scrolling down
            nav.style.transform = 'translateY(-20%)',
            nav.style.opacity = '0';
        } else {
            // Scrolling up
            nav.style.transform = 'translateY(0)',
            nav.style.opacity = '1';
        }
    } else {
        // Reset nav transform on mobile (don't hide)
        nav.style.transform = 'translateY(0)';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Avoid negative scroll
}

window.addEventListener('scroll', () => {
    highlightNavLink();
    handleNavVisibility();
});

window.addEventListener('load', () => {
    highlightNavLink();
});
window.addEventListener('resize', () => {
    handleNavVisibility();
});

  // SCROLL REVEAL JS
  const sr = ScrollReveal({
    distance: '80px',
    duration: 1400,
  });

  sr.reveal(`.section-title, .section-accent, .home-subtitle, .contact-blank-squr`, {
    origin: 'top',
    interval: 600,
    delay: 100,
  });

  sr.reveal(`.about-list-item`, {
    origin: 'top',
    interval: 250,
  });

  sr.reveal(`.right`, {
    origin: 'right',
    interval: 250,
    delay: 100,
  });

  sr.reveal(`.left`, {
    origin: 'left',
    interval: 250,
    delay: 100,
  });

  sr.reveal(`.bottom`, {
    origin: 'bottom',
    interval: 250,
  });

  // Split into words instead of lines
  const subtitle = new SplitType(".services-subtitle", {
    types: "words",
    wordClass: "word-child"
  });

  // Timeline for scroll-driven word reveal
  gsap.timeline({
    scrollTrigger: {
      trigger: ".services-subtitle",
      start: "top center",
      end: "+=1000",
      scrub: true,
      pin: true,
      markers: false
    }
  })
  .from(".word-child", {
    opacity: 0,
    y: 40,
    stagger: 0.1,
    ease: "power2.out"
  });

  gsap.to(".scroll-indicator", {
    opacity: 0,
    y: -20,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".services-subtitle",
      start: "top center",
      once: true
    }
  });

  // Split text into words
  const aboutText = new SplitType('.about-progress-text', { types: 'words' });

  // Set initial styles
  gsap.set('.about-progress-text .word', {
    overflow: 'hidden',
    display: 'inline-block',
    position: 'relative',
    opacity: 0,
  });

  // Animate words filling and fading in
  gsap.fromTo('.about-progress-text .word', {
    clipPath: 'inset(0 100% 0 0)',
    opacity: 0,
  }, {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    ease: 'power2.out',
    stagger: 0.05,
    scrollTrigger: {
      trigger: '.about-progress-text',
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
    },
  });

  // Split the word "Bold" into individual letters for wave effect
  const waveSplit = new SplitType('.wave-trigger', { types: 'chars' });

  gsap.set('.wave-trigger .char', {
    display: 'inline-block',
    y: 0,
    color: '#fdf8ff',
  });

  const waveTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.wave-trigger',
      start: 'center center',
      toggleActions: 'play none none none',
      once: true,
    }
  });

  waveTimeline.to('.wave-trigger .char', {
    y: -20,
    color: '#AE44D5',
    stagger: {
      each: 0.07,
      from: 'start',
      ease: 'sine.inOut',
    },
    duration: 0.4,
    ease: 'power2.out',
  })
  .to('.wave-trigger .char', {
    y: 0,
    color: '#fff',
    stagger: {
      each: 0.07,
      from: 'start',
      ease: 'sine.inOut',
    },
    duration: 0.4,
    ease: 'power2.inOut',
  }, "+=0.1");

  // Split "Level" into individual characters for step effect
  const stepSplit = new SplitType('.step-animate', { types: 'chars' });

  gsap.set('.step-animate .char', {
    display: 'inline-block',
    y: 0,
    color: '#fff',
  });

  const stepTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.step-animate',
      start: 'center bottom',
      toggleActions: 'play none none none',
      once: true,
    }
  });

  // Step-up effect: staggered start, same y destination
  stepTimeline.to('.step-animate .char', {
    y: -20,
    duration: 0.4,
    ease: 'power2.out',
    stagger: 0.05,
    color: '#000',
  })

  // Hold position for 1.2s and then drop all letters at once
  .to('.step-animate .char', {
    delay: 1.2,
    y: 0,
    duration: 0.4,
    ease: 'power2.inOut',
  });



  function toggleServiceCardModal() {
    const serviceCards = document.querySelectorAll('.main-service-card, .service-card, .portfolio-card, .about-list-item');
    serviceCards.forEach(card => {
      const toggleButton = card.querySelector('.toggle-btn');
      const modal = card.querySelector('.main-service-card-modal, .service-card-modal, .portfolio-card-modal, .about-list-item-modal');
      if (toggleButton && modal) {
        toggleButton.addEventListener('click', () => {
          modal.classList.toggle('toggled');
          toggleButton.classList.toggle('toggled')
          card.classList.toggle('toggled')
        });
      }
    });
  }

  // Call the function to enable the toggling functionality
  toggleServiceCardModal();

  var gallerySwiper = new Swiper('.service-cards-container', {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 500,
    loop: false,
    centeredSlide: true,
    parallax: true,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    breakpoints: {
      744: {
        slidesPerView: 2,
      },
    },
  });
});
