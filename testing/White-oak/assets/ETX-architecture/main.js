
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





    // Function to open the specified popup
    function openAboutPopup(popupId) {
        const popup = document.getElementById(popupId);
        popup.classList.add('about-active');
    }

    // Function to close the popup
    function closeAboutPopup(popupId) {
        const popup = document.getElementById(popupId);
        popup.classList.remove('about-active');
    }

    // Event listeners for each button
    document.getElementById('about-1').addEventListener('click', function () {
        openAboutPopup('about-popup-1');
    });

    document.getElementById('about-2').addEventListener('click', function () {
        openAboutPopup('about-popup-2');
    });

    document.getElementById('about-3').addEventListener('click', function () {
        openAboutPopup('about-popup-3');
    });

    document.getElementById('about-4').addEventListener('click', function () {
        openAboutPopup('about-popup-4');
    });

    // Event listener for the close button in each popup
    document.getElementById('about-close-1').addEventListener('click', function () {
        closeAboutPopup('about-popup-1');
    });

    document.getElementById('about-close-2').addEventListener('click', function () {
        closeAboutPopup('about-popup-2');
    });

    document.getElementById('about-close-3').addEventListener('click', function () {
        closeAboutPopup('about-popup-3');
    });

    document.getElementById('about-close-4').addEventListener('click', function () {
        closeAboutPopup('about-popup-4');
    });



    // Get all elements with class 'open-sermon'
    const openSermonButtons = document.querySelectorAll('.open-sermon');

    // Get all elements with class 'sermon-close'
    const closeSermonButtons = document.querySelectorAll('.sermon__close');

    // Get all elements with class 'sermon-popup'
    const sermonPopups = document.querySelectorAll('.sermon__popup');

    // Function to open the sermon popup
    function openSermon(button) {
        const popup = button.closest('.sermon__card').querySelector('.sermon__popup');
        popup.classList.add('sermon-active');
    }

    // Function to close the sermon popup
    function closeSermon(popup) {
        popup.classList.remove('sermon-active');
    }

    // Attach event listeners dynamically to each 'open-sermon' button
    openSermonButtons.forEach((button) => {
        button.addEventListener('click', () => openSermon(button));
    });

    // Attach event listeners dynamically to each 'sermon-close' button
    closeSermonButtons.forEach((button) => {
        button.addEventListener('click', () => closeSermon(button.closest('.sermon__popup')));
    });