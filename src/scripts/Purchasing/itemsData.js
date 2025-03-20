/**
 * Item price data for the D&D Crafting Tools
 * Based on "Crafting 1.0.6 - Free Version" by KibblesTasty
 */

const ItemsData = {
    // Materials organized by type
    materials: [
        // Leather & Hide
        { name: "Hide Scraps", category: "Leather", rarity: "Trivial", usedFor: "Leatherworking", price: "1 sp" },
        { name: "Leather Scraps", category: "Leather", rarity: "Trivial", usedFor: "Leatherworking", price: "1 sp" },
        { name: "Hide", category: "Leather", rarity: "Common", usedFor: "Leatherworking", price: "2 gp" },
        { name: "Scales", category: "Leather", rarity: "Common", usedFor: "Leatherworking", price: "1 gp" },
        { name: "Rawhide Leather", category: "Leather", rarity: "Common", usedFor: "Leatherworking", price: "2 gp" },
        { name: "Tanned Leather", category: "Leather", rarity: "Common", usedFor: "Leatherworking", price: "3 gp" },
        { name: "Boiled Leather", category: "Leather", rarity: "Common", usedFor: "Leatherworking", price: "3 gp" },
        { name: "Medium Carapace", category: "Leather", rarity: "Common", usedFor: "Leatherworking", price: "4 gp" },
        { name: "Large Carapace", category: "Leather", rarity: "Common", usedFor: "Leatherworking", price: "30 gp" },
        { name: "Tough Hide", category: "Leather", rarity: "Uncommon", usedFor: "Leatherworking", price: "500 gp" },
        { name: "Tough Leather", category: "Leather", rarity: "Uncommon", usedFor: "Leatherworking", price: "600 gp" },
        { name: "Resistant Hide", category: "Leather", rarity: "Uncommon", usedFor: "Leatherworking", price: "500 gp" },
        { name: "Resistant Leather", category: "Leather", rarity: "Uncommon", usedFor: "Leatherworking", price: "600 gp" },
        
        // Cooking
        { name: "Supplies (Salt, Staples, etc)", category: "Cooking", rarity: "Trivial", usedFor: "Cooking", price: "1 gp" },
        { name: "Common Supplies", category: "Cooking", rarity: "Common", usedFor: "Cooking", price: "10 gp" },
        { name: "Uncommon Supplies", category: "Cooking", rarity: "Uncommon", usedFor: "Cooking", price: "100 gp" },
        { name: "Rare Supplies", category: "Cooking", rarity: "Uncommon", usedFor: "Cooking", price: "100 gp" },
        
        // Metals
        { name: "Metal Scraps", category: "Metal", rarity: "Trivial", usedFor: "Tinkering, Blacksmithing", price: "1 sp" },
        { name: "Silver Scraps", category: "Metal", rarity: "Trivial", usedFor: "Jewelcrafting", price: "1 sp" },
        { name: "Gold Scraps", category: "Metal", rarity: "Common", usedFor: "Jewelcrafting", price: "1 gp" },
        { name: "Iron Ingot", category: "Metal", rarity: "Common", usedFor: "Blacksmithing", price: "2 gp" },
        { name: "Steel Chain (2 ft)", category: "Metal", rarity: "Common", usedFor: "Blacksmithing, Tinkering", price: "1 gp" },
        { name: "Steel Ingot", category: "Metal", rarity: "Uncommon", usedFor: "Blacksmithing", price: "40 gp" },
        { name: "Mithril Ingot", category: "Metal", rarity: "Uncommon", usedFor: "Blacksmithing", price: "30 gp" },
        { name: "Adamant Ingot", category: "Metal", rarity: "Uncommon", usedFor: "Blacksmithing", price: "40 gp" },
        { name: "Adamantine Ingot", category: "Metal", rarity: "Uncommon", usedFor: "Blacksmithing", price: "60 gp" },
        
        // Wood
        { name: "Firewood", category: "Wood", rarity: "Trivial", usedFor: "Cooking, Wood Working", price: "1 cp" },
        { name: "Wood Scraps", category: "Wood", rarity: "Trivial", usedFor: "Tinkering, Wood Working", price: "2 cp" },
        { name: "Common Branch", category: "Wood", rarity: "Common", usedFor: "Wand Whittling, Wood Working", price: "1 sp" },
        { name: "Short Haft", category: "Wood", rarity: "Common", usedFor: "Blacksmithing", price: "1 sp" },
        { name: "Long Haft", category: "Wood", rarity: "Common", usedFor: "Blacksmithing", price: "2 sp" },
        { name: "Wooden Stock", category: "Wood", rarity: "Common", usedFor: "Tinkering", price: "5 sp" },
        { name: "Quality Branch", category: "Wood", rarity: "Uncommon", usedFor: "Wand Whittling", price: "2 gp" },
        { name: "Uncommon Branch", category: "Wood", rarity: "Uncommon", usedFor: "Wand Whittling", price: "25 gp" },
        { name: "Rare Branch", category: "Wood", rarity: "Rare", usedFor: "Wand Whittling", price: "80 gp" },
        { name: "Very Rare Branch", category: "Wood", rarity: "Very Rare", usedFor: "Wand Whittling", price: "800 gp" },
        { name: "Legendary Branch", category: "Wood", rarity: "Legendary", usedFor: "Wand Whittling", price: "2,000 gp" },
        
        // Magical Materials
        { name: "Common Reagent", category: "Magical", rarity: "Common", usedFor: "Alchemy, Poisoncraft", price: "15 gp" },
        { name: "Common Essence", category: "Magical", rarity: "Common", usedFor: "Alchemy, Enchanting, Scroll Scribing, Wand Whittling", price: "45 gp" },
        { name: "Common Magical Ink", category: "Magical", rarity: "Common", usedFor: "Scroll Scribing", price: "15 gp" },
        { name: "Uncommon Reagent", category: "Magical", rarity: "Uncommon", usedFor: "Alchemy, Poisoncraft", price: "40 gp" },
        { name: "Uncommon Essence", category: "Magical", rarity: "Uncommon", usedFor: "Alchemy, Enchanting, Scroll Scribing, Wand Whittling", price: "150 gp" },
        { name: "Uncommon Magical Ink", category: "Magical", rarity: "Uncommon", usedFor: "Scroll Scribing", price: "40 gp" },
        { name: "Rare Reagent", category: "Magical", rarity: "Rare", usedFor: "Alchemy, Poisoncraft", price: "200 gp" },
        { name: "Rare Essence", category: "Magical", rarity: "Rare", usedFor: "Alchemy, Enchanting, Scroll Scribing, Wand Whittling", price: "700 gp" },
        { name: "Rare Magical Ink", category: "Magical", rarity: "Rare", usedFor: "Scroll Scribing", price: "200 gp" },
        { name: "Very Rare Reagent", category: "Magical", rarity: "Very Rare", usedFor: "Alchemy, Poisoncraft", price: "2,000 gp" },
        { name: "Very Rare Essence", category: "Magical", rarity: "Very Rare", usedFor: "Alchemy, Enchanting, Scroll Scribing, Wand Whittling", price: "7,000 gp" },
        { name: "Very Rare Magical Ink", category: "Magical", rarity: "Very Rare", usedFor: "Scroll Scribing", price: "2,000 gp" },
        { name: "Legendary Reagent", category: "Magical", rarity: "Legendary", usedFor: "Alchemy, Poisoncraft", price: "5,000 gp" },
        { name: "Legendary Essence", category: "Magical", rarity: "Legendary", usedFor: "Alchemy, Enchanting, Scroll Scribing, Wand Whittling", price: "25,000 gp" },
        { name: "Legendary Magical Ink", category: "Magical", rarity: "Legendary", usedFor: "Scroll Scribing", price: "5,000 gp" }
    ],
    
    // Containers and components
    containers: [
        { name: "Glass Vial", category: "Container", rarity: "Common", usedFor: "Alchemy, Poisoncraft", price: "1 gp" },
        { name: "Glass Flask", category: "Container", rarity: "Common", usedFor: "Alchemy, Poisoncraft", price: "1 gp" },
        { name: "Crystal Vial", category: "Container", rarity: "Common", usedFor: "Alchemy", price: "10 gp" },
        { name: "Parchment", category: "Component", rarity: "Common", usedFor: "Scroll Scribing", price: "1 sp" },
        { name: "Uncommon Parchment", category: "Component", rarity: "Uncommon", usedFor: "Scroll Scribing", price: "40 gp" },
        { name: "Rare Parchment", category: "Component", rarity: "Rare", usedFor: "Scroll Scribing", price: "200 gp" },
        { name: "Very Rare Parchment", category: "Component", rarity: "Very Rare", usedFor: "Scroll Scribing", price: "2,000 gp" },
        { name: "Legendary Parchment", category: "Component", rarity: "Legendary", usedFor: "Scroll Scribing", price: "5,000 gp" },
        { name: "Normal Ink", category: "Component", rarity: "Common", usedFor: "Writing", price: "5 gp" }
    ],
    
    // Misc items
    misc: [
        { name: "Buckle", category: "Misc", rarity: "Trivial", usedFor: "Leatherworking", price: "2 sp" },
        { name: "Length of String", category: "Misc", rarity: "Trivial", usedFor: "Wood Working", price: "5 cp" },
        { name: "Fletching", category: "Misc", rarity: "Trivial", usedFor: "Wood Working", price: "5 cp" },
        { name: "Armor Padding", category: "Misc", rarity: "Common", usedFor: "Blacksmithing, Leatherworking", price: "5 gp" },
        { name: "Fancy Parts", category: "Misc", rarity: "Common", usedFor: "Tinkering", price: "10 gp" },
        { name: "Parts", category: "Misc", rarity: "Common", usedFor: "Tinkering", price: "2 gp" },
        { name: "Esoteric Parts", category: "Misc", rarity: "Uncommon", usedFor: "Tinkering", price: "100 gp" }
    ]
};

// No export statement - the object is now globally available
