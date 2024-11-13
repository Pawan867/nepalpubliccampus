document.addEventListener("DOMContentLoaded", function () {
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
        searchButton.addEventListener('click', function () {
            const query = searchInput.value.trim();
            if (query) {
                console.log(`Searching for: ${query}`);
                alert(`Searching for: ${query}`); // Replace with modal for better UX
            } else {
                alert('Please enter a search term.');
                searchInput.focus();
                searchInput.style.borderColor = 'red';
                setTimeout(() => searchInput.style.borderColor = '', 2000);
            }
        });
    }

    // Mobile menu toggle functionality for responsive design
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

    if (menuToggle && menuClose && mobileMenuOverlay) {
        // Open menu overlay
        menuToggle.addEventListener("click", () => {
            mobileMenuOverlay.classList.add('active');
        });

        // Close menu overlay
        menuClose.addEventListener("click", () => {
            mobileMenuOverlay.classList.remove('active');
        });
    }

    // Smooth scroll functionality for internal anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
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
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });

    // "View All" button interaction
    const viewAllButton = document.querySelector('.view-all-button');
    if (viewAllButton) {
        viewAllButton.addEventListener('click', () => {
            alert('Redirecting to all courses...');
            // Example: window.location.href = '/all-courses';
        });
    }

    // Toggle display of extra details on clicking the "+" button
    const btnReadMore = document.querySelectorAll(".btn-read");
    btnReadMore.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const practiceCol = this.closest(".practice-col");
            practiceCol.classList.toggle("show-extra");
        });
    });

    // Adding in-view animation for elements
    function addInViewAnimation(elements) {
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function checkElementsInView() {
            elements.forEach(element => {
                if (isInViewport(element)) {
                    element.classList.add("in-view");
                }
            });
        }

        // Initial check and scroll event listener
        checkElementsInView();
        window.addEventListener("scroll", checkElementsInView);
    }

    // Applying in-view animation to team members and news cards
    const teamMembers = document.querySelectorAll(".team-member");
    const newsCards = document.querySelectorAll(".news-card");
    addInViewAnimation(teamMembers);
    addInViewAnimation(newsCards);

    // Smooth scrolling for footer links
    document.querySelectorAll('.footer-links a').forEach(link => {
        link.addEventListener('click', function (e) {
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

    // Mobile menu dropdown functionality
    document.querySelectorAll(".menu > li").forEach(menuItem => {
        menuItem.addEventListener("click", function (event) {
            if (window.innerWidth <= 768 && this.querySelector(".small-drop")) {
                event.preventDefault();
                this.classList.toggle("active");
            }
        });
    });
});
