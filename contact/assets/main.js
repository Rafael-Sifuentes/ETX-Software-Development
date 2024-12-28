// PARALLAX EFFECT JS
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
  });  
  
  gsap.to(".header-img", {
    y: "100px",
    scrollTrigger: {
        trigger: "#header-img-container",
        start: "top top",
        end : "bottom top",
        scrub: true,
    }
  })

function goToLinkOne(){
    let url = 'https://etxsoftware.com'
    window.open(url, '_blank')  
}

function goToLinkTwo(){
    let url = 'https://etxsoftware.com/#projects'
    window.open(url, '_blank')  
}



// const saveContactBtn = document.getElementById('saveContactBtn');
//         const vcardData = `BEGIN:VCARD
//         VERSION:3.0
//         N:Rafael;Sifuentes
//         FN:Rafael Sifuentes
//         ORG:ETX Software Development.
//         TITLE:Web Developer
//         TEL;TYPE=work,voice:+1-936-221-8751
//         EMAIL;TYPE=work:rafaelsifuentes@etxsoftware.com
//         END:VCARD`;

//         saveContactBtn.addEventListener('click', () => {
//             const blob = new Blob([vcardData], { type: 'text/vcard' });
//             const url = window.URL.createObjectURL(blob);
//             const a = document.createElement('a');
//             a.href = url;
//             a.download = 'contact.vcf';
//             a.click();
//             window.URL.revokeObjectURL(url);
//         });


// SCROLL REVEAL JS
const sr = ScrollReveal({
    distance: '50px',
    duration: 2000,
  })
  
  sr.reveal(`.left`,{
    origin: 'left',
    delay: 1000,
  })

  sr.reveal(`.right`,{
    origin: 'right',
    delay: 1000,
  })
  
  sr.reveal(`.button, .header-logo-container, .header-title, .header-subtitle, .header-text`, {
    origin: 'top',
    delay: 400,
    interval: 100,
  })
