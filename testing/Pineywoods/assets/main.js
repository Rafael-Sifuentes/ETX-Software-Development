const navMenu = document.getElementById("nav-list")
const toggleNavBtn = document.getElementById("nav-toggle-btn")

if(toggleNavBtn){
  toggleNavBtn.addEventListener('click', () =>{
    navMenu.classList.toggle('show-nav')
    toggleNavBtn.classList.toggle('rotate')
  })
}

const navlink = document.querySelectorAll('.nav-list-item')

const linkAction = () =>{
const navMenu = document.getElementById('nav-list')
    navMenu.classList.remove('show-nav')
    toggleNavBtn.classList.toggle('rotate')

}
navlink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/

const blurHeader = () => {
    const header = document.getElementById('header')
  
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        :header.classList.remove('blur-header')
  }
  
  window.addEventListener('scroll' , blurHeader)


/*=============== SCROLL SECTIONS ACTIVE ===============*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-list a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
});

gsap.to(".home-background-image", {
  y: "200px",
  scrollTrigger: {
      trigger: "#home",
      start: "top 25%",
      end : "bottom top",
      scrub: true
  }
})

gsap.to(".wcu-image", {
  y: "-100px",
  scrollTrigger: {
      trigger: "#wcu-image-trigger",
      start: "top bottom",
      end : "bottom top",
      scrub: true
  }
})


gsap.to(".faq-background-image", {
  y: "300px",
  scrollTrigger: {
      trigger: "#faq",
      start: "center",
      end : "bottom top",
      scrub: true
  }
})

gsap.to(".water", {
  height: "50%", // Target height
  ease: "none", // Smooth animation
  scrollTrigger: {
    trigger: ".reviews-container",
    start: "top 75%",  // Start animation when element hits 75% down viewport
    end: "bottom 5%",    // End when it hits 25% from the top
    scrub: true,       // Scrub the animation to sync with scroll
  }
});




var swiper = new Swiper('.reviews-container', {
  slidesPerView: 1,
  spaceBetween: 32,
  speed: 800,
  loop: true,

  autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },

    navigation: {
      nextEl: '.review-next',
      prevEl: '.review-prev',
  },
  
  //   breakpoints: {
  //     600: {
  //         slidesPerView: 2,
  //     },

  //     1000: {
  //       slidesPerView: 3,
  //     },
  // },
});





var gallerySwiper = new Swiper('.gallery-swiper-container',{

  effect: "coverflow",
  spaceBetween: 0,
  loop: true,
  speed: 1000,

      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },

      autoplay: {
          delay: 2000,
          disableOnInteraction: true,
        },

      navigation: {
          nextEl: '.gallery-next',
          prevEl: '.gallery-prev',
      },
      

      breakpoints: {

        600:{
          effect: "none",
          spaceBetween: 24,
          slidesPerView: 2,
        }
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

  sr.reveal(`.section-title`,{
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
  