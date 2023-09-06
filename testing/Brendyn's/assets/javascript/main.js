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
var swiper = new Swiper(".featured__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
    spaceBetween: 22,
    coverflowEffect: {
      rotate: 20,
      slideShadows: true,
      depth: 100,
    },

    
  });


/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.menu__container', {
  selectors: {
      target: '.menu__item'
  },
  animation: {
      duration: 300
  }
});


/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//   distance: '60px',
//   duration: 2800,
// })

// sr.reveal(`.home__subtitle, .home__title, .home__description, .home__location, .nav__logo`,{
//   origin: 'top',
//   interval: 100,
// })

// sr.reveal(`.section__subtitle, .section__title, .home__titles, .nav__logo`,{
//   origin: 'top',
//   interval: 100,
// })

// sr.reveal(`.home__location, .home__ctas, .location__open, .nav__menu`,{
//   origin: 'bottom',
//   interval: 120,
// })

// sr.reveal(`.home__description, .location__description, .info__title, .info__description`,{
//   origin: 'left',
//   interval: 120,
// })

// sr.reveal(`.location__button`,{
//   origin: 'right',
//   interval: 120,
// })