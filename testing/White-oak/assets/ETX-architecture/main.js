

/*=============== SCROLL HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('blur-header')
                         :header.classList.remove('blur-header')
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

/*=============== ABOUT POP-UP ===============*/

// Get references to the modal elements
const popupContainer = document.getElementById('about-popup');
const popupTitle = document.getElementById('about-title');
const popupDescription = document.getElementById('about-description');
const closeIcon = document.getElementById('close-icon');

// Get references to the buttons
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const button4 = document.getElementById('button-4');

// Define the data for each button
const bibleStudy = {
    title: 'Bible Study',
    description: 'A description about Bible Study',
};

const upcomingEvents = {
    title: 'Upcoming Events',
    description: 'A description or list about upcoming events',
};

const sundaySchool = {
    title: 'Sunday School',
    description: 'A description about Sunday School',
};

const donate = {
    title: 'Donate',
    description: 'A description about donations goes here',
};

// Function to open the popup with the specified data
function openPopup(data) {
    popupTitle.textContent = data.title;
    popupDescription.textContent = data.description;
     popupContainer.classList.add('active'); // Add the 'active' class
}

// Function to close the popup
function closePopup() {
    popupContainer.classList.remove('active'); // Remove the 'active' class
}

// Add event listeners to the buttons
button1.addEventListener('click', () => openPopup(bibleStudy));
button2.addEventListener('click', () => openPopup(upcomingEvents));
button3.addEventListener('click', () => openPopup(sundaySchool));
button4.addEventListener('click', () => openPopup(donate));

// Add event listener to close icon
closeIcon.addEventListener('click', closePopup);





/*=============== SERMON POP-UP ===============*/
const sermonItems = document.querySelectorAll('.sermon__modal');
const sermonOpens = document.querySelectorAll('.sermon__button');
const sermonCloses = document.querySelectorAll('.sermon__close');

function openSermon(index) {
    const sermonPopup = sermonItems[index].querySelector('.sermon__modal-popup');
    sermonPopup.classList.add('active');
}

function closeSermon(index) {
    const sermonPopup = sermonItems[index].querySelector('.sermon__modal-popup');
    sermonPopup.classList.remove('active');
}

sermonOpens.forEach((sermonOpen, index) => {
    sermonOpen.addEventListener('click', () => openSermon(index));
});

sermonCloses.forEach((sermonClose, index) => {
    sermonClose.addEventListener('click', () => closeSermon(index));
});


/*=============== SCROLL REVEAL JS ===============*/
const sr = ScrollReveal({
	distance: '90px',
	duration: 2500,
  })
  
  sr.reveal(`.top`,{
	origin: 'top',
  })

  sr.reveal(` .bottom`,{
	origin: 'bottom',
  })

  sr.reveal(`.left`,{
    origin: 'left',
  })

  sr.reveal(`.right`,{
    origin: 'right',
  })



