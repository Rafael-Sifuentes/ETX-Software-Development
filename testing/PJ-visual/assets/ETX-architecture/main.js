

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

/*=============== ABOUT PARALLAX ===============*/
document.addEventListener('DOMContentLoaded', function () {
	// Initialize Rellax
	var rellax = new Rellax('.parallax-img-container-1, .parallax-img-container-2, .parallax-img-container-3');
	var imgCardInfo = new Rellax('.img-info-card')

});


var gallerySwiper = new Swiper(".gallery-swiper-container",{

    centeredSlides: true,
	loop: true,
    slidesPerView: 1,
    spaceBetween: 32,
	parallax: true,

	autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },


    breakpoints: {
        700: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
})