/**
 * Main JavaScript file for D&D Crafting Tools
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('D&D Crafting Tools initialized');
    
    // Navigation elements
    const cards = document.querySelectorAll('.card');
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const cardNavigation = document.getElementById('card-navigation');
    
    // Function to show a specific content section
    function showContent(targetId) {
        // Update active nav link
        navLinks.forEach(link => {
            const linkTarget = link.getAttribute('data-target');
            if (linkTarget === targetId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        
        // Hide all content sections
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show the target content section
        const targetSection = document.getElementById(`${targetId}-content`);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Show/hide card navigation based on current view
        if (targetId === 'home') {
            cardNavigation.style.display = 'grid';
        } else {
            cardNavigation.style.display = 'none';
        }
        
        // Initialize the corresponding module if not home
        if (targetId !== 'home') {
            initializeModule(targetId);
        }
    }
    
    // Function to initialize a module
    function initializeModule(moduleId) {
        switch(moduleId) {
            case 'cheatsheets':
                // Dynamically import and initialize CheatSheets module
                import('./CheatSheets/cheatsheets.js')
                    .then(module => {
                        const CheatSheets = module.default;
                        CheatSheets.initialize();
                    })
                    .catch(err => console.error('Error loading CheatSheets module:', err));
                break;
                
            case 'collecting':
                // Dynamically import and initialize Collecting module
                import('./Collecting/collecting.js')
                    .then(module => {
                        const Collecting = module.default;
                        Collecting.initialize();
                    })
                    .catch(err => console.error('Error loading Collecting module:', err));
                break;
                
            case 'purchasing':
                // Dynamically import and initialize Purchasing module
                import('./Purchasing/purchasing.js')
                    .then(module => {
                        const Purchasing = module.default;
                        Purchasing.initialize();
                    })
                    .catch(err => console.error('Error loading Purchasing module:', err));
                break;
        }
    }
    
    // Add click event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');
            showContent(targetId);
        });
    });
    
    // Add click event listeners to cards
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            showContent(targetId);
        });
    });
    
    // Set home as active by default
    const homeLink = document.querySelector('.nav-link[data-target="home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
});
