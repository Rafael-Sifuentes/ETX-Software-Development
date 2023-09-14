

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
var swiper = new Swiper(".featured__container", {

  
  effect: "cube",
    grabCursor: true,
  loop: true,
    cubeEffect: {
      shadow: true,
      innerWidth: "200px"
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  
});

  // Select the button and the map overlay element
const openButton = document.getElementById("map-open");
const mapOverlay = document.querySelector(".map-bkgr");
const closeButton = document.querySelector(".open-icon#map-close"); // Corrected selector

  // Function to toggle the map overlay visibility
function toggleMapOverlay() {
    if (mapOverlay.style.bottom === "0px") {
        mapOverlay.style.bottom = "-100%";
    } else {
        mapOverlay.style.bottom = "0px";
    }
}

// Function to close the map overlay
function closeMapOverlay() {
    mapOverlay.style.bottom = "-100%";
}

// Add click event listeners to the open and close buttons
openButton.addEventListener("click", toggleMapOverlay);
closeButton.addEventListener("click", closeMapOverlay);






/*=============== SCROLL REVEAL JS ===============*/
const sr = ScrollReveal({
	distance: '80px',
	duration: 2500,
  })
  
  sr.reveal(`.section__subtitle, .description, .top`,{
	origin: 'top',
  })

  sr.reveal(`.section__title, .bottom`,{
	origin: 'bottom',
  })

  sr.reveal(`.left`,{
    origin: 'left',
  })

  sr.reveal(`.right`,{
    origin: 'right',
  })

  sr.reveal(`.bottom-alt`,{
    origin: 'bottom',
    interval: 300,
  })
