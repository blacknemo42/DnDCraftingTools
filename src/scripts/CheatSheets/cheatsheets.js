/**
 * Cheat Sheets module for D&D Crafting Tools
 * This will contain quick reference information from the crafting guide
 */

const CheatSheets = {
    // Crafting roles data with descriptions and icons
    craftingRoles: [
        {
            id: 'basicrules',
            name: 'Basic Rules',
            description: 'Fundamental crafting mechanics',
            icon: 'fa-book-open',
            color: '#4B0082' // Indigo
        },
        {
            id: 'alchemy',
            name: 'Alchemy',
            description: 'Creating potions and alchemical items',
            icon: 'fa-flask',
            color: '#5D8AA8' // Blue-ish
        },
        {
            id: 'poisoncraft',
            name: 'Poisoncraft',
            description: 'Creating poisons and venoms',
            icon: 'fa-skull',
            color: '#556B2F' // Dark olive green
        },
        {
            id: 'blacksmithing',
            name: 'Blacksmithing',
            description: 'Forging weapons and armor',
            icon: 'fa-hammer',
            color: '#8B4513' // Saddle brown
        },
        {
            id: 'cooking',
            name: 'Cooking',
            description: 'Preparing beneficial meals',
            icon: 'fa-utensils',
            color: '#CD5C5C' // Indian red
        },
        {
            id: 'scrollscribing',
            name: 'Scrollscribing',
            description: 'Creating magical scrolls',
            icon: 'fa-scroll',
            color: '#9370DB' // Medium purple
        },
        {
            id: 'wandwhittling',
            name: 'Wand Whittling',
            description: 'Crafting magical wands and staves',
            icon: 'fa-wand-magic-sparkles',
            color: '#9932CC' // Dark orchid
        },
        {
            id: 'leatherworking',
            name: 'Leatherworking',
            description: 'Working with leather for armor and accessories',
            icon: 'fa-mitten',
            color: '#8B4513' // Saddle brown
        },
        {
            id: 'woodcarving',
            name: 'Woodcarving',
            description: 'Shaping wood into weapons and items',
            icon: 'fa-tree',
            color: '#6B8E23' // Olive drab
        },
        {
            id: 'runecarving',
            name: 'Runecarving',
            description: 'Inscribing magical runes',
            icon: 'fa-gem',
            color: '#4682B4' // Steel blue
        },
        {
            id: 'engineering',
            name: 'Engineering',
            description: 'Building complex mechanical devices',
            icon: 'fa-gears',
            color: '#708090' // Slate gray
        },
        {
            id: 'tinkering',
            name: 'Tinkering',
            description: 'Creating small gadgets and contraptions',
            icon: 'fa-screwdriver-wrench',
            color: '#B8860B' // Dark goldenrod
        }
    ],

    // Initialize the module
    initialize: function() {
        console.log('CheatSheets module initialized');
        this.renderCraftingRoleCards();
        this.setupEventListeners();
    },
    
    // Render cards for each crafting role
    renderCraftingRoleCards: function() {
        const container = document.querySelector('.cheatsheet-content');
        if (!container) return;
        
        // Clear existing content
        container.innerHTML = '';
        
        // Create card grid
        const cardGrid = document.createElement('div');
        cardGrid.className = 'crafting-role-grid';
        
        // Add cards for each crafting role
        this.craftingRoles.forEach(role => {
            const card = document.createElement('div');
            card.className = 'crafting-role-card';
            card.setAttribute('data-role', role.id);
            card.style.borderColor = role.color;
            
            const iconContainer = document.createElement('div');
            iconContainer.className = 'role-icon';
            iconContainer.style.backgroundColor = role.color;
            
            const icon = document.createElement('i');
            icon.className = `fas ${role.icon}`;
            iconContainer.appendChild(icon);
            
            const content = document.createElement('div');
            content.className = 'role-content';
            
            const title = document.createElement('h3');
            title.textContent = role.name;
            
            const description = document.createElement('p');
            description.textContent = role.description;
            
            content.appendChild(title);
            content.appendChild(description);
            
            card.appendChild(iconContainer);
            card.appendChild(content);
            
            cardGrid.appendChild(card);
        });
        
        container.appendChild(cardGrid);
    },
    
    // Set up event listeners for the cards
    setupEventListeners: function() {
        const cards = document.querySelectorAll('.crafting-role-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const roleId = card.getAttribute('data-role');
                this.loadCheatSheet(roleId);
            });
        });
    },
    
    // Load a specific cheatsheet
    loadCheatSheet: function(roleId) {
        console.log(`Loading cheat sheet: ${roleId}`);
        
        // Find the role data
        const role = this.craftingRoles.find(r => r.id === roleId);
        if (!role) return;
        
        // Get the container
        const container = document.querySelector('.cheatsheet-content');
        if (!container) return;
        
        // Save current scroll position
        const scrollPosition = window.scrollY;
        
        // Clear existing content
        container.innerHTML = '';
        
        // Create back button
        const backButton = document.createElement('button');
        backButton.className = 'back-button';
        backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Back to All Cheatsheets';
        backButton.addEventListener('click', () => {
            this.renderCraftingRoleCards();
            this.setupEventListeners();
        });
        
        // Create header
        const header = document.createElement('div');
        header.className = 'cheatsheet-header';
        header.style.borderColor = role.color;
        
        const headerIcon = document.createElement('i');
        headerIcon.className = `fas ${role.icon}`;
        headerIcon.style.color = role.color;
        
        const headerTitle = document.createElement('h2');
        headerTitle.textContent = role.name;
        
        header.appendChild(headerIcon);
        header.appendChild(headerTitle);
        
        // Create content container
        const contentContainer = document.createElement('div');
        contentContainer.className = 'cheatsheet-detail-content';
        contentContainer.innerHTML = '<p>Loading cheatsheet content...</p>';
        
        // Fetch the markdown content using a relative path
        fetch(`docs/CheatSheets/${role.name.replace(/\s+/g, '')}.md`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Cheatsheet not found');
                }
                return response.text();
            })
            .then(markdown => {
                // Use marked.js to parse markdown to HTML
                contentContainer.innerHTML = marked.parse(markdown);
            })
            .catch(error => {
                console.error('Error loading cheatsheet:', error);
                contentContainer.innerHTML = `<p class="error">Error loading cheatsheet: ${error.message}</p>`;
            });
        
        // Append everything to the container
        container.appendChild(backButton);
        container.appendChild(header);
        container.appendChild(contentContainer);
        
        // Restore scroll position
        window.scrollTo(0, scrollPosition);
    }
};
