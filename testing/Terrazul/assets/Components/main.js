
// Function to handle the mobile navigation interaction
function handleMobileNavClick(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get all the mobile nav list items and card info elements
    const navItems = document.querySelectorAll('.mobile-nav-list-item');
    const cardInfos = document.querySelectorAll('.mobile-nav-card-info');
    const cardContainer = document.getElementById('mobile-nav-card');

    // Determine which nav item was clicked
    const clickedNavItem = event.currentTarget;
    const clickedNavText = clickedNavItem.querySelector('p').textContent.trim().toLowerCase();

    // Find the corresponding card info element
    const targetCardInfo = document.getElementById(`mobile-card-${clickedNavText}`);

    // Check if the clicked nav item is already active
    if (targetCardInfo.classList.contains('isVisible')) {
        // Hide the currently active card info element
        targetCardInfo.classList.remove('isVisible');

        // Remove isActive class from the card container if no card info elements are visible
        setTimeout(() => {
            const anyVisible = Array.from(cardInfos).some(cardInfo => cardInfo.classList.contains('isVisible'));
            if (!anyVisible) {
                cardContainer.classList.remove('isActive');
            }
        }, 50); // Delay to match the CSS transition duration
    } else {
        // Hide all card info elements
        cardInfos.forEach(cardInfo => {
            cardInfo.classList.remove('isVisible');
        });

        // Show the relevant card info element after the container opens
        cardContainer.classList.add('isActive');
        setTimeout(() => {
            targetCardInfo.classList.add('isVisible');
        }, 400); // Delay to match the CSS transition duration
    }
}

// Add event listeners to each nav item
document.querySelectorAll('.mobile-nav-list-item').forEach(item => {
    item.addEventListener('click', handleMobileNavClick);
});


function handleDesktopNavClick(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get all the desktop nav list items and card info elements
    const navItems = document.querySelectorAll('.desktop-nav-list-item');
    const cardInfos = document.querySelectorAll('.desktop-nav-card-info');
    const cardContainer = document.getElementById('desktop-nav-card');

    // Determine which nav item was clicked
    const clickedNavItem = event.currentTarget;
    const clickedNavText = clickedNavItem.querySelector('a').textContent.trim().toLowerCase();
    const clickedNavLink = clickedNavItem.querySelector('a');
    const clickedNavIcon = clickedNavItem.querySelector('i');

    // Find the corresponding card info element
    const targetCardInfo = document.getElementById(`desktop-card-${clickedNavText}`);

    // Check if the clicked nav item is already active
    if (targetCardInfo.classList.contains('isVisible')) {
        // Hide the currently active card info element
        targetCardInfo.classList.remove('isVisible');
        clickedNavLink.classList.remove('desktop-link-active');

        // Remove desktopIsActive class from the card container if no card info elements are visible
        setTimeout(() => {
            const anyVisible = Array.from(cardInfos).some(cardInfo => cardInfo.classList.contains('isVisible'));
            if (!anyVisible) {
                cardContainer.classList.remove('desktopIsActive');
            }
        }, 300); // Delay to match the CSS transition duration
    } else {
        // Hide all card info elements and remove active class from all nav links and icons
        cardInfos.forEach(cardInfo => {
            cardInfo.classList.remove('isVisible');
        });
        navItems.forEach(navItem => {
            const navLink = navItem.querySelector('a');
            const navIcon = navItem.querySelector('i');
            navLink.classList.remove('desktop-link-active');
        });

        // Show the relevant card info element after the container opens
        cardContainer.classList.add('desktopIsActive');
        setTimeout(() => {
            targetCardInfo.classList.add('isVisible');
            clickedNavLink.classList.add('desktop-link-active');
        }, 300); // Delay to match the CSS transition duration
    }
}

// Add event listeners to each nav item
document.querySelectorAll('.desktop-nav-list-item').forEach(item => {
    item.addEventListener('click', handleDesktopNavClick);
});



// JS FOR ALL PARALLAX IMAGES

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
});

gsap.to(".parallax-image", {
    y: "300px",
    scrollTrigger: {
        trigger: "#home",
        start: "top bottom",
        end : "bottom top",
        scrub: true
    }
})