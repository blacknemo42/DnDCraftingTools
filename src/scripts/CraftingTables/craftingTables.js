/**
 * Crafting Tables module for D&D Crafting Tools
 * This module contains cards for each crafting table referenced in the Quick Reference
 */

const CraftingTables = {
    // Crafting tables data with descriptions, icons, and content
    tables: [
        {
            id: 'alchemytable',
            name: 'Alchemy Table',
            description: 'For creating potions and alchemical items',
            icon: 'fa-flask',
            color: '#5D8AA8', // Blue-ish
            content: 'docs/CraftingTables/AlchemyTable.md'
        },
        {
            id: 'poisoncrafttable',
            name: 'Poisoncraft Table',
            description: 'For creating poisons and venoms',
            icon: 'fa-skull',
            color: '#556B2F', // Dark olive green
            content: 'docs/CraftingTables/PoisoncraftTable.md'
        },
        {
            id: 'forgetable',
            name: 'Forge Table',
            description: 'For blacksmithing weapons and armor',
            icon: 'fa-hammer',
            color: '#8B4513', // Saddle brown
            content: 'docs/CraftingTables/ForgeTable.md'
        },
        {
            id: 'cookingtable',
            name: 'Cooking Table',
            description: 'For preparing beneficial meals',
            icon: 'fa-utensils',
            color: '#CD5C5C', // Indian red
            content: 'docs/CraftingTables/CookingTable.md'
        },
        {
            id: 'scrolltable',
            name: 'Scroll Table',
            description: 'For creating magical scrolls',
            icon: 'fa-scroll',
            color: '#9370DB', // Medium purple
            content: 'docs/CraftingTables/ScrollTable.md'
        },
        {
            id: 'wandtable',
            name: 'Wand Crafting Table',
            description: 'For crafting magical wands and staves',
            icon: 'fa-wand-magic-sparkles',
            color: '#9932CC', // Dark orchid
            content: 'docs/CraftingTables/WandTable.md'
        },
        {
            id: 'leatherworktable',
            name: 'Leatherworking Table',
            description: 'For working with leather for armor and accessories',
            icon: 'fa-mitten',
            color: '#8B4513', // Saddle brown
            content: 'docs/CraftingTables/LeatherworkTable.md'
        },
        {
            id: 'woodcarvingtable',
            name: 'Woodcarving Table',
            description: 'For shaping wood into weapons and items',
            icon: 'fa-tree',
            color: '#6B8E23', // Olive drab
            content: 'docs/CraftingTables/WoodcarvingTable.md'
        },
        {
            id: 'runecarvingtable',
            name: 'Runecarving Table',
            description: 'For inscribing magical runes',
            icon: 'fa-gem',
            color: '#4682B4', // Steel blue
            content: 'docs/CraftingTables/RunecarvingTable.md'
        },
        {
            id: 'engineeringtable',
            name: 'Engineering Table',
            description: 'For building complex mechanical devices',
            icon: 'fa-gears',
            color: '#708090', // Slate gray
            content: 'docs/CraftingTables/EngineeringTable.md'
        },
        {
            id: 'tinkeringtable',
            name: 'Tinkering Table',
            description: 'For creating small gadgets and contraptions',
            icon: 'fa-screwdriver-wrench',
            color: '#B8860B', // Dark goldenrod
            content: 'docs/CraftingTables/TinkeringTable.md'
        }
    ],

    // Initialize the module
    initialize: function() {
        console.log('CraftingTables module initialized');
        this.renderCraftingTableCards();
        this.setupEventListeners();
    },
    
    // Render cards for each crafting table
    renderCraftingTableCards: function() {
        const container = document.querySelector('.crafting-tables-content');
        if (!container) return;
        
        // Clear existing content
        container.innerHTML = '';
        
        // Create card grid
        const cardGrid = document.createElement('div');
        cardGrid.className = 'crafting-table-grid';
        
        // Add cards for each crafting table
        this.tables.forEach(table => {
            const card = document.createElement('div');
            card.className = 'crafting-table-card';
            card.setAttribute('data-table', table.id);
            card.style.borderColor = table.color;
            
            const iconContainer = document.createElement('div');
            iconContainer.className = 'table-icon';
            iconContainer.style.backgroundColor = table.color;
            
            const icon = document.createElement('i');
            icon.className = `fas ${table.icon}`;
            iconContainer.appendChild(icon);
            
            const content = document.createElement('div');
            content.className = 'table-content';
            
            const title = document.createElement('h3');
            title.textContent = table.name;
            
            const description = document.createElement('p');
            description.textContent = table.description;
            
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
        const cards = document.querySelectorAll('.crafting-table-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const tableId = card.getAttribute('data-table');
                this.loadCraftingTable(tableId);
            });
        });
    },
    
    // Load a specific crafting table
    loadCraftingTable: function(tableId) {
        console.log(`Loading crafting table: ${tableId}`);
        
        // Find the table data
        const table = this.tables.find(t => t.id === tableId);
        if (!table) return;
        
        // Get the container
        const container = document.querySelector('.crafting-tables-content');
        if (!container) return;
        
        // Save current scroll position
        const scrollPosition = window.scrollY;
        
        // Clear existing content
        container.innerHTML = '';
        
        // Create back button
        const backButton = document.createElement('button');
        backButton.className = 'back-button';
        backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Back to All Crafting Tables';
        backButton.addEventListener('click', () => {
            this.renderCraftingTableCards();
            this.setupEventListeners();
        });
        
        // Create header
        const header = document.createElement('div');
        header.className = 'crafting-table-header';
        header.style.borderColor = table.color;
        
        const headerIcon = document.createElement('i');
        headerIcon.className = `fas ${table.icon}`;
        headerIcon.style.color = table.color;
        
        const headerTitle = document.createElement('h2');
        headerTitle.textContent = table.name;
        
        header.appendChild(headerIcon);
        header.appendChild(headerTitle);
        
        // Create content container
        const contentContainer = document.createElement('div');
        contentContainer.className = 'crafting-table-detail-content';
        contentContainer.innerHTML = '<p>Loading crafting table content...</p>';
        
        // Map table IDs to file names
        const tableFileMap = {
            'alchemytable': 'AlchemyTable.md',
            'poisoncrafttable': 'PoisoncraftTable.md',
            'forgetable': 'ForgeTable.md',
            'cookingtable': 'CookingTable.md',
            'scrolltable': 'ScrollTable.md',
            'wandtable': 'WandTable.md',
            'leatherworktable': 'LeatherworkTable.md',
            'woodcarvingtable': 'WoodcarvingTable.md',
            'runecarvingtable': 'RunecarvingTable.md',
            'engineeringtable': 'EngineeringTable.md',
            'tinkeringtable': 'TinkeringTable.md'
        };
        
        // Configure marked.js options for proper rendering
        marked.setOptions({
            breaks: true,
            gfm: true,
            headerIds: true,
            sanitize: false
        });
        
        // Fetch the markdown content using the correct file name
        fetch(`docs/CraftingTables/${tableFileMap[tableId]}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Crafting table content not found');
                }
                return response.text();
            })
            .then(markdown => {
                // Use marked.js to parse markdown to HTML
                contentContainer.innerHTML = marked.parse(markdown);
                
                // Add CSS classes to tables for proper styling
                const tables = contentContainer.querySelectorAll('table');
                tables.forEach(table => {
                    table.className = 'crafting-table';
                });
            })
            .catch(error => {
                console.error('Error loading crafting table:', error);
                contentContainer.innerHTML = `
                    <p class="error">Error loading crafting table: ${error.message}</p>
                    <div class="placeholder-content">
                        <h3>Placeholder Content for ${table.name}</h3>
                        <p>This is placeholder content for the ${table.name}. The actual content will be loaded from markdown files.</p>
                        <p>To add content, create a markdown file at: docs/CraftingTables/${tableFileMap[tableId]}</p>
                    </div>
                `;
            });
        
        // Append everything to the container
        container.appendChild(backButton);
        container.appendChild(header);
        container.appendChild(contentContainer);
        
        // Restore scroll position
        window.scrollTo(0, scrollPosition);
    }
};
