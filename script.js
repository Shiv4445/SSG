 // Grab the menu button and the mobile menu container
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

// Add a click listener to toggle the menu visibility
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
const mobileLinks = menu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});