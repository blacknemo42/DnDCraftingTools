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
                            <div class="item-icon">${this.getItemIcon(hideResult.item)}</div>
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
                            <div class="item-icon">${this.getItemIcon(meatResult.item)}</div>
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
                                <div class="item-icon">${this.getItemIcon(processedResult.item)}</div>
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
            <div class="gathering-calculator-container">
                <div class="gathering-form">
                    <div class="form-group">
                        <label for="biome-select">Biome:</label>
                        <select id="biome-select" class="gathering-select">
                            <option value="">Select Biome</option>
                            ${GatheringData.biomes.map(biome => `<option value="${biome.id}">${biome.name}</option>`).join('')}
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="gathering-type">Gathering Type:</label>
                        <select id="gathering-type" class="gathering-select">
                            <option value="">Select Gathering Type</option>
                            ${GatheringData.gatheringTypes.map(type => `<option value="${type.id}">${type.name}</option>`).join('')}
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="ability-modifier">Ability Modifier:</label>
                        <select id="ability-modifier" class="gathering-select">
                            <option value="-5">-5</option>
                            <option value="-4">-4</option>
                            <option value="-3">-3</option>
                            <option value="-2">-2</option>
                            <option value="-1">-1</option>
                            <option value="0" selected>+0</option>
                            <option value="1">+1</option>
                            <option value="2">+2</option>
                            <option value="3">+3</option>
                            <option value="4">+4</option>
                            <option value="5">+5</option>
                            <option value="6">+6</option>
                            <option value="7">+7</option>
                            <option value="8">+8</option>
                            <option value="9">+9</option>
                            <option value="10">+10</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="proficiency-bonus">Proficiency Bonus:</label>
                        <select id="proficiency-bonus" class="gathering-select">
                            <option value="0" selected>+0 (Not Proficient)</option>
                            <option value="2">+2 (Levels 1-4)</option>
                            <option value="3">+3 (Levels 5-8)</option>
                            <option value="4">+4 (Levels 9-12)</option>
                            <option value="5">+5 (Levels 13-16)</option>
                            <option value="6">+6 (Levels 17-20)</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="gathering-options">Gathering Options:</label>
                        <div class="gathering-options">
                            <label class="checkbox-container">
                                <input type="checkbox" id="traveling-check">
                                <span class="checkbox-label">Traveling (Disadvantage)</span>
                            </label>
                            <label class="checkbox-container">
                                <input type="checkbox" id="dedicated-check">
                                <span class="checkbox-label">Dedicated 8 hours (2 checks)</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <button id="calculate-gathering" class="primary-button">Calculate Gathering</button>
                        <button id="reset-gathering" class="secondary-button">Reset</button>
                    </div>
                </div>
                
                <div class="gathering-results">
                    <h3>Gathering Results</h3>
                    <div id="gathering-results-container">
                        <p class="no-results">Select gathering details and click "Calculate Gathering" to see results.</p>
                    </div>
                </div>
            </div>
        `;
        
        // Add event listeners
        this.setupGatheringCalculatorEvents(container);
    },
    
    // Setup event listeners for the Gathering Calculator
    setupGatheringCalculatorEvents: function(container) {
        const calculateButton = container.querySelector('#calculate-gathering');
        const resetButton = container.querySelector('#reset-gathering');
        const biomeSelect = container.querySelector('#biome-select');
        const gatheringTypeSelect = container.querySelector('#gathering-type');
        const abilityModifierSelect = container.querySelector('#ability-modifier');
        const proficiencyBonusSelect = container.querySelector('#proficiency-bonus');
        const travelingCheck = container.querySelector('#traveling-check');
        const dedicatedCheck = container.querySelector('#dedicated-check');
        
        // Calculate gathering when button is clicked
        calculateButton.addEventListener('click', () => {
            this.calculateGathering(container);
        });
        
        // Reset form when reset button is clicked
        resetButton.addEventListener('click', () => {
            biomeSelect.value = '';
            gatheringTypeSelect.value = '';
            abilityModifierSelect.value = '0';
            proficiencyBonusSelect.value = '0';
            travelingCheck.checked = false;
            dedicatedCheck.checked = false;
            
            const resultsContainer = container.querySelector('#gathering-results-container');
            resultsContainer.innerHTML = '<p class="no-results">Select gathering details and click "Calculate Gathering" to see results.</p>';
        });
        
        // Update description when gathering type changes
        gatheringTypeSelect.addEventListener('change', () => {
            const gatheringType = gatheringTypeSelect.value;
            if (gatheringType) {
                const typeData = GatheringData.gatheringTypes.find(type => type.id === gatheringType);
                if (typeData) {
                    const descriptionElement = container.querySelector('.gathering-type-description');
                    if (descriptionElement) {
                        descriptionElement.textContent = typeData.description;
                    } else {
                        const descriptionDiv = document.createElement('div');
                        descriptionDiv.className = 'gathering-type-description';
                        descriptionDiv.textContent = typeData.description;
                        container.querySelector('.gathering-form').insertBefore(descriptionDiv, container.querySelector('.gathering-options').closest('.form-group'));
                    }
                }
            } else {
                const descriptionElement = container.querySelector('.gathering-type-description');
                if (descriptionElement) {
                    descriptionElement.remove();
                }
            }
        });
    },
    
    // Calculate gathering results
    calculateGathering: function(container) {
        const biome = container.querySelector('#biome-select').value;
        const gatheringType = container.querySelector('#gathering-type').value;
        const abilityModifier = parseInt(container.querySelector('#ability-modifier').value);
        const proficiencyBonus = parseInt(container.querySelector('#proficiency-bonus').value);
        const isTraveling = container.querySelector('#traveling-check').checked;
        const isDedicated = container.querySelector('#dedicated-check').checked;
        
        const resultsContainer = container.querySelector('#gathering-results-container');
        
        // Validate inputs
        if (!biome) {
            resultsContainer.innerHTML = '<p class="error-message">Please select a biome.</p>';
            return;
        }
        
        if (!gatheringType) {
            resultsContainer.innerHTML = '<p class="error-message">Please select a gathering type.</p>';
            return;
        }
        
        // Clear previous results
        resultsContainer.innerHTML = '';
        
        // Get the appropriate table based on biome and gathering type
        let table;
        switch (gatheringType) {
            case 'reagents':
                table = GatheringData.reagentTables[biome];
                break;
            case 'materials':
                table = GatheringData.materialTables[biome];
                break;
            case 'game':
                table = GatheringData.gameTables[biome];
                break;
        }
        
        if (!table) {
            resultsContainer.innerHTML = '<p class="error-message">No gathering data available for this biome and gathering type.</p>';
            return;
        }
        
        // Determine number of checks
        const numChecks = isDedicated ? 2 : 1;
        
        // Generate results
        let resultsHTML = '';
        
        for (let i = 0; i < numChecks; i++) {
            // Roll d100 to determine what is found
            const roll = GatheringData.rollD100();
            
            // Get result from table
            const result = GatheringData.getResultFromTable(table, roll);
            
            if (!result) {
                resultsHTML += `
                    <div class="gathering-result-section">
                        <h4>Check ${i + 1}</h4>
                        <p class="error-message">No result found for roll ${roll}.</p>
                    </div>
                `;
                continue;
            }
            
            // Process the result
            const processedResult = GatheringData.processResult(result);
            
            // Calculate ability check
            const dc = processedResult.dc;
            let abilityCheck = abilityModifier + proficiencyBonus;
            let rollResult = Math.floor(Math.random() * 20) + 1;
            
            // Apply disadvantage if traveling
            if (isTraveling) {
                const secondRoll = Math.floor(Math.random() * 20) + 1;
                rollResult = Math.min(rollResult, secondRoll);
            }
            
            const totalCheck = rollResult + abilityCheck;
            const isSuccess = totalCheck >= dc;
            
            resultsHTML += `
                <div class="gathering-result-section">
                    <h4>Check ${i + 1}</h4>
                    <p class="roll-result">Table Roll: ${roll}</p>
                    <p class="check-result">Ability Check: ${rollResult} + ${abilityCheck} = ${totalCheck} vs DC ${dc} (${isSuccess ? 'Success' : 'Failure'})</p>
                    
                    <div class="gathering-result-items">
            `;
            
            if (isSuccess && processedResult.quantity > 0) {
                const itemIcon = this.getItemIcon(processedResult.item);
                
                resultsHTML += `
                    <div class="gathering-result-item">
                        <div class="item-icon">${itemIcon}</div>
                        <div class="item-details">
                            <span class="item-name">${processedResult.item}</span>
                            <span class="item-quantity">Quantity: ${processedResult.quantity}</span>
                        </div>
                    </div>
                `;
            } else {
                resultsHTML += `
                    <p class="no-results">${isSuccess ? 'Nothing useful found.' : 'Failed to gather anything.'}</p>
                `;
            }
            
            resultsHTML += `
                    </div>
                </div>
            `;
        }
        
        resultsContainer.innerHTML = resultsHTML;
    },
    
    // Get appropriate icon for item type
    getItemIcon: function(itemName) {
        const itemNameLower = itemName.toLowerCase();
        
        // Essences
        if (itemNameLower.includes('arcane essence')) {
            return `<i class="fas fa-fire-alt" data-essence="arcane"></i>`;
        } else if (itemNameLower.includes('divine essence')) {
            return `<i class="fas fa-sun" data-essence="divine"></i>`;
        } else if (itemNameLower.includes('primal essence')) {
            return `<i class="fas fa-leaf" data-essence="primal"></i>`;
        } else if (itemNameLower.includes('psionic essence')) {
            return `<i class="fas fa-brain" data-essence="psionic"></i>`;
        }
        
        // Reagents
        if (itemNameLower.includes('curative reagent')) {
            return `<i class="fas fa-flask" data-reagent="curative"></i>`;
        } else if (itemNameLower.includes('poisonous reagent')) {
            return `<i class="fas fa-skull-crossbones" data-reagent="poisonous"></i>`;
        } else if (itemNameLower.includes('reactive reagent')) {
            return `<i class="fas fa-vial" data-reagent="reactive"></i>`;
        }
        
        // Materials
        if (itemNameLower.includes('leather') || itemNameLower.includes('hide')) {
            return '<i class="fas fa-scroll"></i>';
        } else if (itemNameLower.includes('ingot') || itemNameLower.includes('metal')) {
            return '<i class="fas fa-hammer"></i>';
        } else if (itemNameLower.includes('wood') || itemNameLower.includes('branch')) {
            return '<i class="fas fa-tree"></i>';
        } else if (itemNameLower.includes('cloth') || itemNameLower.includes('fabric')) {
            return '<i class="fas fa-tshirt"></i>';
        } else if (itemNameLower.includes('herb') || itemNameLower.includes('plant')) {
            return '<i class="fas fa-seedling"></i>';
        } else if (itemNameLower.includes('gem') || itemNameLower.includes('crystal')) {
            return '<i class="fas fa-gem"></i>';
        } else if (itemNameLower.includes('bone') || itemNameLower.includes('tooth')) {
            return '<i class="fas fa-bone"></i>';
        } else if (itemNameLower.includes('scale') || itemNameLower.includes('carapace')) {
            return '<i class="fas fa-shield-alt"></i>';
        } else if (itemNameLower.includes('part') || itemNameLower.includes('supply')) {
            return '<i class="fas fa-cogs"></i>';
        } else if (itemNameLower.includes('ink') || itemNameLower.includes('parchment')) {
            return '<i class="fas fa-feather-alt"></i>';
        }
        
        // Default icon
        return '<i class="fas fa-cube"></i>';
    },
    
    // Render the Loot Generator tool
    renderLootGenerator: function(container) {
        container.innerHTML = `
            <div class="loot-generator-container">
                <h2>Humanoid Loot Generator</h2>
                <p class="tool-description">Generate loot from humanoid creatures based on their Challenge Rating (CR).</p>
                
                <div class="loot-form">
                    <div class="form-group">
                        <label for="cr-range">Challenge Rating Range:</label>
                        <select id="cr-range" class="loot-select">
                            <option value="">-- Select CR Range --</option>
                            ${LootData.crRanges.map(range => `<option value="${range.id}">${range.name} (${range.description})</option>`).join('')}
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Loot Options:</label>
                        <div class="loot-options">
                            <label class="checkbox-container">
                                <input type="checkbox" id="replace-coins" checked>
                                <span class="checkbox-label">Replace Coins with Materials</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <button id="generate-loot" class="primary-button">Generate Loot</button>
                        <button id="reset-loot" class="secondary-button">Reset</button>
                    </div>
                </div>
                
                <div class="loot-results">
                    <h3>Loot Results</h3>
                    <div id="loot-results-container">
                        <p class="no-results">Select a CR range and click "Generate Loot" to see results.</p>
                    </div>
                </div>
            </div>
        `;
        
        // Add event listeners
        this.setupLootGeneratorEvents(container);
    },
    
    // Setup event listeners for the Loot Generator
    setupLootGeneratorEvents: function(container) {
        const generateButton = container.querySelector('#generate-loot');
        const resetButton = container.querySelector('#reset-loot');
        const crRangeSelect = container.querySelector('#cr-range');
        const replaceCoinsCheck = container.querySelector('#replace-coins');
        
        // Generate loot when button is clicked
        generateButton.addEventListener('click', () => {
            this.generateLoot(container);
        });
        
        // Reset form when reset button is clicked
        resetButton.addEventListener('click', () => {
            crRangeSelect.value = '';
            replaceCoinsCheck.checked = true;
            
            const resultsContainer = container.querySelector('#loot-results-container');
            resultsContainer.innerHTML = '<p class="no-results">Select a CR range and click "Generate Loot" to see results.</p>';
        });
    },
    
    // Generate loot based on CR range
    generateLoot: function(container) {
        const crRangeSelect = container.querySelector('#cr-range');
        const replaceCoinsCheck = container.querySelector('#replace-coins');
        const resultsContainer = container.querySelector('#loot-results-container');
        
        // Validate inputs
        if (!crRangeSelect.value) {
            resultsContainer.innerHTML = '<p class="error-message">Please select a Challenge Rating range.</p>';
            return;
        }
        
        const crRange = crRangeSelect.value;
        const replaceCoins = replaceCoinsCheck.checked;
        
        // Get the appropriate loot table
        const lootTable = LootData.individualTreasureTables[crRange];
        if (!lootTable) {
            resultsContainer.innerHTML = '<p class="error-message">Invalid CR range selected.</p>';
            return;
        }
        
        // Roll on the loot table
        const roll = LootData.rollD100();
        const lootResult = LootData.getResultFromTable(lootTable, roll);
        
        if (!lootResult) {
            resultsContainer.innerHTML = '<p class="error-message">Failed to generate loot. Please try again.</p>';
            return;
        }
        
        // Process materials and coinage
        const materials = LootData.processMaterials(lootResult.materials);
        const coinage = replaceCoins ? [] : LootData.processCoinage(lootResult.coinage);
        
        // Build the result HTML
        let resultHTML = `
            <div class="loot-roll-info">
                <p><strong>Roll:</strong> ${roll} (${lootResult.range[0]}-${lootResult.range[1]})</p>
                <p><strong>Value:</strong> ${lootResult.value}</p>
            </div>
            <div class="loot-items">
        `;
        
        // Add materials to the result
        if (materials.length > 0) {
            resultHTML += `<h4>Materials</h4><ul class="loot-materials-list">`;
            materials.forEach(material => {
                const icon = this.getItemIcon(material.name);
                
                resultHTML += `
                    <li>
                        <span class="item-icon">${icon}</span>
                        <span class="item-quantity">${material.quantity}</span>
                        <span class="item-name">${material.name}</span>
                    </li>
                `;
            });
            resultHTML += `</ul>`;
        }
        
        // Add coinage to the result if not replaced
        if (coinage.length > 0) {
            resultHTML += `<h4>Coinage</h4><ul class="loot-coinage-list">`;
            coinage.forEach(coin => {
                let coinIcon = '';
                switch (coin.type) {
                    case 'cp': coinIcon = '<i class="fas fa-coins"></i>'; break; // Copper
                    case 'sp': coinIcon = '<i class="fas fa-coins"></i>'; break; // Silver
                    case 'gp': coinIcon = '<i class="fas fa-coins"></i>'; break; // Gold
                    case 'pp': coinIcon = '<i class="fas fa-coins"></i>'; break; // Platinum
                    default: coinIcon = '<i class="fas fa-coins"></i>';
                }
                
                resultHTML += `
                    <li>
                        <span class="item-icon" data-coin="${coin.type}">${coinIcon}</span>
                        <span class="item-quantity">${coin.quantity}</span>
                        <span class="item-name">${coin.type}</span>
                    </li>
                `;
            });
            resultHTML += `</ul>`;
        }
        
        // Add note about coin replacement
        if (replaceCoins && lootResult.coinage) {
            resultHTML += `
                <div class="loot-note">
                    <p><em>Note: Coins have been replaced with materials as per your selection.</em></p>
                    <p><em>Original coinage would have been: ${lootResult.coinage}</em></p>
                </div>
            `;
        }
        
        resultHTML += `</div>`;
        
        // Display the result
        resultsContainer.innerHTML = resultHTML;
    },
    
    // Render the Remnant Finder tool
    renderRemnantFinder: function(container) {
        container.innerHTML = `
            <div class="remnant-finder-container">
                <div class="remnant-finder-form">
                    <h2>Remnant Finder</h2>
                    <p class="tool-description">Find magical remnants from creatures that don't leave corpses (Celestials, Elementals, Fiends, etc.)</p>
                    
                    <div class="form-group">
                        <label for="creature-type">Creature Type:</label>
                        <select id="creature-type" class="loot-select">
                            <option value="Celestial">Celestial</option>
                            <option value="Fiend">Fiend</option>
                            <option value="Elemental">Elemental</option>
                            <option value="Incorporeal Undead">Incorporeal Undead</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="creature-cr">Challenge Rating (CR):</label>
                        <input type="number" id="creature-cr" class="loot-select" min="0" value="1" step="1">
                    </div>
                    
                    <div class="form-group">
                        <label for="creature-count">Number of Creatures:</label>
                        <input type="number" id="creature-count" class="loot-select" min="1" value="1" max="10">
                    </div>
                    
                    <div class="form-actions">
                        <button id="generate-remnants" class="primary-button">Find Remnants</button>
                    </div>
                </div>
                
                <div class="remnant-finder-result" style="display: none;">
                    <h3>Remnants Found</h3>
                    <div id="remnant-result-container"></div>
                </div>
            </div>
        `;
        
        this.setupRemnantFinderEvents(container);
    },
    
    // Setup event listeners for the Remnant Finder
    setupRemnantFinderEvents: function(container) {
        const generateButton = container.querySelector('#generate-remnants');
        if (generateButton) {
            generateButton.addEventListener('click', () => {
                this.generateRemnants(container);
            });
        }
    },
    
    // Generate remnants based on creature type and CR
    generateRemnants: function(container) {
        const creatureType = container.querySelector('#creature-type').value;
        const creatureCR = parseFloat(container.querySelector('#creature-cr').value);
        const creatureCount = parseInt(container.querySelector('#creature-count').value);
        
        // Determine CR range
        let crRange;
        if (creatureCR <= 4) {
            crRange = "0-4";
        } else if (creatureCR <= 10) {
            crRange = "5-10";
        } else if (creatureCR <= 16) {
            crRange = "11-16";
        } else {
            crRange = "17+";
        }
        
        // Get the appropriate table
        const table = RemnantData.remnantTables[crRange][creatureType];
        
        // Generate results
        const results = [];
        for (let i = 0; i < creatureCount; i++) {
            const roll = RemnantData.rollD100();
            const result = RemnantData.getResultFromTable(table, roll);
            
            if (result !== "—" && result !== "No result found") {
                results.push({
                    roll: roll,
                    item: result
                });
            }
        }
        
        // Display results
        const resultContainer = container.querySelector('#remnant-result-container');
        const resultSection = container.querySelector('.remnant-finder-result');
        
        if (results.length === 0) {
            resultContainer.innerHTML = `
                <div class="no-remnants-message">
                    <p>No remnants were found from these creatures.</p>
                </div>
            `;
        } else {
            let resultHTML = `<ul class="remnant-list">`;
            
            // Group similar items
            const groupedResults = {};
            results.forEach(result => {
                if (!groupedResults[result.item]) {
                    groupedResults[result.item] = 1;
                } else {
                    groupedResults[result.item]++;
                }
            });
            
            // Create list items
            Object.keys(groupedResults).forEach(item => {
                const quantity = groupedResults[item];
                const itemNameLower = item.toLowerCase();
                
                // Determine the type of item for data attribute
                let dataAttribute = '';
                if (itemNameLower.includes('essence')) {
                    const essenceType = itemNameLower.includes('arcane') ? 'arcane' : 
                                     itemNameLower.includes('divine') ? 'divine' : 
                                     itemNameLower.includes('primal') ? 'primal' : 
                                     itemNameLower.includes('psionic') ? 'psionic' : '';
                    dataAttribute = `data-essence="${essenceType}"`;
                } else if (itemNameLower.includes('reagent')) {
                    const reagentType = itemNameLower.includes('curative') ? 'curative' : 
                                     itemNameLower.includes('poisonous') ? 'poisonous' : 
                                     itemNameLower.includes('reactive') ? 'reactive' : '';
                    dataAttribute = `data-reagent="${reagentType}"`;
                }
                
                const itemIcon = this.getItemIcon(item);
                
                resultHTML += `
                    <li>
                        <span class="item-icon" ${dataAttribute}>${itemIcon}</span>
                        <div class="item-details">
                            <span class="item-name">${item}</span>
                            <span class="item-quantity">Quantity: ${quantity}</span>
                        </div>
                    </li>
                `;
            });
            
            resultHTML += `</ul>`;
            resultContainer.innerHTML = resultHTML;
        }
        
        // Show the result section
        resultSection.style.display = 'block';
    },
};

// No export statement - the object is now globally available
