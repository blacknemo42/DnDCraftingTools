/**
 * Main JavaScript file for D&D Crafting Tools
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('D&D Crafting Tools initialized');
    
    // Navigation handling
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Future functionality will be added here or imported from module files
});
