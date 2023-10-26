

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
var swiper = new Swiper(".work__container", {

  
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    spaceBetween: 22,
    coverflowEffect: {
      rotate: 20,
      slideShadows: false,
      depth: 100,
    },

    breakpoints:{
      700: {
        slidesPerView: 2,
        spaceBetween: 20,

        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        },
      },
    }

    
  });


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_z8fni4v', 'template_h6npu5o', '#contact-form', 'on_mfnKJl6uSgNNI5')

        .then(() =>{
          contactMessage.textContent = 'Message sent succesfully ✅'
          alert("Message sent succesfully");
        }, () =>{
          contactMessage.textContent = 'Message not sent (service error) ❌'
          alert("Message not sent succesfully (service error)");
        })
}

contactForm.addEventListener('submit', sendEmail)




/*=============== SCROLL REVEAL JS ===============*/
const sr = ScrollReveal({
  distance: '80px',
  duration: 2500,
})

sr.reveal(`.section__subtitle, .description, .about__description`,{
  origin: 'top',
})

sr.reveal(`.section__title, .form__btn-cont, .about__icon, .about__img`,{
  origin: 'bottom',
})

sr.reveal(`.about__bkgr-text, .contact__bkgr-text, .button-wrapper-1`,{
  origin: 'left',
})

sr.reveal(`.projects__bkgr-text, .portal__bkgr-text, .button-wrapper-2`,{
  origin: 'right',
})

sr.reveal(`.layer-1, .layer-2`,{
  origin: 'bottom',
  distance: '150px',
  duration: 2900
})


/*=============== CLIENT PORTAL LOGIN ===============*/

// var userCredentials = {
//   tint_shoptx: {
//     password : "tint-0310",
//     htmlFile : "assets/dashboards/tintdash.html"
//   },

//   // admin2: {
//   //   password : "El mendigo",
//   //   htmlFile : "assets/dashboards/tintdash.html"
//   // },

//   // admin3: {
//   //   password : "El mendigo",
//   //   htmlFile : "assets/dashboards/tintdash.html"
//   // },
//   // Add more username-password mappings as needed
// }

// function authenticateUser(event) {
//   event.preventDefault(); // Prevent form submission

//   // Retrieve username and password from the form
//   var username = document.getElementById("id").value;
//   var password = document.getElementById("password").value;

//   // Check if the entered credentials exist in the userCredentials object
//   if (username in userCredentials && password === userCredentials[username].password) {
//     alert("Authentication successful! Redirecting to the dashboard...");

//     // Redirect to the corresponding HTML file
//     window.location.href = userCredentials[username].htmlFile;
//   } else {
//     alert("Invalid username or password. Please try again.");
//   }
// }

// var form = document.getElementById("login-form");
// form.addEventListener("submit", authenticateUser);

