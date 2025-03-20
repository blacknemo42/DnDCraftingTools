/**
 * Loot Data for D&D Crafting Tools
 * Contains loot tables for humanoid creatures based on Crafting 1.0.6
 */

const LootData = {
    // Challenge Rating ranges
    crRanges: [
        { id: 'cr0-4', name: 'CR 0-4', description: 'Low-level humanoids (CR 0-4)' },
        { id: 'cr5-10', name: 'CR 5-10', description: 'Mid-level humanoids (CR 5-10)' },
        { id: 'cr11-16', name: 'CR 11-16', description: 'High-level humanoids (CR 11-16)' },
        { id: 'cr17plus', name: 'CR 17+', description: 'Very high-level humanoids (CR 17+)' }
    ],

    // Individual Treasure tables by CR range
    individualTreasureTables: {
        'cr0-4': [
            { range: [1, 15], materials: ['1d6 wood scraps', '1 length of string'], coinage: '2d4 cp', value: '18 cp' },
            { range: [16, 30], materials: ['1d4 leather scraps', '1 hide scraps'], coinage: '1d4 sp', value: '6 sp' },
            { range: [31, 40], materials: ['1d4 metal scraps'], coinage: '1d4 sp', value: '6 sp' },
            { range: [41, 60], materials: ['supplies'], coinage: '1d6 sp, 2d4 cp', value: '1 gp, 5 sp' },
            { range: [61, 70], materials: ['1d2 parts'], coinage: '1d6 gp, 2d4 sp', value: '6 gp, 5 sp' },
            { range: [71, 75], materials: ['uncommon supplies'], coinage: '1 gp, 1d10 sp', value: '10 gp' },
            { range: [76, 80], materials: ['common poisonous reagent'], coinage: '2d4 sp', value: '15 gp, 5 sp' },
            { range: [81, 85], materials: ['common reactive reagent'], coinage: '2d4 sp', value: '15 gp' },
            { range: [86, 90], materials: ['common curative reagent'], coinage: '2d4 sp', value: '15 gp' },
            { range: [91, 94], materials: ['common magical ink'], coinage: '1d6 gp, 1d10 sp', value: '18 gp, 5 sp' },
            { range: [95, 96], materials: ['common divine essence'], coinage: '1d6 sp, 1d10 cp', value: '46 gp' },
            { range: [97, 98], materials: ['common primal essence'], coinage: '1d6 sp, 1d10 cp', value: '46 gp' },
            { range: [99, 100], materials: ['common arcane essence'], coinage: '1d6 sp, 1d10 cp', value: '46 gp' }
        ],
        'cr5-10': [
            { range: [1, 30], materials: ['1d4 fancy parts'], coinage: '1d10 gp, 1d10 sp', value: '36 gp, 6 sp' },
            { range: [31, 40], materials: ['1d10 parts', '1d20 leather scraps', '1d20 metal scraps'], coinage: '1 pp, 1d10 gp, 2d10 sp', value: '30 gp' },
            { range: [41, 50], materials: ['uncommon poisonous reagent'], coinage: '1d6 x 10 gp', value: '75 gp' },
            { range: [51, 60], materials: ['uncommon curative reagent'], coinage: '1d6 x 10 gp', value: '75 gp' },
            { range: [61, 80], materials: ['uncommon reactive reagent'], coinage: '1d6 x 10 gp', value: '75 gp' },
            { range: [81, 90], materials: ['uncommon magical ink', 'uncommon parchment'], coinage: '1d6 x 10 gp', value: '125 gp' },
            { range: [91, 94], materials: ['esoteric parts'], coinage: '2d6 x 10 gp', value: '170 gp' },
            { range: [95, 96], materials: ['uncommon divine essence'], coinage: '1d6 pp', value: '185 gp' },
            { range: [97, 98], materials: ['uncommon primal essence'], coinage: '1d6 x 10 gp', value: '185 gp' },
            { range: [99, 100], materials: ['uncommon arcane essence'], coinage: '1d6 x 10 gp', value: '185 gp' }
        ],
        'cr11-16': [
            { range: [1, 20], materials: ['2 mithril ingots', '2 adamantine ingot', '2 fancy parts'], coinage: '', value: '300 gp' },
            { range: [21, 30], materials: ['2 fancy parts', '2 mithril ingots', '1 rare poisonous reagent', '1 rare reactive reagent'], coinage: '', value: '400 gp' },
            { range: [31, 40], materials: ['1 esoteric part', '1 adamantine ingot', '1 rare curative reagent'], coinage: '', value: '305 gp' },
            { range: [41, 50], materials: ['5 dragon scales', 'rare magical ink', 'rare curative reagent'], coinage: '', value: '400 gp' },
            { range: [51, 60], materials: ['rare reactive reagent', '2 rare supplies'], coinage: '', value: '400 gp' },
            { range: [61, 70], materials: ['rare reactive reagent', 'rare poisonous reagent', 'rare curative reagent'], coinage: '', value: '400 gp' },
            { range: [71, 80], materials: ['uncommon divine essence', 'uncommon primal essence'], coinage: '', value: '400 gp' },
            { range: [81, 90], materials: ['tough leather'], coinage: '', value: '600 gp' },
            { range: [91, 94], materials: ['rare primal essence'], coinage: '', value: '700 gp' },
            { range: [95, 96], materials: ['rare divine essence'], coinage: '', value: '700 gp' },
            { range: [97, 98], materials: ['rare arcane essence'], coinage: '', value: '700 gp' }
        ],
        'cr17plus': [
            { range: [1, 15], materials: ['very rare branch', 'very rare parchment', 'rare arcane essence'], coinage: '', value: '3,500 gp' },
            { range: [16, 30], materials: ['very rare curative reagent', 'very rare poisonous reagent', 'rare primal essence'], coinage: '', value: '5,000 gp' },
            { range: [31, 45], materials: ['very rare poisonous reagent', 'very rare reactive reagent', 'rare arcane essence'], coinage: '', value: '5,000 gp' },
            { range: [46, 60], materials: ['very rare curative reagent', 'very rare reactive reagent', 'rare divine essence'], coinage: '', value: '5,500 gp' },
            { range: [61, 70], materials: ['very rare divine essence'], coinage: '', value: '7,000 gp' },
            { range: [71, 80], materials: ['very rare primal essence'], coinage: '', value: '7,000 gp' },
            { range: [81, 90], materials: ['very rare arcane essence'], coinage: '', value: '7,000 gp' },
            { range: [91, 94], materials: ['legendary curative reagent', 'legendary poisonous reagent'], coinage: '', value: '20,000 gp' },
            { range: [95, 96], materials: ['legendary reactive reagent', 'legendary curative reagent'], coinage: '', value: '20,000 gp' },
            { range: [97, 98], materials: ['legendary divine essence'], coinage: '', value: '30,000 gp' },
            { range: [99, 100], materials: ['legendary arcane essence'], coinage: '', value: '30,000 gp' }
        ]
    },

    // Helper function to roll a d100
    rollD100: function() {
        return Math.floor(Math.random() * 100) + 1;
    },

    // Helper function to roll dice based on notation (e.g., "2d6")
    rollDice: function(diceNotation) {
        // Handle fixed numbers
        if (!isNaN(diceNotation)) {
            return parseInt(diceNotation);
        }
        
        // Parse dice notation (e.g., "2d6")
        const match = diceNotation.match(/(\d+)d(\d+)(?:\s*\((\d+)\))?/);
        if (!match) return 0;
        
        const numDice = parseInt(match[1]);
        const dieType = parseInt(match[2]);
        const average = match[3] ? parseInt(match[3]) : null;
        
        // Use average if provided (for predetermined results)
        if (average !== null) {
            return average;
        }
        
        // Roll the dice
        let total = 0;
        for (let i = 0; i < numDice; i++) {
            total += Math.floor(Math.random() * dieType) + 1;
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

    // Process the materials to get quantities and names
    processMaterials: function(materials) {
        return materials.map(material => {
            // Check if there's a dice roll in the material name
            const diceMatch = material.match(/^(\d+d\d+(?:\s*\(\d+\))?\s+)(.+)$/);
            
            if (diceMatch) {
                const quantity = this.rollDice(diceMatch[1].trim());
                const itemName = diceMatch[2].trim();
                return { quantity, name: itemName };
            } else if (material.startsWith('1d')) {
                // Handle cases like "1d4 wood scraps"
                const parts = material.split(' ');
                const quantity = this.rollDice(parts[0]);
                const itemName = parts.slice(1).join(' ');
                return { quantity, name: itemName };
            } else {
                // No dice roll, quantity is 1
                return { quantity: 1, name: material };
            }
        });
    },

    // Process the coinage to get quantities and types
    processCoinage: function(coinage) {
        if (!coinage) return [];
        
        const result = [];
        const coinTypes = coinage.split(', ');
        
        for (const coinType of coinTypes) {
            const parts = coinType.split(' ');
            const quantity = this.rollDice(parts[0]);
            const type = parts[1];
            result.push({ quantity, type });
        }
        
        return result;
    }
};
