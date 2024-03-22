

/*=============== NAVIGATION CONTROLS ===============*/

const navMenu = document.getElementById('nav--menu'),
navToggle = document.getElementById('nav--open'),
navClose = document.getElementById('nav--close')

if(navToggle){
navToggle.addEventListener('click', () =>{
navMenu.classList.add('show-nav')
})
}

if(navClose){
navClose.addEventListener('click', () =>{
navMenu.classList.remove('show-nav')
})
}

const navlink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
const navMenu = document.getElementById('nav--menu')
navMenu.classList.remove('show-nav')
}
navlink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
  
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        :header.classList.remove('blur-header')
  }
  
  window.addEventListener('scroll' , blurHeader)

  /*=============== HOME PARALLAX ===============*/
// document.addEventListener('DOMContentLoaded', function () {
// 	// Initialize Rellax
// 	var rellax = new Rellax('.home-background-img');

// });

const homeImg = document.getElementsByClassName('home-img-container')

var image = document.getElementById('home-bkgr-img')

new simpleParallax(homeImg, {
  // scale: 1.5,
});
