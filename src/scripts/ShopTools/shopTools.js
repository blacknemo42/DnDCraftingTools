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
            description: 'Generate a random shop inventory based on location and size with haggling functionality',
            icon: 'fa-store',
            color: '#2196F3'
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
        const container = document.querySelector('.shop-tools-content');
        if (!container) return;
        
        // Clear existing content
        container.innerHTML = '';
        
        // Create a back button
        const backButton = document.createElement('button');
        backButton.className = 'back-button';
        backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Shop Tools';
        backButton.addEventListener('click', () => {
            this.renderToolCards();
        });
        
        // Create content container
        const contentContainer = document.createElement('div');
        contentContainer.className = 'tool-content-container';
        
        // Add back button and content container
        container.appendChild(backButton);
        container.appendChild(contentContainer);
        
        // Load the appropriate tool
        switch (tool.id) {
            case 'price-lookup':
                this.renderPriceLookupTool(contentContainer);
                break;
            case 'shop-generator':
                this.renderShopGeneratorTool(contentContainer);
                break;
            default:
                contentContainer.innerHTML = '<p>Tool not implemented yet</p>';
                break;
        }
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
    },
    
    // Render the Shop Generator tool
    renderShopGeneratorTool: function(container) {
        container.innerHTML = `
            <div class="shop-generator-container">
                <div class="shop-generator-form">
                    <h2>Shop Generator</h2>
                    <p class="tool-description">Generate a shop inventory based on shop type, size, and settlement.</p>
                    
                    <div class="form-group">
                        <label for="settlement-size">Settlement Size:</label>
                        <select id="settlement-size" class="loot-select">
                            <option value="village">Village</option>
                            <option value="town" selected>Town</option>
                            <option value="city">City</option>
                            <option value="metropolis">Metropolis</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="shop-type">Shop Type:</label>
                        <select id="shop-type" class="loot-select">
                            <!-- Shop types will be populated based on settlement size -->
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="shop-size">Shop Size:</label>
                        <select id="shop-size" class="loot-select">
                            <option value="small">Small Shop</option>
                            <option value="medium" selected>Medium Shop</option>
                            <option value="large">Large Shop</option>
                        </select>
                    </div>
                    
                    <div class="form-actions">
                        <button id="generate-shop" class="primary-button">Generate Shop</button>
                    </div>
                </div>
                
                <div class="shop-generator-result" style="display: none;">
                    <div class="shop-header">
                        <h3 id="shop-name">Shop Name</h3>
                        <p id="shop-description">Shop description will appear here.</p>
                    </div>
                    
                    <div id="shop-inventory-container">
                        <!-- Shop inventory will be displayed here -->
                    </div>
                </div>
                
                <div class="shopping-cart" style="display: none;">
                    <div class="cart-header">
                        <h3>Shopping Cart</h3>
                        <div class="haggle-controls">
                            <label for="global-haggle">Global Haggle Adjustment:</label>
                            <div class="haggle-slider-container">
                                <input type="range" id="global-haggle" min="50" max="150" value="100" class="haggle-slider">
                                <span id="global-haggle-value"></span>
                            </div>
                        </div>
                    </div>
                    
                    <div id="cart-items-container">
                        <table class="cart-table">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Base Price</th>
                                    <th>Haggle %</th>
                                    <th>Final Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody id="cart-items">
                                <!-- Cart items will be displayed here -->
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="4" class="cart-total-label">Total:</td>
                                    <td id="cart-total" class="cart-total-value">0 gp</td>
                                    <td></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    
                    <div class="cart-empty-message" style="display: block;">
                        <p>Your shopping cart is empty. Add items from the shop inventory.</p>
                    </div>
                    
                    <div class="cart-actions">
                        <button id="clear-cart" class="secondary-button">Clear Cart</button>
                    </div>
                </div>
            </div>
        `;
        
        this.setupShopGeneratorEvents(container);
    },
    
    // Setup event listeners for the Shop Generator tool
    setupShopGeneratorEvents: function(container) {
        const settlementSelect = container.querySelector('#settlement-size');
        const shopTypeSelect = container.querySelector('#shop-type');
        const shopSizeSelect = container.querySelector('#shop-size');
        const generateButton = container.querySelector('#generate-shop');
        
        // Populate shop types based on settlement size
        this.updateShopTypes(settlementSelect.value, shopTypeSelect);
        
        // Update shop types when settlement size changes
        settlementSelect.addEventListener('change', () => {
            this.updateShopTypes(settlementSelect.value, shopTypeSelect);
        });
        
        // Generate shop inventory when button is clicked
        generateButton.addEventListener('click', () => {
            this.generateShop(container);
        });
        
        // Setup haggling controls
        const globalHaggleSlider = container.querySelector('#global-haggle');
        const globalHaggleValue = container.querySelector('#global-haggle-value');
        
        // Update value when slider changes
        globalHaggleSlider.addEventListener('input', () => {
            const value = globalHaggleSlider.value;
            globalHaggleValue.textContent = '';
            globalHaggleValue.innerHTML = `<input type="number" min="50" max="150" value="${value}" class="haggle-input" id="global-haggle-input">%`;
            
            const haggleInput = container.querySelector('#global-haggle-input');
            haggleInput.addEventListener('change', () => {
                const newValue = Math.min(150, Math.max(50, haggleInput.value));
                haggleInput.value = newValue;
                globalHaggleSlider.value = newValue;
                this.updateAllHaggleValues(container, newValue);
            });
            
            this.updateAllHaggleValues(container, value);
        });
        
        // Initialize the global haggle input
        globalHaggleValue.innerHTML = `<input type="number" min="50" max="150" value="100" class="haggle-input" id="global-haggle-input">%`;
        const haggleInput = container.querySelector('#global-haggle-input');
        haggleInput.addEventListener('change', () => {
            const newValue = Math.min(150, Math.max(50, haggleInput.value));
            haggleInput.value = newValue;
            globalHaggleSlider.value = newValue;
            this.updateAllHaggleValues(container, newValue);
        });
        
        // Setup clear cart button
        const clearCartButton = container.querySelector('#clear-cart');
        clearCartButton.addEventListener('click', () => {
            this.clearCart(container);
        });
    },
    
    // Update shop types based on settlement size
    updateShopTypes: function(settlementSize, shopTypeSelect) {
        // Clear existing options
        shopTypeSelect.innerHTML = '';
        
        // Get available shops for this settlement size
        const settlement = ShopData.settlementSizes.find(s => s.id === settlementSize);
        if (!settlement) return;
        
        // Add options for each available shop type
        settlement.availableShops.forEach(shopId => {
            const shopType = ShopData.shopTypes.find(t => t.id === shopId);
            if (shopType) {
                const option = document.createElement('option');
                option.value = shopType.id;
                option.textContent = shopType.name;
                shopTypeSelect.appendChild(option);
            }
        });
    },
    
    // Generate shop inventory
    generateShop: function(container) {
        const settlementSize = container.querySelector('#settlement-size').value;
        const shopType = container.querySelector('#shop-type').value;
        const shopSize = container.querySelector('#shop-size').value;
        
        // Get shop type and size objects
        const shopTypeObj = ShopData.shopTypes.find(t => t.id === shopType);
        const shopSizeObj = ShopData.shopSizes.find(s => s.id === shopSize);
        
        if (!shopTypeObj || !shopSizeObj) return;
        
        // Generate inventory
        const inventory = ShopData.generateInventory(shopType, shopSize, settlementSize);
        
        // Update shop header
        const shopName = container.querySelector('#shop-name');
        const shopDescription = container.querySelector('#shop-description');
        
        shopName.textContent = `${shopSizeObj.name} ${shopTypeObj.name}`;
        shopDescription.textContent = shopTypeObj.description;
        
        // Display inventory
        this.displayShopInventory(container, inventory);
        
        // Show result section and shopping cart
        container.querySelector('.shop-generator-result').style.display = 'block';
        container.querySelector('.shopping-cart').style.display = 'block';
    },
    
    // Display shop inventory
    displayShopInventory: function(container, inventory) {
        const inventoryContainer = container.querySelector('#shop-inventory-container');
        
        if (inventory.length === 0) {
            inventoryContainer.innerHTML = '<p class="no-items-message">No items available in this shop.</p>';
            return;
        }
        
        // Group items by category
        const categorizedItems = {};
        inventory.forEach(item => {
            if (!categorizedItems[item.category]) {
                categorizedItems[item.category] = [];
            }
            categorizedItems[item.category].push(item);
        });
        
        // Generate HTML for inventory
        let inventoryHTML = '';
        
        Object.keys(categorizedItems).forEach(category => {
            inventoryHTML += `<h4>${category}</h4>`;
            inventoryHTML += '<table class="shop-inventory-table">';
            inventoryHTML += `
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Rarity</th>
                        <th>Used For</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
            `;
            
            categorizedItems[category].forEach(item => {
                inventoryHTML += `
                    <tr class="rarity-${item.rarity.toLowerCase().replace(' ', '-')}">
                        <td>${item.name}</td>
                        <td>${item.rarity}</td>
                        <td>${item.usedFor}</td>
                        <td>${item.quantity}</td>
                        <td>${item.adjustedPrice}</td>
                        <td>
                            <button class="add-to-cart-btn" 
                                data-item-name="${item.name}" 
                                data-item-category="${item.category}" 
                                data-item-rarity="${item.rarity}" 
                                data-item-used-for="${item.usedFor}" 
                                data-item-price="${item.adjustedPrice}">
                                <i class="fas fa-cart-plus"></i> Add
                            </button>
                        </td>
                    </tr>
                `;
            });
            
            inventoryHTML += '</tbody></table>';
        });
        
        inventoryContainer.innerHTML = inventoryHTML;
        
        // Add event listeners to "Add to Cart" buttons
        const addToCartButtons = inventoryContainer.querySelectorAll('.add-to-cart-btn');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const itemData = {
                    name: button.dataset.itemName,
                    category: button.dataset.itemCategory,
                    rarity: button.dataset.itemRarity,
                    usedFor: button.dataset.itemUsedFor,
                    price: button.dataset.itemPrice
                };
                this.addToCart(container, itemData);
            });
        });
    },
    
    // Add item to shopping cart
    addToCart: function(container, itemData) {
        const cartItems = container.querySelector('#cart-items');
        const cartEmptyMessage = container.querySelector('.cart-empty-message');
        const globalHaggleInput = container.querySelector('#global-haggle-input');
        const globalHaggleValue = globalHaggleInput ? globalHaggleInput.value : 100;
        
        // Check if item already exists in cart
        const existingItem = cartItems.querySelector(`tr[data-item-name="${itemData.name}"]`);
        
        if (existingItem) {
            // Update quantity
            const quantityInput = existingItem.querySelector('.cart-item-quantity');
            quantityInput.value = parseInt(quantityInput.value) + 1;
            this.updateCartItemTotal(existingItem);
        } else {
            // Extract numeric price value
            const priceMatch = itemData.price.match(/(\d+(?:,\d+)?)\s*([a-z]+)/i);
            if (!priceMatch) return;
            
            const [_, priceValue, currency] = priceMatch;
            const basePrice = parseFloat(priceValue.replace(/,/g, ''));
            
            // Create new cart item row
            const newRow = document.createElement('tr');
            newRow.dataset.itemName = itemData.name;
            newRow.dataset.basePrice = basePrice;
            newRow.dataset.currency = currency;
            
            newRow.innerHTML = `
                <td>${itemData.name}</td>
                <td>
                    <input type="number" min="1" value="1" class="cart-item-quantity">
                </td>
                <td>${basePrice} ${currency}</td>
                <td>
                    <div class="haggle-slider-container">
                        <input type="range" min="50" max="150" value="${globalHaggleValue}" class="haggle-slider cart-item-haggle">
                        <span class="haggle-value">
                            <input type="number" min="50" max="150" value="${globalHaggleValue}" class="haggle-input cart-item-haggle-input">%
                        </span>
                    </div>
                </td>
                <td class="cart-item-total">${basePrice} ${currency}</td>
                <td>
                    <button class="remove-from-cart-btn"><i class="fas fa-trash"></i></button>
                </td>
            `;
            
            cartItems.appendChild(newRow);
            
            // Add event listeners to the new row
            const quantityInput = newRow.querySelector('.cart-item-quantity');
            const haggleSlider = newRow.querySelector('.cart-item-haggle');
            const haggleInput = newRow.querySelector('.cart-item-haggle-input');
            const removeButton = newRow.querySelector('.remove-from-cart-btn');
            
            quantityInput.addEventListener('change', () => {
                this.updateCartItemTotal(newRow);
            });
            
            haggleSlider.addEventListener('input', () => {
                const value = haggleSlider.value;
                haggleInput.value = value;
                this.updateCartItemTotal(newRow);
            });
            
            haggleInput.addEventListener('change', () => {
                const newValue = Math.min(150, Math.max(50, haggleInput.value));
                haggleInput.value = newValue;
                haggleSlider.value = newValue;
                this.updateCartItemTotal(newRow);
            });
            
            removeButton.addEventListener('click', () => {
                newRow.remove();
                this.updateCartTotal(container);
                
                // Show empty message if cart is empty
                if (cartItems.children.length === 0) {
                    cartEmptyMessage.style.display = 'block';
                }
            });
        }
        
        // Hide empty message
        cartEmptyMessage.style.display = 'none';
        
        // Update cart total
        this.updateCartTotal(container);
    },
    
    // Update the total for a single cart item
    updateCartItemTotal: function(cartItemRow) {
        const basePrice = parseFloat(cartItemRow.dataset.basePrice);
        const currency = cartItemRow.dataset.currency;
        const quantity = parseInt(cartItemRow.querySelector('.cart-item-quantity').value);
        const haggleInput = cartItemRow.querySelector('.cart-item-haggle-input');
        const hagglePercent = parseInt(haggleInput ? haggleInput.value : 100);
        
        // Calculate adjusted price
        const adjustedPrice = basePrice * (hagglePercent / 100);
        const totalPrice = adjustedPrice * quantity;
        
        // Update total cell
        cartItemRow.querySelector('.cart-item-total').textContent = `${totalPrice.toFixed(0)} ${currency}`;
        
        // Update cart total
        const container = cartItemRow.closest('.shop-generator-container');
        this.updateCartTotal(container);
    },
    
    // Update all haggle values based on global haggle slider
    updateAllHaggleValues: function(container, globalValue) {
        const cartItems = container.querySelectorAll('#cart-items tr');
        
        cartItems.forEach(row => {
            const haggleSlider = row.querySelector('.cart-item-haggle');
            const haggleInput = row.querySelector('.cart-item-haggle-input');
            
            if (haggleSlider && haggleInput) {
                haggleSlider.value = globalValue;
                haggleInput.value = globalValue;
                this.updateCartItemTotal(row);
            }
        });
    },
    
    // Update the cart total
    updateCartTotal: function(container) {
        const cartItems = container.querySelectorAll('#cart-items tr');
        const cartTotal = container.querySelector('#cart-total');
        
        let total = 0;
        let currency = 'gp'; // Default currency
        
        cartItems.forEach(row => {
            const totalCell = row.querySelector('.cart-item-total');
            const totalMatch = totalCell.textContent.match(/(\d+(?:,\d+)?)\s*([a-z]+)/i);
            
            if (totalMatch) {
                const [_, totalValue, itemCurrency] = totalMatch;
                total += parseFloat(totalValue.replace(/,/g, ''));
                currency = itemCurrency; // Use the last currency found
            }
        });
        
        cartTotal.textContent = `${total.toFixed(0)} ${currency}`;
    },
    
    // Clear the shopping cart
    clearCart: function(container) {
        const cartItems = container.querySelector('#cart-items');
        const cartEmptyMessage = container.querySelector('.cart-empty-message');
        
        // Remove all cart items
        cartItems.innerHTML = '';
        
        // Show empty message
        cartEmptyMessage.style.display = 'block';
        
        // Update cart total
        this.updateCartTotal(container);
    }
};

// No export statement - the object is now globally available
