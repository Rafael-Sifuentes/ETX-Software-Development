

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


// An array of town names
const townNames = ["Nacogdoches", "Lufkin", "Cushing", "Tyler", "Diboll"];
const locationElement = document.getElementById("location");
let currentIndex = 0;

// Function to rotate town names
function rotateTownNames() {
    locationElement.style.opacity = 0; // Fade out
    setTimeout(() => {
        locationElement.textContent = townNames[currentIndex];
        currentIndex = (currentIndex + 1) % townNames.length;
        locationElement.style.opacity = 1; // Fade in
    }, 500); // Wait for the fade-out transition to complete (0.5 seconds)
}

// Initial display of town name
rotateTownNames();

// Rotate town names every 2.5 seconds
setInterval(rotateTownNames, 2000);



const images = ['assets/IMG/gallery-img-1.png', 'assets/IMG/gallery-img-2.png', 'assets/IMG/gallery-img-3.png']; // Add your image URLs
    let currentImageIndex = 0;

	const galleryImg = document.getElementById('gallery-img');
    const imgTag = galleryImg.querySelector('img');

    function showImage(index) {
        imgTag.style.opacity = 0;
        setTimeout(() => {
            imgTag.src = images[index];
            imgTag.style.opacity = 1;
        }, 300); // Wait for the fade-out effect
    }

    document.getElementById('button-prev').addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    });

    document.getElementById('button-next').addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });

    // Initial display
    showImage(currentImageIndex);