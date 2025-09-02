// script.js
document.addEventListener("DOMContentLoaded", function() {
    // 1. Fetch and insert the navbar
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;

            // 2. Add functionality AFTER the navbar is loaded
            const burgerButton = document.getElementById('burgerButton');
            const mobileMenu = document.getElementById('mobileMenu');

            // Toggle mobile menu
            burgerButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('show');
            });

            // 3. Set the active link
            const currentPage = window.location.pathname.split("/").pop(); // Get the current file name e.g., "fleet.html"
            const navLinks = document.querySelectorAll('.menu-item');
            
            navLinks.forEach(link => {
                const linkPage = link.getAttribute('href').split("/").pop();
                if (linkPage === currentPage) {
                    link.classList.add('active');
                }
            });
        });
});