

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


const images = ['assets/IMG/showcase-img-1.png', 'assets/IMG/showcase-img-2.png', 'assets/IMG/showcase-img-3.png', 'assets/IMG/showcase-img-4.png', 'assets/IMG/showcase-img-5.png'];
let currentImageIndex = 0;

const titleElement = document.getElementById('showcase-title');
const descriptionElement = document.getElementById('showcase-description');


const galleryImg = document.getElementById('showcase-img');
const imgTag = galleryImg.querySelector('img');

const progressBar = document.getElementById('progress');
const progressContainer = document.getElementById('progress-bar');

function updateProgressBar() {
    const containerWidth = progressContainer.offsetWidth;
    const progressWidth = containerWidth * 0.2; // Set to 10% of the container width
    const stepWidth = (containerWidth - progressWidth) / (images.length - 1);

    progressBar.style.width = `${progressWidth}px`;
    progressBar.style.transform = `translateX(${currentImageIndex * stepWidth}px)`;
}

function showImage(index) {
    imgTag.style.opacity = 0;
    setTimeout(() => {
        imgTag.src = images[index];
        imgTag.style.opacity = 1;
        updateProgressBar();

		// Update title and description
        const titles = ['Project 1 Title', 'Project 2 Title', 'Project 3 Title', 'Project 4 Title', 'Project 5 Title'];
        const descriptions = ['Description for Project 1', 'Description for Project 2', 'Description for Project 3', 'Description for Project 4', 'Description for Project 5'];

        titleElement.textContent = titles[index];
        descriptionElement.textContent = descriptions[index];
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

// CSS transition event listener
progressBar.addEventListener('transitionend', () => {
    progressBar.style.transition = 'none'; // Reset transition property
});

// Add transition class to trigger the animation
setTimeout(() => {
    progressBar.style.transition = 'width 0.3s ease'; // Set transition property
}, 0);




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