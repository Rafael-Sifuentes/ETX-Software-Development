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
var swiper = new Swiper(".card-container", {

  
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
        slidesPerView: 3,
        spaceBetween: 20,

        coverflowEffect: {
          rotate: 20,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        },
      },
    }

    
  });
