// This function will detect the scroll event and scroll to the next section
let currentSection = 0;
const sections = document.querySelectorAll('.menu-page');

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Scrolling down
        scrollToNextSection();
    } else {
        // Scrolling up
        scrollToPreviousSection();
    }
});

function scrollToNextSection() {
    if (currentSection < sections.length - 1) {
        currentSection++;
        sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToPreviousSection() {
    if (currentSection > 0) {
        currentSection--;
        sections[currentSection].scrollIntoView({ behavior: 'smooth' });
    }
}
