

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

function changeGreeting() {
    const greetingText = document.getElementById("greeting-text");
    const currentTime = new Date().getHours();
  
    if (currentTime < 12) {
      greetingText.textContent = "Morning";
    } else if (currentTime < 18) {
      greetingText.textContent = "Afternoon";
    } else {
      greetingText.textContent = "Evening";
    }
  }
  
  // Call the function on page load
  changeGreeting();
  
  // (Optional) Call the function periodically to update throughout the day
  setInterval(changeGreeting, 60000); // Update every minute (60 seconds)


/*=============== HOME PARALLAX ===============*/
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Rellax
    var aboutImage1 = new Rellax('.about-parallax-1');
    var aboutImage2 = new Rellax('.about-parallax-2');

});



var swiper = new Swiper('.about-cards-container', {

    spaceBetween: 32,
    loop: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
      },

    navigation: {
        nextEl: '.about-next',
        prevEl: '.about-prev',
    },
});



/*=============== SCROLL REVEAL JS ===============*/
const sr = ScrollReveal({
	distance: '50px',
	duration: 2500,
  })
  
  sr.reveal(`.top`,{
	origin: 'top',
  })

  sr.reveal(`.bottom`,{
	origin: 'bottom',
  })

  sr.reveal(`.bottom-delayed`,{
    origin: 'bottom',
    delay: 500,
    interval: 250,

  })

  sr.reveal(`.left`,{
    origin: 'left',
  })

  sr.reveal(`.right`,{
    origin: 'right',
  })