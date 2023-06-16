

/*=============== SCROLL HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('scroll-header')
                         :header.classList.remove('scroll-header')
}

window.addEventListener('scroll' , scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*==================== SWIPER ====================*/
var swiper = new Swiper(".work__container", {

  
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    spaceBetween: 22,
    coverflowEffect: {
      rotate: 20,
      slideShadows: false,
      depth: 100,
    },

    breakpoints:{
      700: {
        slidesPerView: 2,
        spaceBetween: 20,

        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
      },
    }

    
  });



/*=============== SCROLL REVEAL JS ===============*/
const sr = ScrollReveal({
  distance: '80px',
  duration: 2800,
  // reset: true,
})

sr.reveal(`.section__subtitle, .description, .about__description`,{
  origin: 'top',
})

sr.reveal(`.section__title, .form__btn-cont, .about__icon, .about__img`,{
  origin: 'bottom',
})

sr.reveal(`.about__bkgr-text, .contact__bkgr-text, .button-wrapper-1`,{
  origin: 'left',
})

sr.reveal(`.projects__bkgr-text, .portal__bkgr-text, .button-wrapper-2`,{
  origin: 'right',
})