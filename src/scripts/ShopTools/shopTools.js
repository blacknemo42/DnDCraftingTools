/**
 * Shop Tools module for D&D Crafting Tools
 * This will contain shop price references for various items
 */

const ShopTools = {
    // Tools available in the shop tools module
    shopTools: [
        {
            id: 'price-lookup',
            name: 'Price Lookup',
            description: 'Look up prices for various items available for purchase',
            icon: 'fa-search-dollar',
            color: '#4CAF50'
        },
        {
            id: 'shop-generator',
            name: 'Shop Generator',
            description: 'Generate a random shop inventory based on location and size',
            icon: 'fa-store',
            color: '#2196F3'
        },
        {
            id: 'haggling-calculator',
            name: 'Haggling Calculator',
            description: 'Calculate adjusted prices based on character skills and shop circumstances',
            icon: 'fa-comments-dollar',
            color: '#FF9800'
        }
    ],
    
    // Initialize the module
    initialize: function() {
        console.log('Shop Tools module initialized');
        this.renderToolCards();
        this.setupEventListeners();
    },
    
    // Render the shop tool cards
    renderToolCards: function() {
        const container = document.querySelector('.shop-tools-content');
        if (!container) return;
        
        // Clear any existing content
        container.innerHTML = '';
        
        // Create a card container
        const cardContainer = document.createElement('div');
        cardContainer.className = 'shop-tools-container';
        
        // Create cards for each shop tool
        this.shopTools.forEach(tool => {
            const card = document.createElement('div');
            card.className = 'shop-tool-card';
            card.setAttribute('data-tool', tool.id);
            
            const iconContainer = document.createElement('div');
            iconContainer.className = 'tool-icon';
            iconContainer.style.backgroundColor = tool.color;
            
            const icon = document.createElement('i');
            icon.className = `fas ${tool.icon}`;
            
            const content = document.createElement('div');
            content.className = 'tool-content';
            
            const title = document.createElement('h3');
            title.textContent = tool.name;
            
            const description = document.createElement('p');
            description.textContent = tool.description;
            
            // Assemble the card
            iconContainer.appendChild(icon);
            content.appendChild(title);
            content.appendChild(description);
            
            card.appendChild(iconContainer);
            card.appendChild(content);
            
            cardContainer.appendChild(card);
        });
        
        container.appendChild(cardContainer);
    },
    
    // Setup event listeners for the shop tools
    setupEventListeners: function() {
        const container = document.querySelector('.shop-tools-content');
        if (!container) return;
        
        container.addEventListener('click', (event) => {
            const toolCard = event.target.closest('.shop-tool-card');
            if (toolCard) {
                const toolId = toolCard.getAttribute('data-tool');
                const tool = this.shopTools.find(t => t.id === toolId);
                
                if (tool) {
                    this.loadTool(tool);
                }
            }
        });
    },
    
    // Load a specific shop tool
    loadTool: function(tool) {
        console.log(`Loading shop tool: ${tool.name}`);
        
        // Save current scroll position
        const scrollPosition = window.scrollY;
        
        const container = document.querySelector('.shop-tools-content');
        if (!container) return;
        
        // Clear the container
        container.innerHTML = '';
        
        // Create back button
        const backButton = document.createElement('button');
        backButton.className = 'back-button';
        backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Tools';
        backButton.addEventListener('click', () => {
            this.renderToolCards();
            this.setupEventListeners();
        });
        
        // Create header
        const header = document.createElement('div');
        header.className = 'tool-header';
        header.style.borderColor = tool.color;
        
        const headerIcon = document.createElement('i');
        headerIcon.className = `fas ${tool.icon}`;
        headerIcon.style.color = tool.color;
        
        const headerTitle = document.createElement('h2');
        headerTitle.textContent = tool.name;
        
        header.appendChild(headerIcon);
        header.appendChild(headerTitle);
        
        // Create content container
        const contentContainer = document.createElement('div');
        contentContainer.className = 'tool-content-container';
        
        // Load the appropriate tool content
        switch (tool.id) {
            case 'price-lookup':
                this.renderPriceLookupTool(contentContainer);
                break;
            case 'shop-generator':
                contentContainer.innerHTML = '<p>Shop Generator coming soon...</p>';
                break;
            case 'haggling-calculator':
                contentContainer.innerHTML = '<p>Haggling Calculator coming soon...</p>';
                break;
            default:
                contentContainer.innerHTML = '<p>Tool content not available.</p>';
        }
        
        // Append everything to the container
        container.appendChild(backButton);
        container.appendChild(header);
        container.appendChild(contentContainer);
        
        // Restore scroll position
        window.scrollTo(0, scrollPosition);
    },
    
    // Render the Price Lookup tool
    renderPriceLookupTool: function(container) {
        // Create search controls
        const searchControls = document.createElement('div');
        searchControls.className = 'price-lookup-controls';
        
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.className = 'price-lookup-search';
        searchInput.placeholder = 'Search for items...';
        
        const categoryFilter = document.createElement('select');
        categoryFilter.className = 'price-lookup-category';
        
        // Add "All Categories" option
        const allOption = document.createElement('option');
        allOption.value = 'all';
        allOption.textContent = 'All Categories';
        categoryFilter.appendChild(allOption);
        
        // Get unique categories from all item types
        const categories = new Set();
        
        // Add categories from materials
        ItemsData.materials.forEach(item => categories.add(item.category));
        
        // Add categories from containers
        ItemsData.containers.forEach(item => categories.add(item.category));
        
        // Add categories from misc items
        ItemsData.misc.forEach(item => categories.add(item.category));
        
        // Add category options to the select element
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
        
        const rarityFilter = document.createElement('select');
        rarityFilter.className = 'price-lookup-rarity';
        
        // Add "All Rarities" option
        const allRarityOption = document.createElement('option');
        allRarityOption.value = 'all';
        allRarityOption.textContent = 'All Rarities';
        rarityFilter.appendChild(allRarityOption);
        
        // Get unique rarities
        const rarities = new Set();
        
        // Add rarities from materials
        ItemsData.materials.forEach(item => rarities.add(item.rarity));
        
        // Add rarities from containers
        ItemsData.containers.forEach(item => rarities.add(item.rarity));
        
        // Add rarities from misc items
        ItemsData.misc.forEach(item => rarities.add(item.rarity));
        
        // Add rarity options to the select element
        rarities.forEach(rarity => {
            const option = document.createElement('option');
            option.value = rarity;
            option.textContent = rarity;
            rarityFilter.appendChild(option);
        });
        
        // Add search controls to the container
        searchControls.appendChild(searchInput);
        searchControls.appendChild(categoryFilter);
        searchControls.appendChild(rarityFilter);
        
        // Create table container
        const tableContainer = document.createElement('div');
        tableContainer.className = 'price-lookup-table-container';
        
        // Create the table
        const table = document.createElement('table');
        table.className = 'price-lookup-table';
        
        // Create table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        const headers = ['Item Name', 'Category', 'Rarity', 'Used For', 'Price'];
        
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Create table body
        const tbody = document.createElement('tbody');
        
        // Combine all items into a single array
        const allItems = [
            ...ItemsData.materials,
            ...ItemsData.containers,
            ...ItemsData.misc
        ];
        
        // Add rows for each item
        allItems.forEach(item => {
            const row = document.createElement('tr');
            
            const nameCell = document.createElement('td');
            nameCell.textContent = item.name;
            
            const categoryCell = document.createElement('td');
            categoryCell.textContent = item.category;
            
            const rarityCell = document.createElement('td');
            rarityCell.textContent = item.rarity;
            
            const usedForCell = document.createElement('td');
            usedForCell.textContent = item.usedFor;
            
            const priceCell = document.createElement('td');
            priceCell.textContent = item.price;
            
            row.appendChild(nameCell);
            row.appendChild(categoryCell);
            row.appendChild(rarityCell);
            row.appendChild(usedForCell);
            row.appendChild(priceCell);
            
            tbody.appendChild(row);
        });
        
        table.appendChild(tbody);
        tableContainer.appendChild(table);
        
        // Add everything to the container
        container.appendChild(searchControls);
        container.appendChild(tableContainer);
        
        // Setup search functionality
        this.setupSearchFunctionality(searchInput, categoryFilter, rarityFilter, tbody, allItems);
    },
    
    // Setup search functionality for the price lookup tool
    setupSearchFunctionality: function(searchInput, categoryFilter, rarityFilter, tbody, allItems) {
        const filterItems = () => {
            const searchTerm = searchInput.value.toLowerCase();
            const categoryValue = categoryFilter.value;
            const rarityValue = rarityFilter.value;
            
            // Clear the current table body
            tbody.innerHTML = '';
            
            // Filter items based on search criteria
            const filteredItems = allItems.filter(item => {
                const nameMatch = item.name.toLowerCase().includes(searchTerm);
                const usedForMatch = item.usedFor.toLowerCase().includes(searchTerm);
                const categoryMatch = categoryValue === 'all' || item.category === categoryValue;
                const rarityMatch = rarityValue === 'all' || item.rarity === rarityValue;
                
                return (nameMatch || usedForMatch) && categoryMatch && rarityMatch;
            });
            
            // Add rows for filtered items
            filteredItems.forEach(item => {
                const row = document.createElement('tr');
                
                const nameCell = document.createElement('td');
                nameCell.textContent = item.name;
                
                const categoryCell = document.createElement('td');
                categoryCell.textContent = item.category;
                
                const rarityCell = document.createElement('td');
                rarityCell.textContent = item.rarity;
                
                const usedForCell = document.createElement('td');
                usedForCell.textContent = item.usedFor;
                
                const priceCell = document.createElement('td');
                priceCell.textContent = item.price;
                
                row.appendChild(nameCell);
                row.appendChild(categoryCell);
                row.appendChild(rarityCell);
                row.appendChild(usedForCell);
                row.appendChild(priceCell);
                
                tbody.appendChild(row);
            });
        };
        
        // Add event listeners to the search controls
        searchInput.addEventListener('input', filterItems);
        categoryFilter.addEventListener('change', filterItems);
        rarityFilter.addEventListener('change', filterItems);
    }
};

// No export statement - the object is now globally available
