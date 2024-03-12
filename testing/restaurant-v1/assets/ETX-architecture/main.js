
/*=============== NAVIGATION CONTROLS ===============*/

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



/*=============== GALLERY SWIPER JS ===============*/
var gallerySwiper = new Swiper(".featured-swiper-container",{

    // centeredSlides: true,
    loop: false,
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 1000,
  
    //   autoplay: {
    //       delay: 2000,
    //       disableOnInteraction: true,
    //   },
  
  
    //   breakpoints: {
    //       600: {
    //           slidesPerView: 2,
    //           spaceBetween: 32,
    //       },
  
    //       1000: {
    //         slidesPerView: 3,
    //       },
  
    //       1440: {
    //         slidesPerView: 4,
    //       },
    //   },
  })