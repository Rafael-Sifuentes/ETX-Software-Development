

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
  
    this.scrollY >= 50 ? header.classList.add('header-fill')
                        :header.classList.remove('header-fill')
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






var swiper = new Swiper('.services-box-one', {

    loop: true,
    effect: "fade",

    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
      },

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },

});

var swiper2 = new Swiper('.services-box-two', {

    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
      },

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },

});



var rellax = new Rellax('.review-header-image');




function cycleTestimonials(containerSelector, prevButtonSelector, nextButtonSelector) {
  const testimonialContainer = document.querySelector(containerSelector);
  const testimonialCards = testimonialContainer.querySelectorAll(".testemonial-card");
  const prevButton = testimonialContainer.querySelector(prevButtonSelector);
  const nextButton = testimonialContainer.querySelector(nextButtonSelector);

  let currentTestimonialIndex = 0;

  function showTestimonial(index) {
    testimonialCards.forEach((card, cardIndex) => {
      card.classList.toggle("active-card", index === cardIndex);
    });
  }

  prevButton.addEventListener("click", function() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(currentTestimonialIndex);
  });

  nextButton.addEventListener("click", function() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialCards.length;
    showTestimonial(currentTestimonialIndex);
  });

  // Show the first testimonial initially
  showTestimonial(currentTestimonialIndex);
}

// Example usage: Assuming your container has class "testemonial-container"
cycleTestimonials(".testemonial-container", "#button-prev", "#button-next");

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
    delay: 400,
    interval: 350,

  })

  sr.reveal(`.left`,{
    origin: 'left',
  })

  sr.reveal(`.right`,{
    origin: 'right',
  })
