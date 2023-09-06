document.addEventListener('DOMContentLoaded', function() {

    // Build the navigation menu dynamically based on the sections present in the HTML.
    buildNavigation();

    // Get a reference to the navigation menu.
    const navbar = document.getElementById('navbar__list');

    // Listen for click events on the navigation menu.
    navbar.addEventListener('click', function(event) {
        event.preventDefault();
        if (event.target.tagName === 'A') {
            const sectionId = event.target.getAttribute('href').substring(1);
            scrollToSection(sectionId);
        }
    });
});

// Listen for scroll events on the document to determine which section is currently in the viewport.
document.addEventListener('scroll', function() {
    makeActive();
});

// Build the navigation menu based on the sections in the HTML.
function buildNavigation() {
    const sections = document.querySelectorAll('section');
    const navbar = document.getElementById('navbar__list');
    // Iterate over each section and create a corresponding navigation item.
    sections.forEach(section => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#${section.id}">${section.getAttribute('data-nav')}</a>`;
        navbar.appendChild(listItem);
    });
}

// Scroll to the specified section smoothly.
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: 'smooth'
    });
}

// Highlight the active section in the navigation menu based on its position in the viewport.
function makeActive() {
    const VALUE = 150;
    const sections = document.querySelectorAll('section');
    
    // Iterate over each section to determine its position and add/remove the 'your-active-class' accordingly.
    sections.forEach(section => {
        const box = section.getBoundingClientRect();
        if (box.top <= VALUE && box.bottom >= VALUE) {
// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}        } else {
            section.classList.remove('your-active-class');
        }
    });
}
