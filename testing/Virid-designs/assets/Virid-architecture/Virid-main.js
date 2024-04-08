

/*=============== NAVIGATION CONTROLS ===============*/

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



/*=============== HOME PARALLAX ===============*/
 document.addEventListener('DOMContentLoaded', function () {
 	// Initialize Rellax
 	var rellax = new Rellax('.home-background-img');

 });



/*=============== SCROLL REVEAL JS ===============*/
const sr = ScrollReveal({
	distance: '100px',
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

  sr.reveal(`.left-delayed`,{
    origin: 'left',
    delay: 500,
    interval: 250
  })

  sr.reveal(`.right`,{
    origin: 'right',
  })

  sr.reveal(`.left-motion`,{
    origin: 'left',
    distance: '300px',
    duration: 2000,
  })



/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_z8fni4v', 'template_1bsr0gn', '#contact-form', 'on_mfnKJl6uSgNNI5')

        .then(() =>{
          contactMessage.textContent = 'Message sent succesfully ✅'
          alert("Message sent succesfully");
        }, () =>{
          contactMessage.textContent = 'Message not sent (service error) ❌'
          alert("Message not sent succesfully (service error)");
        })
}

contactForm.addEventListener('submit', sendEmail)