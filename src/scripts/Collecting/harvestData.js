/**
 * Harvesting data for the Harvest Generator tool
 * Based on Crafting 1.0.6 document
 */

const HarvestData = {
    // Basic Harvesting (Meat and Hides)
    basicHarvesting: {
        tiny: {
            dc: 0, // No check needed for tiny creatures
            hide: "None",
            meat: "None"
        },
        small: {
            dc: 12,
            hide: "1 hide or 1 medium carapace or 2d6 scales",
            meat: "1 common meat"
        },
        medium: {
            dc: 10,
            hide: "1d4 hide scraps",
            meat: "1d4 common meat"
        },
        large: {
            dc: 12,
            hide: "5 hides or 1 large carapace or 3d6 scales",
            meat: "2d6 common meat"
        },
        huge: {
            dc: 14,
            hide: "10 hides or 2 large carapaces or 6d6 scales",
            meat: "4d6 common meat"
        },
        gargantuan: {
            dc: 16,
            hide: "20 hides or 4 large carapaces or 12d6 scales",
            meat: "8d6 common meat"
        }
    },
    
    // Exotic Harvesting (CR 0-4)
    exoticHarvestingCR0to4: {
        dc: 8,
        dragonMonstrosities: [
            { range: [1, 20], result: "Common poisonous reagent" },
            { range: [21, 50], result: "Fancy parts" },
            { range: [51, 70], result: "Common reactive reagent" },
            { range: [71, 80], result: "Common curative reagent" },
            { range: [81, 100], result: "Common primal essence" }
        ],
        construct: [
            { range: [1, 20], result: "Fancy parts" },
            { range: [21, 50], result: "Common reactive reagent" },
            { range: [51, 70], result: "Fancy parts" },
            { range: [71, 80], result: "Common arcane essence" },
            { range: [81, 100], result: "Common reactive reagent" }
        ],
        aberration: [
            { range: [1, 20], result: "None" },
            { range: [21, 50], result: "Common poisonous reagent" },
            { range: [51, 70], result: "Common curative reagent" },
            { range: [71, 80], result: "Common primal essence" },
            { range: [81, 100], result: "Common poisonous reagent" }
        ],
        undead: [
            { range: [1, 20], result: "None" },
            { range: [21, 50], result: "None" },
            { range: [51, 70], result: "Fancy parts" },
            { range: [71, 80], result: "Common arcane essence" },
            { range: [81, 100], result: "Common reactive reagent" }
        ],
        plant: [
            { range: [1, 20], result: "None" },
            { range: [21, 50], result: "Common curative reagent" },
            { range: [51, 70], result: "Common curative reagent" },
            { range: [71, 80], result: "None" },
            { range: [81, 100], result: "Common poisonous reagent" }
        ]
    },
    
    // Exotic Harvesting (CR 5-10)
    exoticHarvestingCR5to10: {
        dc: 10,
        dragonMonstrosities: [
            { range: [1, 30], result: "Uncommon reactive reagent" },
            { range: [31, 60], result: "Uncommon curative reagent" },
            { range: [61, 80], result: "1d4 uncommon poisonous reagents" },
            { range: [81, 90], result: "Uncommon psionic essence" },
            { range: [91, 100], result: "Uncommon primal essence" }
        ],
        construct: [
            { range: [1, 30], result: "Fancy parts" },
            { range: [31, 60], result: "1d4 uncommon curative reagent" },
            { range: [61, 80], result: "Uncommon arcane essence" },
            { range: [81, 90], result: "1d4 uncommon reactive reagent" },
            { range: [91, 100], result: "Uncommon primal essence" }
        ],
        aberration: [
            { range: [1, 30], result: "Common reactive reagent" },
            { range: [31, 60], result: "1d4 uncommon reactive reagent" },
            { range: [61, 80], result: "Uncommon poisonous reagent" },
            { range: [81, 90], result: "Uncommon primal essence" },
            { range: [91, 100], result: "1d4 fancy parts" }
        ],
        undead: [
            { range: [1, 30], result: "Common arcane essence" },
            { range: [31, 60], result: "Uncommon arcane essence" },
            { range: [61, 80], result: "1d4 uncommon reactive reagent" },
            { range: [81, 90], result: "Uncommon primal essence" },
            { range: [91, 100], result: "1d6 fancy parts" }
        ],
        plant: [
            { range: [1, 30], result: "Common poisonous reagent" },
            { range: [31, 60], result: "Uncommon poisonous reagent" },
            { range: [61, 80], result: "Uncommon reactive reagent" },
            { range: [81, 90], result: "Uncommon primal essence" },
            { range: [91, 100], result: "Uncommon curative reagent" }
        ]
    },
    
    // Exotic Harvesting (CR 11-16)
    exoticHarvestingCR11to16: {
        dc: 12,
        dragonMonstrosities: [
            { range: [1, 30], result: "Rare reactive reagent" },
            { range: [31, 60], result: "Rare curative reagent" },
            { range: [61, 80], result: "1d4 rare poisonous reagents" },
            { range: [81, 90], result: "Rare psionic essence" },
            { range: [91, 100], result: "Rare primal essence" }
        ],
        construct: [
            { range: [1, 30], result: "1d4 fancy parts" },
            { range: [31, 60], result: "1d4 rare curative reagent" },
            { range: [61, 80], result: "Rare arcane essence" },
            { range: [81, 90], result: "1d4 rare reactive reagent" },
            { range: [91, 100], result: "Rare primal essence" }
        ],
        aberration: [
            { range: [1, 30], result: "Uncommon reactive reagent" },
            { range: [31, 60], result: "1d4 rare reactive reagent" },
            { range: [61, 80], result: "Rare poisonous reagent" },
            { range: [81, 90], result: "Rare primal essence" },
            { range: [91, 100], result: "1d6 fancy parts" }
        ],
        undead: [
            { range: [1, 30], result: "Uncommon arcane essence" },
            { range: [31, 60], result: "Rare arcane essence" },
            { range: [61, 80], result: "1d4 rare reactive reagent" },
            { range: [81, 90], result: "Rare primal essence" },
            { range: [91, 100], result: "1d8 fancy parts" }
        ],
        plant: [
            { range: [1, 30], result: "Uncommon poisonous reagent" },
            { range: [31, 60], result: "Rare poisonous reagent" },
            { range: [61, 80], result: "Rare reactive reagent" },
            { range: [81, 90], result: "Rare primal essence" },
            { range: [91, 100], result: "Rare curative reagent" }
        ]
    },
    
    // Exotic Harvesting (CR 17+)
    exoticHarvestingCR17Plus: {
        dc: 14,
        dragonMonstrosities: [
            { range: [1, 30], result: "Very rare reactive reagent" },
            { range: [31, 60], result: "Very rare curative reagent" },
            { range: [61, 80], result: "1d4 very rare poisonous reagents" },
            { range: [81, 90], result: "Very rare psionic essence" },
            { range: [91, 100], result: "Very rare primal essence" }
        ],
        construct: [
            { range: [1, 30], result: "1d6 fancy parts" },
            { range: [31, 60], result: "1d4 very rare curative reagent" },
            { range: [61, 80], result: "Very rare arcane essence" },
            { range: [81, 90], result: "1d4 very rare reactive reagent" },
            { range: [91, 100], result: "Very rare primal essence" }
        ],
        aberration: [
            { range: [1, 30], result: "Rare reactive reagent" },
            { range: [31, 60], result: "1d4 very rare reactive reagent" },
            { range: [61, 80], result: "Very rare poisonous reagent" },
            { range: [81, 90], result: "Very rare primal essence" },
            { range: [91, 100], result: "1d8 fancy parts" }
        ],
        undead: [
            { range: [1, 30], result: "Rare arcane essence" },
            { range: [31, 60], result: "Very rare arcane essence" },
            { range: [61, 80], result: "1d4 very rare reactive reagent" },
            { range: [81, 90], result: "Very rare primal essence" },
            { range: [91, 100], result: "1d10 fancy parts" }
        ],
        plant: [
            { range: [1, 30], result: "Rare poisonous reagent" },
            { range: [31, 60], result: "Very rare poisonous reagent" },
            { range: [61, 80], result: "Very rare reactive reagent" },
            { range: [81, 90], result: "Very rare primal essence" },
            { range: [91, 100], result: "Very rare curative reagent" }
        ]
    },
    
    // Exotic Remnants (for creatures that don't leave corpses)
    exoticRemnants: {
        celestial: [
            { range: [1, 50], result: "Nothing" },
            { range: [51, 70], result: "Common celestial essence" },
            { range: [71, 85], result: "Uncommon celestial essence" },
            { range: [86, 95], result: "Rare celestial essence" },
            { range: [96, 100], result: "Very rare celestial essence" }
        ],
        elemental: [
            { range: [1, 50], result: "Nothing" },
            { range: [51, 70], result: "Common elemental essence" },
            { range: [71, 85], result: "Uncommon elemental essence" },
            { range: [86, 95], result: "Rare elemental essence" },
            { range: [96, 100], result: "Very rare elemental essence" }
        ],
        fiend: [
            { range: [1, 50], result: "Nothing" },
            { range: [51, 70], result: "Common fiendish essence" },
            { range: [71, 85], result: "Uncommon fiendish essence" },
            { range: [86, 95], result: "Rare fiendish essence" },
            { range: [96, 100], result: "Very rare fiendish essence" }
        ],
        undead: [
            { range: [1, 70], result: "Nothing" },
            { range: [71, 85], result: "Common necrotic essence" },
            { range: [86, 95], result: "Uncommon necrotic essence" },
            { range: [96, 100], result: "Rare necrotic essence" }
        ]
    },
    
    // Helper function to roll dice (e.g. "2d6" rolls 2 six-sided dice)
    rollDice: function(diceNotation) {
        if (!diceNotation.includes('d')) return parseInt(diceNotation) || 0;
        
        const [numDice, diceSides] = diceNotation.split('d').map(Number);
        let total = 0;
        
        for (let i = 0; i < numDice; i++) {
            total += Math.floor(Math.random() * diceSides) + 1;
        }
        
        return total;
    },
    
    // Helper function to get a result from a table based on a d100 roll
    getResultFromTable: function(table, roll) {
        for (const entry of table) {
            if (roll >= entry.range[0] && roll <= entry.range[1]) {
                return entry.result;
            }
        }
        return "No result found";
    },
    
    // Helper function to process a result that might contain dice notation
    processResult: function(result) {
        if (!result || result === "None" || result === "Nothing") {
            return { item: "Nothing", quantity: 0 };
        }
        
        // Check if the result contains dice notation
        const diceMatch = result.match(/(\d+d\d+)\s+(.+)/);
        if (diceMatch) {
            const diceNotation = diceMatch[1];
            const itemName = diceMatch[2];
            const quantity = this.rollDice(diceNotation);
            return { item: itemName, quantity: quantity };
        }
        
        // Check if the result starts with a number
        const numberMatch = result.match(/^(\d+)\s+(.+)/);
        if (numberMatch) {
            const quantity = parseInt(numberMatch[1]);
            const itemName = numberMatch[2];
            return { item: itemName, quantity: quantity };
        }
        
        // If no quantity is specified, assume 1
        return { item: result, quantity: 1 };
    }
};

// No export statement - the object is now globally available
