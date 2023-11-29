

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle){
navToggle.addEventListener('click', () =>{
navMenu.classList.add('show-menu')
})
}

if(navClose){
navClose.addEventListener('click', () =>{
navMenu.classList.remove('show-menu')
})
}

const navlink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show-menu')
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
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	})
}

window.addEventListener('scroll', scrollActive)

/*=============== SWIPER ===============*/


var swiper = new Swiper(".about-featured-box", {
	spaceBetween: 30,
	centeredSlides: true,
	loop: true,
	autoplay: {
	  delay: 2000,
	  disableOnInteraction: true,
	},

	navigation: {
	  nextEl: ".button-next",
	  prevEl: ".button-prev",
	},
  });


var sauceSwiper = new Swiper(".sauce__container", {
	spaceBetween : 30,
	centeredSlides: true,
	loop: true,

	effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },

	navigation: {
		nextEl: ".next-sauce-btn",
	  },
})
