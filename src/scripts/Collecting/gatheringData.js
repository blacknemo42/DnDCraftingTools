/**
 * Gathering Data for D&D Crafting Tools
 * Contains biome tables and gathering mechanics based on Crafting 1.0.6
 */

const GatheringData = {
    // Biomes available for gathering
    biomes: [
        { id: 'forest', name: 'Forest' },
        { id: 'desert', name: 'Desert' },
        { id: 'grasslands', name: 'Grasslands' },
        { id: 'marsh', name: 'Marsh' },
        { id: 'mountains', name: 'Mountains' },
        { id: 'caves', name: 'Caves' },
        { id: 'underground', name: 'Underground' },
        { id: 'jungle', name: 'Jungle' },
        { id: 'shore', name: 'Shore' },
        { id: 'tundra', name: 'Tundra' },
        { id: 'feylands', name: 'Feylands' },
        { id: 'shadowlands', name: 'Shadowlands' },
        { id: 'elemental', name: 'Elemental Plane' },
        { id: 'lower', name: 'Lower Plane' },
        { id: 'upper', name: 'Upper Plane' },
        { id: 'outer', name: 'Outer Plane' }
    ],

    // Gathering types
    gatheringTypes: [
        { id: 'reagents', name: 'Gather Reagents', description: 'Harvested with Wisdom check. Add proficiency bonus if proficient with Herbalism kit.' },
        { id: 'materials', name: 'Search for Materials', description: 'Harvested with Strength, Dexterity, or Wisdom check. Add proficiency bonus if proficient with Survival.' },
        { id: 'game', name: 'Hunt Game', description: 'Gathered with Dexterity or Wisdom check. Add proficiency bonus if proficient with Survival.' }
    ],

    // Reagent tables by biome
    reagentTables: {
        forest: [
            { range: [1, 10], result: 'Nothing found', dc: 0 },
            { range: [11, 20], result: 'Nothing found', dc: 10 },
            { range: [21, 40], result: 'common reactive reagent', dc: 10 },
            { range: [41, 50], result: 'common curative reagent', dc: 10 },
            { range: [51, 60], result: 'common reactive reagent', dc: 10 },
            { range: [61, 70], result: 'common curative reagent', dc: 10 },
            { range: [71, 80], result: '1d4 common curative reagents', dc: 10 },
            { range: [81, 90], result: 'common curative reagent', dc: 10 },
            { range: [91, 95], result: 'uncommon poisonous reagent', dc: 10 },
            { range: [96, 100], result: 'common primal essence', dc: 10 }
        ],
        desert: [
            { range: [1, 10], result: 'Nothing found', dc: 0 },
            { range: [11, 20], result: 'Nothing found', dc: 10 },
            { range: [21, 40], result: 'common curative reagent', dc: 10 },
            { range: [41, 50], result: 'common poisonous reagent', dc: 10 },
            { range: [51, 60], result: 'common poisonous reagent', dc: 10 },
            { range: [61, 70], result: 'common reactive reagent', dc: 10 },
            { range: [71, 80], result: '1d2 common reactive reagents', dc: 10 },
            { range: [81, 90], result: 'common reactive reagent', dc: 10 },
            { range: [91, 95], result: 'uncommon reactive reagent', dc: 10 },
            { range: [96, 100], result: 'common primal essence', dc: 10 }
        ],
        grasslands: [
            { range: [1, 10], result: 'Nothing found', dc: 0 },
            { range: [11, 20], result: 'Nothing found', dc: 10 },
            { range: [21, 40], result: 'common curative reagent', dc: 10 },
            { range: [41, 50], result: 'common poisonous reagent', dc: 10 },
            { range: [51, 60], result: 'common poisonous reagent', dc: 10 },
            { range: [61, 70], result: 'common curative reagent', dc: 10 },
            { range: [71, 80], result: '1d2 common curative reagents', dc: 10 },
            { range: [81, 90], result: 'common curative reagent', dc: 10 },
            { range: [91, 95], result: 'uncommon curative reagent', dc: 10 },
            { range: [96, 100], result: 'common arcane essence', dc: 10 }
        ],
        marsh: [
            { range: [1, 10], result: 'Nothing found', dc: 0 },
            { range: [11, 20], result: 'Nothing found', dc: 10 },
            { range: [21, 40], result: 'common poisonous reagent', dc: 10 },
            { range: [41, 50], result: 'common poisonous reagent', dc: 10 },
            { range: [51, 60], result: 'common poisonous reagent', dc: 10 },
            { range: [61, 70], result: '1d4 common poisonous reagents', dc: 10 },
            { range: [71, 80], result: '1d4 common poisonous reagents', dc: 10 },
            { range: [81, 90], result: 'common poisonous reagent', dc: 10 },
            { range: [91, 95], result: 'uncommon poisonous reagent', dc: 10 },
            { range: [96, 100], result: 'common divine essence', dc: 10 }
        ],
        mountains: [
            { range: [1, 10], result: 'Nothing found', dc: 0 },
            { range: [11, 20], result: 'Nothing found', dc: 10 },
            { range: [21, 40], result: 'common reactive reagent', dc: 10 },
            { range: [41, 50], result: 'common reactive reagent', dc: 10 },
            { range: [51, 60], result: 'common reactive reagent', dc: 10 },
            { range: [61, 70], result: '1d4 common reactive reagents', dc: 10 },
            { range: [71, 80], result: '1d2 common reactive reagents', dc: 10 },
            { range: [81, 90], result: 'common reactive reagent', dc: 10 },
            { range: [91, 95], result: 'uncommon reactive reagent', dc: 10 },
            { range: [96, 100], result: 'common primal essence', dc: 10 }
        ],
        caves: [
            { range: [1, 10], result: 'Nothing found', dc: 0 },
            { range: [11, 30], result: 'common reactive reagent', dc: 12 },
            { range: [31, 50], result: 'common poisonous reagent', dc: 12 },
            { range: [51, 60], result: '1d2 common poisonous reagents', dc: 12 },
            { range: [61, 70], result: 'uncommon reactive reagent', dc: 12 },
            { range: [71, 80], result: 'uncommon poisonous reagent', dc: 12 },
            { range: [81, 90], result: '1d2 common curative reagents', dc: 12 },
            { range: [91, 95], result: 'uncommon primal essence', dc: 12 },
            { range: [96, 100], result: 'uncommon primal essence', dc: 12 }
        ],
        underground: [
            { range: [1, 10], result: 'Nothing found', dc: 0 },
            { range: [11, 30], result: 'common poisonous reagent', dc: 12 },
            { range: [31, 50], result: 'common reactive reagent', dc: 12 },
            { range: [51, 60], result: 'common poisonous reagent', dc: 12 },
            { range: [61, 70], result: 'uncommon reactive reagent', dc: 12 },
            { range: [71, 80], result: 'uncommon reactive reagent', dc: 12 },
            { range: [81, 90], result: 'common curative reagent', dc: 12 },
            { range: [91, 95], result: 'uncommon reactive reagent', dc: 12 },
            { range: [96, 100], result: '1d4 common reactive reagents', dc: 12 }
        ],
        jungle: [
            { range: [1, 10], result: 'Nothing found', dc: 0 },
            { range: [11, 30], result: 'common curative reagent', dc: 12 },
            { range: [31, 50], result: 'common reactive reagent', dc: 12 },
            { range: [51, 60], result: 'common poisonous reagent', dc: 12 },
            { range: [61, 70], result: 'uncommon curative reagent', dc: 12 },
            { range: [71, 80], result: 'uncommon reactive reagent', dc: 12 },
            { range: [81, 90], result: '1d2 common curative reagents', dc: 12 },
            { range: [91, 95], result: 'uncommon reactive reagent', dc: 12 },
            { range: [96, 100], result: 'uncommon reactive reagent', dc: 12 }
        ],
        shore: [
            { range: [1, 10], result: 'Nothing found', dc: 0 },
            { range: [11, 30], result: 'common reactive reagent', dc: 12 },
            { range: [31, 50], result: 'common curative reagent', dc: 12 },
            { range: [51, 60], result: 'common reactive reagent', dc: 12 },
            { range: [61, 70], result: 'uncommon reactive reagent', dc: 12 },
            { range: [71, 80], result: 'uncommon reactive reagent', dc: 12 },
            { range: [81, 90], result: 'common curative reagent', dc: 12 },
            { range: [91, 95], result: 'uncommon curative reagent', dc: 12 },
            { range: [96, 100], result: 'uncommon reactive reagent', dc: 12 }
        ],
        tundra: [
            { range: [1, 10], result: 'Nothing found', dc: 0 },
            { range: [11, 30], result: 'common reactive reagent', dc: 12 },
            { range: [31, 50], result: 'common curative reagent', dc: 12 },
            { range: [51, 60], result: 'common reactive reagent', dc: 12 },
            { range: [61, 70], result: 'uncommon curative reagent', dc: 12 },
            { range: [71, 80], result: 'uncommon reactive reagent', dc: 12 },
            { range: [81, 90], result: 'common curative reagent', dc: 12 },
            { range: [91, 95], result: 'uncommon reactive reagent', dc: 12 },
            { range: [96, 100], result: 'uncommon reactive reagent', dc: 12 }
        ],
        feylands: [
            { range: [1, 20], result: 'common curative reagent', dc: 14 },
            { range: [21, 40], result: 'common reactive reagent', dc: 14 },
            { range: [41, 60], result: '1d4 common curative reagent', dc: 14 },
            { range: [61, 80], result: 'uncommon curative reagent', dc: 14 },
            { range: [81, 95], result: 'uncommon reactive reagent', dc: 14 },
            { range: [96, 100], result: 'rare curative reagent', dc: 14 }
        ],
        shadowlands: [
            { range: [1, 20], result: 'common poisonous reagent', dc: 14 },
            { range: [21, 40], result: 'common reactive reagent', dc: 14 },
            { range: [41, 60], result: '1d4 common poisonous reagent', dc: 14 },
            { range: [61, 80], result: 'uncommon poisonous reagent', dc: 14 },
            { range: [81, 95], result: 'uncommon reactive reagent', dc: 14 },
            { range: [96, 100], result: 'rare poisonous reagent', dc: 14 }
        ],
        elemental: [
            { range: [1, 20], result: 'common reactive reagent', dc: 14 },
            { range: [21, 40], result: 'common reactive reagent', dc: 14 },
            { range: [41, 60], result: 'common curative reagent', dc: 14 },
            { range: [61, 80], result: 'uncommon reactive reagent', dc: 14 },
            { range: [81, 95], result: 'uncommon reactive reagent', dc: 14 },
            { range: [96, 100], result: 'rare reactive reagent', dc: 14 }
        ],
        lower: [
            { range: [1, 20], result: 'common curative reagent', dc: 14 },
            { range: [21, 40], result: 'common reactive reagent', dc: 14 },
            { range: [41, 60], result: 'common poisonous reagent', dc: 14 },
            { range: [61, 80], result: 'uncommon poisonous reagent', dc: 14 },
            { range: [81, 95], result: 'uncommon reactive reagent', dc: 14 },
            { range: [96, 100], result: 'rare poisonous reagent', dc: 14 }
        ],
        upper: [
            { range: [1, 20], result: 'common reactive reagent', dc: 14 },
            { range: [21, 40], result: 'common reactive reagent', dc: 14 },
            { range: [41, 60], result: '1d4 common reactive reagent', dc: 14 },
            { range: [61, 80], result: '1d4 common curative reagent', dc: 14 },
            { range: [81, 95], result: 'uncommon curative reagent', dc: 14 },
            { range: [96, 100], result: 'rare curative reagent', dc: 14 }
        ],
        outer: [
            { range: [1, 20], result: 'common reactive reagent', dc: 14 },
            { range: [21, 40], result: 'common reactive reagent', dc: 14 },
            { range: [41, 60], result: '1d4 common curative reagent', dc: 14 },
            { range: [61, 80], result: '1d4 common reactive reagent', dc: 14 },
            { range: [81, 95], result: 'uncommon reactive reagent', dc: 14 },
            { range: [96, 100], result: 'rare reactive reagent', dc: 14 }
        ]
    },

    // Material tables by biome
    materialTables: {
        forest: [
            { range: [1, 20], result: '1d4 x 10 firewood', dc: 10 },
            { range: [21, 40], result: '1d12 scales', dc: 10 },
            { range: [41, 60], result: 'uncommon supplies', dc: 10 },
            { range: [61, 80], result: 'large carapace', dc: 10 },
            { range: [81, 95], result: 'rare supplies', dc: 10 },
            { range: [96, 100], result: 'common arcane essence', dc: 10 }
        ],
        desert: [
            { range: [1, 20], result: 'Nothing found', dc: 10 },
            { range: [21, 40], result: '1d12 wood scraps', dc: 10 },
            { range: [41, 60], result: '1d4 hides', dc: 10 },
            { range: [61, 80], result: 'supplies', dc: 10 },
            { range: [81, 95], result: 'rare suppplies', dc: 10 },
            { range: [96, 100], result: 'common divine essence', dc: 10 }
        ],
        grasslands: [
            { range: [1, 20], result: '1d4 firewood', dc: 10 },
            { range: [21, 40], result: '1d12 wood scraps', dc: 10 },
            { range: [41, 60], result: '1d4 quality branches', dc: 10 },
            { range: [61, 80], result: 'mithril ore', dc: 10 },
            { range: [81, 95], result: 'uncommon branch', dc: 10 },
            { range: [96, 100], result: 'common primal essence', dc: 10 }
        ],
        marsh: [
            { range: [1, 20], result: '1d4 firewood', dc: 10 },
            { range: [21, 40], result: '1d12 fletching', dc: 10 },
            { range: [41, 60], result: 'adamant ore', dc: 10 },
            { range: [61, 80], result: 'uncommon branch', dc: 10 },
            { range: [81, 95], result: 'uncommon branch', dc: 10 },
            { range: [96, 100], result: 'common primal essence', dc: 10 }
        ],
        mountains: [
            { range: [1, 20], result: '1d4 firewood', dc: 10 },
            { range: [21, 40], result: '1d4 supplies', dc: 10 },
            { range: [41, 60], result: '1d4 quality branches', dc: 10 },
            { range: [61, 80], result: 'uncommon supplies', dc: 10 },
            { range: [81, 95], result: '1d12 common branch', dc: 10 },
            { range: [96, 100], result: 'common primal essence', dc: 10 }
        ],
        caves: [
            { range: [1, 20], result: 'adamant ore', dc: 12 },
            { range: [21, 40], result: 'mithril ore', dc: 12 },
            { range: [41, 60], result: 'discarded armor padding', dc: 12 },
            { range: [61, 80], result: 'large carapace', dc: 12 },
            { range: [81, 95], result: '1d4 mithril ore', dc: 12 },
            { range: [96, 100], result: 'common primal essence', dc: 12 }
        ],
        underground: [
            { range: [1, 20], result: 'shoft haft', dc: 12 },
            { range: [21, 40], result: 'uncommon supplies', dc: 12 },
            { range: [41, 60], result: 'parts', dc: 12 },
            { range: [61, 80], result: 'uncommon branch', dc: 12 },
            { range: [81, 95], result: 'large carapace', dc: 12 },
            { range: [96, 100], result: 'common arcane essence', dc: 12 }
        ],
        jungle: [
            { range: [1, 20], result: 'wood scraps', dc: 12 },
            { range: [21, 40], result: '1d4 supplies', dc: 12 },
            { range: [41, 60], result: '1d4 common branches', dc: 12 },
            { range: [61, 80], result: 'uncommon branch', dc: 12 },
            { range: [81, 95], result: 'uncommon branch', dc: 12 },
            { range: [96, 100], result: 'common primal essence', dc: 12 }
        ],
        shore: [
            { range: [1, 20], result: 'firewood', dc: 12 },
            { range: [21, 40], result: 'medium carapace', dc: 12 },
            { range: [41, 60], result: 'rare supplies', dc: 12 },
            { range: [61, 80], result: '1d4 common branches', dc: 12 },
            { range: [81, 95], result: 'supplies', dc: 12 },
            { range: [96, 100], result: 'common primal essence', dc: 12 }
        ],
        tundra: [
            { range: [1, 20], result: 'firewood', dc: 12 },
            { range: [21, 40], result: '1d4 supplies', dc: 12 },
            { range: [41, 60], result: 'slighty rusty fancy parts', dc: 12 },
            { range: [61, 80], result: 'uncommon supplies', dc: 12 },
            { range: [81, 95], result: '1d4 icesteel ore', dc: 12 },
            { range: [96, 100], result: 'common primal essence', dc: 12 }
        ]
    },

    // Game tables by biome
    gameTables: {
        forest: [
            { range: [1, 30], result: 'fresh ingredients', dc: 10 },
            { range: [31, 60], result: '1d4 fresh ingredients', dc: 10 },
            { range: [61, 90], result: 'supplies', dc: 10 },
            { range: [91, 100], result: '1d6 fresh ingredients 1 large carapace', dc: 10 }
        ],
        desert: [
            { range: [1, 30], result: 'Nothing found', dc: 10 },
            { range: [31, 60], result: 'supplies', dc: 10 },
            { range: [61, 90], result: '1d4 fresh ingredients hide', dc: 10 },
            { range: [91, 100], result: '1d8 fresh ingredients 1d4 hides', dc: 10 }
        ],
        grasslands: [
            { range: [1, 30], result: 'fresh ingredients', dc: 10 },
            { range: [31, 60], result: 'supplies', dc: 10 },
            { range: [61, 90], result: '1d4 fresh ingredients', dc: 10 },
            { range: [91, 100], result: '1d8 fresh ingredients 1d4 hides', dc: 10 }
        ],
        marsh: [
            { range: [1, 30], result: 'Nothing found', dc: 10 },
            { range: [31, 60], result: 'Nothing found', dc: 10 },
            { range: [61, 90], result: '1d4 supplies', dc: 10 },
            { range: [91, 100], result: 'fresh ingredients', dc: 10 }
        ],
        mountains: [
            { range: [1, 30], result: 'Nothing found', dc: 10 },
            { range: [31, 60], result: 'Nothing found', dc: 10 },
            { range: [61, 90], result: '1d4 fresh ingredients', dc: 10 },
            { range: [91, 100], result: '1d4 fresh ingredients 1 hide', dc: 10 }
        ],
        caves: [
            { range: [1, 30], result: 'fresh ingredients', dc: 12 },
            { range: [31, 60], result: 'fresh ingredients', dc: 12 },
            { range: [61, 90], result: '1d4 hides', dc: 12 },
            { range: [91, 100], result: '1d4 fresh ingredients', dc: 12 }
        ],
        underground: [
            { range: [1, 30], result: 'supplies', dc: 12 },
            { range: [31, 60], result: 'fresh ingredients', dc: 12 },
            { range: [61, 90], result: '1d4 hides', dc: 12 },
            { range: [91, 100], result: '1d4 fresh ingredients', dc: 12 }
        ],
        jungle: [
            { range: [1, 30], result: 'Nothing found', dc: 12 },
            { range: [31, 60], result: '1d4 fresh ingredients', dc: 12 },
            { range: [61, 90], result: 'supplies', dc: 12 },
            { range: [91, 100], result: '1d8 fresh ingredients', dc: 12 }
        ],
        shore: [
            { range: [1, 30], result: '1d4 fresh ingredients', dc: 12 },
            { range: [31, 60], result: 'fresh water', dc: 12 },
            { range: [61, 90], result: '1 rare supplies', dc: 12 },
            { range: [91, 100], result: '1 supplies', dc: 12 }
        ],
        tundra: [
            { range: [1, 30], result: 'fresh ingredients', dc: 12 },
            { range: [31, 60], result: 'fresh ingredients', dc: 12 },
            { range: [61, 90], result: '1d6 fresh ingredients, 1d4 hides', dc: 12 },
            { range: [91, 100], result: '1d4 fresh ingredients 1 hide', dc: 12 }
        ]
    },

    // Helper function to roll a d100
    rollD100: function() {
        return Math.floor(Math.random() * 100) + 1;
    },

    // Helper function to roll dice based on notation (e.g., "2d6")
    rollDice: function(diceNotation) {
        if (!diceNotation || diceNotation === 'Nothing found') return 0;
        
        // Extract dice count and sides
        const match = diceNotation.match(/(\d+)d(\d+)/);
        if (!match) return 1; // If no dice notation, return 1 (single item)
        
        const [_, numDice, diceSides] = match;
        let total = 0;
        
        // Roll the dice
        for (let i = 0; i < numDice; i++) {
            total += Math.floor(Math.random() * diceSides) + 1;
        }
        
        return total;
    },

    // Get result from a table based on a roll
    getResultFromTable: function(table, roll) {
        for (const entry of table) {
            if (roll >= entry.range[0] && roll <= entry.range[1]) {
                return entry;
            }
        }
        return null;
    },

    // Process the result to extract quantity and item name
    processResult: function(result) {
        if (!result || result.result === 'Nothing found') {
            return { item: 'Nothing found', quantity: 0, dc: 0 };
        }

        const resultText = result.result;
        let quantity = 1;
        let item = resultText;

        // Check for quantity in the format "1d4 items"
        const diceMatch = resultText.match(/(\d+d\d+)\s+(.+)/);
        if (diceMatch) {
            const diceNotation = diceMatch[1];
            quantity = this.rollDice(diceNotation);
            item = diceMatch[2];
        }
        
        // Check for simple numeric quantity like "1d4"
        const numericMatch = resultText.match(/^(\d+)\s+(.+)/);
        if (numericMatch) {
            quantity = parseInt(numericMatch[1]);
            item = numericMatch[2];
        }

        return { item, quantity, dc: result.dc };
    }
};
