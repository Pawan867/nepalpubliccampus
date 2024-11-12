// JavaScript for enhanced interactivity and functionality

document.addEventListener("DOMContentLoaded", function() {
    // Setup the phone number dynamically using JSON data
    const jsonData = { "phoneNumber": "9779845634867" };
    const phoneNumberElement = document.getElementById('phone-number');
    if (phoneNumberElement) {
        phoneNumberElement.textContent = jsonData.phoneNumber;
        phoneNumberElement.href = `tel:${jsonData.phoneNumber}`;
    }

    // Search button functionality with validation and feedback
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.search-input');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                console.log(`Searching for: ${query}`);
                // Replace alert with modal for better UI experience
                alert(`Searching for: ${query}`);
            } else {
                alert('Please enter a search term.');
                searchInput.focus();
                searchInput.style.borderColor = 'red'; // Visual feedback for empty input
                setTimeout(() => searchInput.style.borderColor = '', 2000); // Reset border color
            }
        });
    }

    // Mobile menu toggle functionality for responsive design
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active'); // Toggle menu visibility
        });
    }

    // Smooth scroll functionality for internal anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.warn(`Element with ID ${targetId} not found.`);
            }
        });
    });

    // Card hover effect using JavaScript for alternative visual feedback
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)'; // Enhanced shadow on hover
        });
        card.addEventListener('mouseout', () => {
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Default shadow on mouse out
        });
    });

    // "View All" button interaction
    const viewAllButton = document.querySelector('.view-all-button');
    if (viewAllButton) {
        viewAllButton.addEventListener('click', () => {
            // Replace with actual navigation logic
            alert('Redirecting to all courses...');
            // Example: window.location.href = '/all-courses';
        });
    }

    // Toggle display of extra details on clicking the "+" button
    const btnReadMore = document.querySelectorAll(".btn-read");
    btnReadMore.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default action if inside a link
            const practiceCol = this.closest(".practice-col");
            practiceCol.classList.toggle("show-extra"); // Toggle visibility of extra details
        });
    });

    const teamMembers = document.querySelectorAll(".team-member");

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add "in-view" class to elements in viewport
    function checkTeamMembers() {
        teamMembers.forEach(member => {
            if (isInViewport(member)) {
                member.classList.add("in-view");
            }
        });
    }

    // Initial check and on scroll event
    checkTeamMembers(); // Initial check in case elements are already in view
    window.addEventListener("scroll", checkTeamMembers);

});
// JavaScript for smooth scrolling on footer links
document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute("href");

        if (href.startsWith("#")) {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

