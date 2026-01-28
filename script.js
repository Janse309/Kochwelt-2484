// In deiner script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-icon');
    const navItems = document.querySelector('.nav_items');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navItems.classList.toggle('show');
        });
    }
});