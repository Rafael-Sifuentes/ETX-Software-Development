

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

/*=============== CHANGE HOME BACKGROUND PHOTO ===============*/

// Array of photo URLs
const photos = [
    'assets/IMG/home-img.png',
    'assets/IMG/home-img-2.png',
    'assets/IMG/home-img-3.png',
    'assets/IMG/home-img-4.png',
    // Add more photo URLs as needed
  ];
  
  function switchBackground() {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * photos.length);
    // Get the random photo URL
    const randomPhoto = photos[randomIndex];
    // Set the background image of the container
    document.getElementById('home-background').style.backgroundImage = `url(${randomPhoto})`;
  }
  
  // Call the switchBackground function initially to set the initial background image
  switchBackground();

  // Call the switchBackground function every 5 seconds (5000 milliseconds)
  setInterval(switchBackground, 2500);



/*=============== SCROLL REVEAL JS ===============*/
const sr = ScrollReveal({
  distance: '80px',
  duration: 2500,
})

sr.reveal(`.section__subtitle, .button__underline, .button__fill`,{
  origin: 'top',
})

sr.reveal(`.section__title, .line, .team__member`,{
  origin: 'bottom',
})

sr.reveal(`.description, .left`,{
  origin: 'left',
})

sr.reveal(`.right`,{
  origin: 'right',
})

sr.reveal(`.`,{
  origin: 'bottom',
  distance: '150px',
  duration: 2900
})