

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
	  },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // breakpoints:{
    //   700: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,

    //     coverflowEffect: {
    //       rotate: 50,
    //       stretch: 0,
    //       depth: 100,
    //       modifier: 1,
    //       slideShadows: true,
    //     },
    //   },
    // }

    
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