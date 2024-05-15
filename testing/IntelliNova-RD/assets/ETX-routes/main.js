

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



var swiper = new Swiper('.home', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
      },

    navigation: {
        nextEl: '.home-next',
        prevEl: '.home-prev',
    },

    pagination: {
        el: '.home-progress-container', // Use your pagination container selector here
        clickable : true,
    },
});


var swiper = new Swiper('.services-showcase-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
      },
    
      breakpoints: {
        600: {
            slidesPerView: 2,
        },

        1000: {
          slidesPerView: 3,
        },
    },
});




/*=============== HOME PARALLAX ===============*/
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Rellax
    var aboutImage1 = new Rellax('.about-img-1');
    var aboutImage2 = new Rellax('.about-img-2');

});



// var ProjectsParallax = new Rellax('.project-card-img',{
//     wrapper: '.projects'
// })

var projectParallax = new Rellax('.project-card-img',{
    wrapper: ".projects"   
})

