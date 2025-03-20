/**
 * Remnant Data for D&D Crafting Tools
 * Based on the Crafting 1.0.6 system
 */

const RemnantData = {
    // Remnant tables for different CR ranges and creature types
    remnantTables: {
        // CR 0-4 Remnant Table
        "0-4": {
            "Celestial": [
                { range: [1, 50], result: "—" },
                { range: [51, 70], result: "common curative reagent" },
                { range: [71, 80], result: "common divine essence" },
                { range: [81, 95], result: "common divine essence" },
                { range: [96, 100], result: "common divine essence" }
            ],
            "Fiend": [
                { range: [1, 50], result: "—" },
                { range: [51, 70], result: "common reactive reagent" },
                { range: [71, 80], result: "common poisonous reagent" },
                { range: [81, 95], result: "—" },
                { range: [96, 100], result: "common divine essence" }
            ],
            "Elemental": [
                { range: [1, 50], result: "—" },
                { range: [51, 70], result: "common reactive reagent" },
                { range: [71, 80], result: "common primal essence" },
                { range: [81, 95], result: "common reactive reagent" },
                { range: [96, 100], result: "common primal essence" }
            ],
            "Incorporeal Undead": [
                { range: [1, 50], result: "—" },
                { range: [51, 70], result: "common arcane essence" },
                { range: [71, 80], result: "common arcane essence" },
                { range: [81, 95], result: "common poisonous reagent" },
                { range: [96, 100], result: "common arcane essence" }
            ]
        },
        
        // CR 5-10 Remnant Table
        "5-10": {
            "Celestial": [
                { range: [1, 20], result: "—" },
                { range: [21, 50], result: "common curative reagent" },
                { range: [51, 80], result: "uncommon curative reagent" },
                { range: [81, 90], result: "common divine essence" },
                { range: [91, 100], result: "uncommon divine essence" }
            ],
            "Fiend": [
                { range: [1, 20], result: "—" },
                { range: [21, 50], result: "common reactive reagent" },
                { range: [51, 80], result: "uncommon reactive reagent" },
                { range: [81, 90], result: "common poisonous reagent" },
                { range: [91, 100], result: "uncommon poisonous reagent" }
            ],
            "Elemental": [
                { range: [1, 20], result: "—" },
                { range: [21, 50], result: "common reactive reagent" },
                { range: [51, 80], result: "uncommon reactive reagent" },
                { range: [81, 90], result: "common primal essence" },
                { range: [91, 100], result: "uncommon primal essence" }
            ],
            "Incorporeal Undead": [
                { range: [1, 20], result: "—" },
                { range: [21, 50], result: "common arcane essence" },
                { range: [51, 80], result: "uncommon arcane essence" },
                { range: [81, 90], result: "common arcane essence" },
                { range: [91, 100], result: "uncommon arcane essence" }
            ]
        },
        
        // CR 11-16 Remnant Table
        "11-16": {
            "Celestial": [
                { range: [1, 20], result: "uncommon curative reagent" },
                { range: [21, 40], result: "uncommon divine essence" },
                { range: [41, 60], result: "rare curative reagent" },
                { range: [61, 80], result: "rare divine essence" },
                { range: [81, 95], result: "rare divine essence" },
                { range: [96, 100], result: "very rare divine essence" }
            ],
            "Fiend": [
                { range: [1, 20], result: "uncommon reactive reagent" },
                { range: [21, 40], result: "uncommon poisonous reagent" },
                { range: [41, 60], result: "rare reactive reagent" },
                { range: [61, 80], result: "rare poisonous reagent" },
                { range: [81, 95], result: "rare poisonous reagent" },
                { range: [96, 100], result: "very rare poisonous reagent" }
            ],
            "Elemental": [
                { range: [1, 20], result: "uncommon reactive reagent" },
                { range: [21, 40], result: "uncommon primal essence" },
                { range: [41, 60], result: "rare reactive reagent" },
                { range: [61, 80], result: "rare primal essence" },
                { range: [81, 95], result: "rare primal essence" },
                { range: [96, 100], result: "very rare primal essence" }
            ],
            "Incorporeal Undead": [
                { range: [1, 20], result: "uncommon poisonous reagent" },
                { range: [21, 40], result: "uncommon arcane essence" },
                { range: [41, 60], result: "rare poisonous reagent" },
                { range: [61, 80], result: "rare arcane essence" },
                { range: [81, 95], result: "rare arcane essence" },
                { range: [96, 100], result: "very rare arcane essence" }
            ]
        },
        
        // CR 17+ Remnant Table
        "17+": {
            "Celestial": [
                { range: [1, 10], result: "rare curative reagent" },
                { range: [11, 30], result: "rare divine essence" },
                { range: [31, 50], result: "very rare curative reagent" },
                { range: [51, 70], result: "very rare divine essence" },
                { range: [71, 90], result: "very rare divine essence" },
                { range: [91, 100], result: "legendary divine essence" }
            ],
            "Fiend": [
                { range: [1, 10], result: "rare reactive reagent" },
                { range: [11, 30], result: "rare poisonous reagent" },
                { range: [31, 50], result: "very rare reactive reagent" },
                { range: [51, 70], result: "very rare poisonous reagent" },
                { range: [71, 90], result: "very rare poisonous reagent" },
                { range: [91, 100], result: "legendary poisonous reagent" }
            ],
            "Elemental": [
                { range: [1, 10], result: "rare reactive reagent" },
                { range: [11, 30], result: "rare primal essence" },
                { range: [31, 50], result: "very rare reactive reagent" },
                { range: [51, 70], result: "very rare primal essence" },
                { range: [71, 90], result: "very rare primal essence" },
                { range: [91, 100], result: "legendary primal essence" }
            ],
            "Incorporeal Undead": [
                { range: [1, 10], result: "rare poisonous reagent" },
                { range: [11, 30], result: "rare arcane essence" },
                { range: [31, 50], result: "very rare poisonous reagent" },
                { range: [51, 70], result: "very rare arcane essence" },
                { range: [71, 90], result: "very rare arcane essence" },
                { range: [91, 100], result: "legendary arcane essence" }
            ]
        }
    },
    
    // Helper function to roll a d100
    rollD100: function() {
        return Math.floor(Math.random() * 100) + 1;
    },
    
    // Get a result from a specific table based on a d100 roll
    getResultFromTable: function(table, roll) {
        for (const entry of table) {
            if (roll >= entry.range[0] && roll <= entry.range[1]) {
                return entry.result;
            }
        }
        return "No result found";
    }
};
