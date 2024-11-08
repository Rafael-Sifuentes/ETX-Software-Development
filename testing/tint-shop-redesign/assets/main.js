
// ALL BUTTON ONCLICK FUNCTIONS


function callNumber() {
    var phoneNumber = "9366398468";
    window.location.href = "tel:" + phoneNumber;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); 
    }
}