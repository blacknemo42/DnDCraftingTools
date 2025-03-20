/**
 * Main JavaScript file for D&D Crafting Tools
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('D&D Crafting Tools initialized');
    
    // Initialize navigation
    initNavigation();
});

/**
 * Initialize navigation functionality
 */
function initNavigation() {
    // Navigation elements
    const cards = document.querySelectorAll('.card');
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const cardNavigation = document.getElementById('card-navigation');
    
    /**
     * Navigate to a specific section
     * @param {string} target - The target section ID
     */
    function navigateTo(target) {
        // Hide all content sections
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show the target section
        const targetSection = document.getElementById(`${target}-content`);
        if (targetSection) {
            targetSection.classList.add('active');
            
            // Hide card navigation if not on home
            if (target === 'home') {
                cardNavigation.style.display = 'grid';
            } else {
                cardNavigation.style.display = 'none';
            }
            
            // Initialize the module for the target section
            initializeModule(target);
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
    }
    
    /**
     * Initialize a specific module
     * @param {string} moduleId - The module ID to initialize
     */
    function initializeModule(moduleId) {
        switch(moduleId) {
            case 'cheatsheets':
                // Initialize CheatSheets module
                if (typeof CheatSheets !== 'undefined') {
                    CheatSheets.initialize();
                } else {
                    console.error('Error loading CheatSheets module');
                }
                break;
                
            case 'collecting':
                // Initialize Collecting module
                if (typeof Collecting !== 'undefined') {
                    Collecting.initialize();
                } else {
                    console.error('Error loading Collecting module');
                }
                break;
                
            case 'purchasing':
                // Initialize Purchasing module
                if (typeof Purchasing !== 'undefined') {
                    Purchasing.initialize();
                } else {
                    console.error('Error loading Purchasing module');
                }
                break;
        }
    }
    
    // Add click event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            navigateTo(targetId);
        });
    });
    
    // Add click event listeners to cards
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            navigateTo(targetId);
        });
    });
    
    // Set home as active by default
    const homeLink = document.querySelector('.nav-link[data-target="home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
    
    // Show home section by default
    const homeSection = document.getElementById('home-content');
    if (homeSection) {
        homeSection.classList.add('active');
    }
}

/**
 * Initialize all modules
 */
function initModules() {
    // No need to initialize modules on page load
    // They will be initialized when navigated to
}
