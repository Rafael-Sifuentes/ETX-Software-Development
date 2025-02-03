

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

