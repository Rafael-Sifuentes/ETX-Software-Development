
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

const orderContainer = document.getElementById("order-container")
const orderToggleOpen = document.getElementById("order-toggle-open")
const orderToggleClose = document.getElementById("order-toggle-close")

orderToggleOpen.addEventListener('click', function() {
    orderContainer.classList.add('active');
});

orderToggleClose.addEventListener('click', function() {
    orderContainer.classList.remove('active');
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