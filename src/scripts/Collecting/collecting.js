/**
 * Collecting module for D&D Crafting Tools
 * This will contain tools for harvesting materials and looting
 */

const Collecting = {
    // Tools available in the collecting module
    collectingTools: [
        {
            id: 'harvest-generator',
            name: 'Harvest Generator',
            description: 'Generate harvested materials from creatures based on type and CR',
            icon: 'fa-dragon',
            color: '#8D6E63'
        },
        {
            id: 'gathering-calculator',
            name: 'Gathering Calculator',
            description: 'Calculate reagents, materials, and food gathered from different biomes',
            icon: 'fa-leaf',
            color: '#4CAF50'
        },
        {
            id: 'loot-generator',
            name: 'Loot Generator',
            description: 'Generate loot from humanoid creatures based on CR',
            icon: 'fa-coins',
            color: '#FFC107'
        },
        {
            id: 'remnant-finder',
            name: 'Remnant Finder',
            description: 'Find magical remnants from creatures that don\'t leave corpses',
            icon: 'fa-ghost',
            color: '#9C27B0'
        }
    ],
    
    // Initialize the module
    initialize: function() {
        console.log('Collecting module initialized');
        this.renderToolCards();
        this.setupEventListeners();
    },
    
    // Render the collecting tool cards
    renderToolCards: function() {
        const container = document.querySelector('.collecting-content');
        if (!container) return;
        
        // Clear any existing content
        container.innerHTML = '';
        
        // Create a card container
        const cardContainer = document.createElement('div');
        cardContainer.className = 'collecting-tools-container';
        
        // Create cards for each collecting tool
        this.collectingTools.forEach(tool => {
            const card = document.createElement('div');
            card.className = 'collecting-tool-card';
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
    
    // Setup event listeners for the collecting tools
    setupEventListeners: function() {
        const container = document.querySelector('.collecting-content');
        if (!container) return;
        
        container.addEventListener('click', (event) => {
            const toolCard = event.target.closest('.collecting-tool-card');
            if (toolCard) {
                const toolId = toolCard.getAttribute('data-tool');
                const tool = this.collectingTools.find(t => t.id === toolId);
                
                if (tool) {
                    this.loadTool(tool);
                }
            }
        });
    },
    
    // Load a specific collecting tool
    loadTool: function(tool) {
        console.log(`Loading collecting tool: ${tool.name}`);
        
        // Save current scroll position
        const scrollPosition = window.scrollY;
        
        const container = document.querySelector('.collecting-content');
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
            case 'harvest-generator':
                this.renderHarvestGenerator(contentContainer);
                break;
            case 'gathering-calculator':
                this.renderGatheringCalculator(contentContainer);
                break;
            case 'loot-generator':
                this.renderLootGenerator(contentContainer);
                break;
            case 'remnant-finder':
                this.renderRemnantFinder(contentContainer);
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
    
    // Render the Harvest Generator tool
    renderHarvestGenerator: function(container) {
        container.innerHTML = `
            <div class="harvest-generator-container">
                <div class="harvest-form">
                    <div class="form-group">
                        <label for="creature-type">Creature Type:</label>
                        <select id="creature-type" class="harvest-select">
                            <option value="">Select Creature Type</option>
                            <option value="beast">Beast</option>
                            <option value="dragon">Dragon</option>
                            <option value="monstrosity">Monstrosity</option>
                            <option value="giant">Giant</option>
                            <option value="construct">Construct</option>
                            <option value="aberration">Aberration</option>
                            <option value="undead">Undead</option>
                            <option value="plant">Plant</option>
                            <option value="celestial">Celestial</option>
                            <option value="elemental">Elemental</option>
                            <option value="fiend">Fiend</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="creature-cr">Challenge Rating (CR):</label>
                        <select id="creature-cr" class="harvest-select">
                            <option value="">Select CR</option>
                            <option value="0-4">CR 0-4</option>
                            <option value="5-10">CR 5-10</option>
                            <option value="11-16">CR 11-16</option>
                            <option value="17+">CR 17+</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="creature-size">Creature Size:</label>
                        <select id="creature-size" class="harvest-select">
                            <option value="">Select Size</option>
                            <option value="tiny">Tiny</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="huge">Huge</option>
                            <option value="gargantuan">Gargantuan</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="harvest-type">Harvest Type:</label>
                        <div class="harvest-type-options">
                            <label class="checkbox-container">
                                <input type="checkbox" id="basic-harvest" checked>
                                <span class="checkbox-label">Basic Harvest (Meat & Hides)</span>
                            </label>
                            <label class="checkbox-container">
                                <input type="checkbox" id="exotic-harvest" checked>
                                <span class="checkbox-label">Exotic Harvest (Special Materials)</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <button id="generate-harvest" class="primary-button">Generate Harvest</button>
                        <button id="reset-harvest" class="secondary-button">Reset</button>
                    </div>
                </div>
                
                <div class="harvest-results">
                    <h3>Harvest Results</h3>
                    <div id="harvest-results-container">
                        <p class="no-results">Select creature details and click "Generate Harvest" to see results.</p>
                    </div>
                </div>
            </div>
        `;
        
        // Add event listeners
        this.setupHarvestGeneratorEvents(container);
    },
    
    // Setup event listeners for the Harvest Generator
    setupHarvestGeneratorEvents: function(container) {
        const generateButton = container.querySelector('#generate-harvest');
        const resetButton = container.querySelector('#reset-harvest');
        const creatureTypeSelect = container.querySelector('#creature-type');
        const creatureCRSelect = container.querySelector('#creature-cr');
        const creatureSizeSelect = container.querySelector('#creature-size');
        
        // Generate harvest when button is clicked
        generateButton.addEventListener('click', () => {
            this.generateHarvest(container);
        });
        
        // Reset form when reset button is clicked
        resetButton.addEventListener('click', () => {
            creatureTypeSelect.value = '';
            creatureCRSelect.value = '';
            creatureSizeSelect.value = '';
            container.querySelector('#basic-harvest').checked = true;
            container.querySelector('#exotic-harvest').checked = true;
            
            const resultsContainer = container.querySelector('#harvest-results-container');
            resultsContainer.innerHTML = '<p class="no-results">Select creature details and click "Generate Harvest" to see results.</p>';
        });
        
        // Show/hide size field based on creature type
        creatureTypeSelect.addEventListener('change', () => {
            const creatureType = creatureTypeSelect.value;
            const sizeGroup = container.querySelector('#creature-size').closest('.form-group');
            const basicHarvestCheckbox = container.querySelector('#basic-harvest');
            
            // Only beasts, dragons, monstrosities, and giants need size for basic harvesting
            if (['beast', 'dragon', 'monstrosity', 'giant'].includes(creatureType)) {
                sizeGroup.style.display = 'block';
                basicHarvestCheckbox.disabled = false;
            } else if (['celestial', 'elemental', 'fiend'].includes(creatureType)) {
                // Creatures that leave remnants don't have basic harvesting
                sizeGroup.style.display = 'none';
                basicHarvestCheckbox.checked = false;
                basicHarvestCheckbox.disabled = true;
            } else {
                // Other creature types don't need size for exotic harvesting
                sizeGroup.style.display = 'none';
                basicHarvestCheckbox.disabled = true;
            }
        });
    },
    
    // Generate harvest results
    generateHarvest: function(container) {
        const creatureType = container.querySelector('#creature-type').value;
        const creatureCR = container.querySelector('#creature-cr').value;
        const creatureSize = container.querySelector('#creature-size').value;
        const basicHarvest = container.querySelector('#basic-harvest').checked;
        const exoticHarvest = container.querySelector('#exotic-harvest').checked;
        
        const resultsContainer = container.querySelector('#harvest-results-container');
        
        // Validate inputs
        if (!creatureType) {
            resultsContainer.innerHTML = '<p class="error-message">Please select a creature type.</p>';
            return;
        }
        
        if (!creatureCR && exoticHarvest && !['celestial', 'elemental', 'fiend'].includes(creatureType)) {
            resultsContainer.innerHTML = '<p class="error-message">Please select a challenge rating for exotic harvesting.</p>';
            return;
        }
        
        if (!creatureSize && basicHarvest && ['beast', 'dragon', 'monstrosity', 'giant'].includes(creatureType)) {
            resultsContainer.innerHTML = '<p class="error-message">Please select a creature size for basic harvesting.</p>';
            return;
        }
        
        // Clear previous results
        resultsContainer.innerHTML = '';
        
        // Generate results
        let resultsHTML = '';
        
        // Basic Harvesting (Meat and Hides)
        if (basicHarvest && ['beast', 'dragon', 'monstrosity', 'giant'].includes(creatureType) && creatureSize) {
            const basicData = HarvestData.basicHarvesting[creatureSize];
            
            if (basicData) {
                const hideResult = HarvestData.processResult(basicData.hide);
                const meatResult = HarvestData.processResult(basicData.meat);
                
                resultsHTML += `
                    <div class="harvest-result-section">
                        <h4>Basic Harvesting (DC ${basicData.dc})</h4>
                        <div class="harvest-result-items">
                `;
                
                if (hideResult.quantity > 0) {
                    resultsHTML += `
                        <div class="harvest-result-item">
                            <div class="item-icon"><i class="fas fa-scroll"></i></div>
                            <div class="item-details">
                                <span class="item-name">${hideResult.item}</span>
                                <span class="item-quantity">Quantity: ${hideResult.quantity}</span>
                            </div>
                        </div>
                    `;
                }
                
                if (meatResult.quantity > 0) {
                    resultsHTML += `
                        <div class="harvest-result-item">
                            <div class="item-icon"><i class="fas fa-drumstick-bite"></i></div>
                            <div class="item-details">
                                <span class="item-name">${meatResult.item}</span>
                                <span class="item-quantity">Quantity: ${meatResult.quantity}</span>
                            </div>
                        </div>
                    `;
                }
                
                resultsHTML += `
                        </div>
                    </div>
                `;
            }
        }
        
        // Exotic Harvesting
        if (exoticHarvest) {
            if (['celestial', 'elemental', 'fiend', 'undead'].includes(creatureType) && creatureType !== 'undead') {
                // Remnants for creatures that don't leave corpses
                const remnantTable = HarvestData.exoticRemnants[creatureType];
                
                if (remnantTable) {
                    const roll = Math.floor(Math.random() * 100) + 1;
                    const remnantResult = HarvestData.getResultFromTable(remnantTable, roll);
                    const processedResult = HarvestData.processResult(remnantResult);
                    
                    resultsHTML += `
                        <div class="harvest-result-section">
                            <h4>Exotic Remnants (No Check Required)</h4>
                            <p class="roll-result">Roll: ${roll}</p>
                            <div class="harvest-result-items">
                    `;
                    
                    if (processedResult.quantity > 0) {
                        resultsHTML += `
                            <div class="harvest-result-item">
                                <div class="item-icon"><i class="fas fa-fire-alt"></i></div>
                                <div class="item-details">
                                    <span class="item-name">${processedResult.item}</span>
                                    <span class="item-quantity">Quantity: ${processedResult.quantity}</span>
                                </div>
                            </div>
                        `;
                    } else {
                        resultsHTML += `
                            <div class="harvest-result-item">
                                <div class="item-icon"><i class="fas fa-times-circle"></i></div>
                                <div class="item-details">
                                    <span class="item-name">No remnants found</span>
                                </div>
                            </div>
                        `;
                    }
                    
                    resultsHTML += `
                            </div>
                        </div>
                    `;
                }
            } else if (creatureCR && ['dragon', 'monstrosity', 'giant', 'construct', 'aberration', 'undead', 'plant'].includes(creatureType)) {
                // Exotic harvesting based on CR
                let exoticData;
                let creatureCategory;
                
                // Determine which table to use
                switch (creatureCR) {
                    case '0-4':
                        exoticData = HarvestData.exoticHarvestingCR0to4;
                        break;
                    case '5-10':
                        exoticData = HarvestData.exoticHarvestingCR5to10;
                        break;
                    case '11-16':
                        exoticData = HarvestData.exoticHarvestingCR11to16;
                        break;
                    case '17+':
                        exoticData = HarvestData.exoticHarvestingCR17Plus;
                        break;
                }
                
                // Determine which category to use
                if (['dragon', 'monstrosity', 'giant'].includes(creatureType)) {
                    creatureCategory = 'dragonMonstrosities';
                } else {
                    creatureCategory = creatureType;
                }
                
                if (exoticData && exoticData[creatureCategory]) {
                    const roll = Math.floor(Math.random() * 100) + 1;
                    const exoticResult = HarvestData.getResultFromTable(exoticData[creatureCategory], roll);
                    const processedResult = HarvestData.processResult(exoticResult);
                    
                    resultsHTML += `
                        <div class="harvest-result-section">
                            <h4>Exotic Harvesting (DC ${exoticData.dc})</h4>
                            <p class="roll-result">Roll: ${roll}</p>
                            <div class="harvest-result-items">
                    `;
                    
                    if (processedResult.quantity > 0) {
                        let iconClass = 'fa-flask';
                        if (processedResult.item.includes('essence')) {
                            iconClass = 'fa-fire-alt';
                        } else if (processedResult.item.includes('parts')) {
                            iconClass = 'fa-cogs';
                        }
                        
                        resultsHTML += `
                            <div class="harvest-result-item">
                                <div class="item-icon"><i class="fas ${iconClass}"></i></div>
                                <div class="item-details">
                                    <span class="item-name">${processedResult.item}</span>
                                    <span class="item-quantity">Quantity: ${processedResult.quantity}</span>
                                </div>
                            </div>
                        `;
                    } else {
                        resultsHTML += `
                            <div class="harvest-result-item">
                                <div class="item-icon"><i class="fas fa-times-circle"></i></div>
                                <div class="item-details">
                                    <span class="item-name">No materials found</span>
                                </div>
                            </div>
                        `;
                    }
                    
                    resultsHTML += `
                            </div>
                        </div>
                    `;
                }
            }
        }
        
        // If no results were generated
        if (!resultsHTML) {
            resultsHTML = '<p class="no-results">No harvest results available for the selected creature type and options.</p>';
        }
        
        // Display the results
        resultsContainer.innerHTML = resultsHTML;
    },
    
    // Render the Gathering Calculator tool
    renderGatheringCalculator: function(container) {
        container.innerHTML = `
            <div class="coming-soon-container">
                <div class="coming-soon-icon">
                    <i class="fas fa-tools"></i>
                </div>
                <h3>Gathering Calculator Coming Soon</h3>
                <p>This tool will help you calculate what reagents, materials, and food can be gathered from different biomes.</p>
                <div class="coming-soon-features">
                    <h4>Planned Features:</h4>
                    <ul>
                        <li>Support for different biomes (Forest, Desert, Grasslands, etc.)</li>
                        <li>Reagent gathering calculations</li>
                        <li>Material search calculations</li>
                        <li>Game hunting calculations</li>
                    </ul>
                </div>
            </div>
        `;
    },
    
    // Render the Loot Generator tool
    renderLootGenerator: function(container) {
        container.innerHTML = `
            <div class="coming-soon-container">
                <div class="coming-soon-icon">
                    <i class="fas fa-tools"></i>
                </div>
                <h3>Loot Generator Coming Soon</h3>
                <p>This tool will generate loot from humanoid creatures based on their Challenge Rating (CR).</p>
                <div class="coming-soon-features">
                    <h4>Planned Features:</h4>
                    <ul>
                        <li>Generate individual treasure</li>
                        <li>Generate hoard treasure</li>
                        <li>Options to replace coins with crafting materials</li>
                        <li>Support for different CR ranges</li>
                    </ul>
                </div>
            </div>
        `;
    },
    
    // Render the Remnant Finder tool
    renderRemnantFinder: function(container) {
        container.innerHTML = `
            <div class="coming-soon-container">
                <div class="coming-soon-icon">
                    <i class="fas fa-tools"></i>
                </div>
                <h3>Remnant Finder Coming Soon</h3>
                <p>This tool will help you find magical remnants from creatures that don't leave corpses (Celestials, Elementals, Fiends, etc.).</p>
                <div class="coming-soon-features">
                    <h4>Planned Features:</h4>
                    <ul>
                        <li>Support for different creature types</li>
                        <li>CR-based rewards</li>
                        <li>Essence and reagent generation</li>
                        <li>Special material generation</li>
                    </ul>
                </div>
            </div>
        `;
    }
};

// No export statement - the object is now globally available
