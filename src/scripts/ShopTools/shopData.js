/**
 * Shop data for the D&D Crafting Tools
 * Provides shop types, sizes, and inventory generation functions
 */

const ShopData = {
    // Shop types based on crafting materials
    shopTypes: [
        {
            id: "general",
            name: "General Store",
            description: "A general store that sells a variety of common items and basic crafting materials.",
            categories: ["Leather", "Wood", "Metal", "Cooking", "Container"],
            maxRarity: "Common",
            icon: "fa-store",
            color: "#795548"
        },
        {
            id: "blacksmith",
            name: "Blacksmith",
            description: "A forge that specializes in metal working and armor crafting.",
            categories: ["Metal", "Wood"],
            maxRarity: "Uncommon",
            icon: "fa-hammer",
            color: "#607D8B"
        },
        {
            id: "tanner",
            name: "Tanner & Leatherworker",
            description: "A shop specializing in hides, leather, and related crafting materials.",
            categories: ["Leather"],
            maxRarity: "Uncommon",
            icon: "fa-scroll",
            color: "#8D6E63"
        },
        {
            id: "carpenter",
            name: "Carpenter & Woodworker",
            description: "A shop specializing in wood and wooden crafting materials.",
            categories: ["Wood"],
            maxRarity: "Uncommon",
            icon: "fa-tree",
            color: "#A1887F"
        },
        {
            id: "alchemist",
            name: "Alchemist",
            description: "A shop specializing in alchemical ingredients and magical components.",
            categories: ["Magical", "Container"],
            maxRarity: "Rare",
            icon: "fa-flask",
            color: "#9C27B0"
        },
        {
            id: "arcane",
            name: "Arcane Emporium",
            description: "A high-end magical shop with rare and exotic crafting materials.",
            categories: ["Magical", "Container"],
            maxRarity: "Very Rare",
            icon: "fa-hat-wizard",
            color: "#3F51B5"
        },
        {
            id: "jeweler",
            name: "Jeweler",
            description: "A shop specializing in gems, precious metals, and fine crafting.",
            categories: ["Metal", "Gem"],
            maxRarity: "Rare",
            icon: "fa-gem",
            color: "#FFC107"
        }
    ],
    
    // Shop sizes affect inventory quantity and rarity
    shopSizes: [
        {
            id: "small",
            name: "Small Shop",
            description: "A small shop with limited inventory.",
            inventoryMultiplier: 0.5,
            rarityPenalty: 1, // Reduces max rarity by 1 level
            priceMultiplier: 1.2 // Small shops charge more
        },
        {
            id: "medium",
            name: "Medium Shop",
            description: "A standard-sized shop with average inventory.",
            inventoryMultiplier: 1.0,
            rarityPenalty: 0,
            priceMultiplier: 1.0
        },
        {
            id: "large",
            name: "Large Shop",
            description: "A large shop with extensive inventory.",
            inventoryMultiplier: 1.5,
            rarityPenalty: 0,
            priceMultiplier: 0.9 // Large shops offer slight discounts
        }
    ],
    
    // Settlement sizes affect shop availability and inventory
    settlementSizes: [
        {
            id: "village",
            name: "Village",
            description: "A small settlement with basic shops.",
            availableShops: ["general", "blacksmith", "tanner"],
            maxRarity: "Common",
            priceMultiplier: 1.1
        },
        {
            id: "town",
            name: "Town",
            description: "A medium-sized settlement with a variety of shops.",
            availableShops: ["general", "blacksmith", "tanner", "carpenter", "alchemist"],
            maxRarity: "Uncommon",
            priceMultiplier: 1.0
        },
        {
            id: "city",
            name: "City",
            description: "A large settlement with many specialized shops.",
            availableShops: ["general", "blacksmith", "tanner", "carpenter", "alchemist", "jeweler"],
            maxRarity: "Rare",
            priceMultiplier: 0.9
        },
        {
            id: "metropolis",
            name: "Metropolis",
            description: "A massive settlement with access to exotic goods.",
            availableShops: ["general", "blacksmith", "tanner", "carpenter", "alchemist", "arcane", "jeweler"],
            maxRarity: "Very Rare",
            priceMultiplier: 0.8
        }
    ],
    
    // Rarity levels for reference
    rarityLevels: ["Trivial", "Common", "Uncommon", "Rare", "Very Rare", "Legendary"],
    
    // Helper function to get rarity index
    getRarityIndex: function(rarity) {
        return this.rarityLevels.indexOf(rarity);
    },
    
    // Helper function to get maximum rarity based on shop type and size
    getMaxRarity: function(shopType, shopSize, settlementSize) {
        // Get base max rarity from shop type
        const shopTypeObj = this.shopTypes.find(type => type.id === shopType);
        const baseMaxRarity = shopTypeObj ? shopTypeObj.maxRarity : "Common";
        
        // Get settlement max rarity
        const settlementObj = this.settlementSizes.find(size => size.id === settlementSize);
        const settlementMaxRarity = settlementObj ? settlementObj.maxRarity : "Common";
        
        // Get shop size rarity penalty
        const shopSizeObj = this.shopSizes.find(size => size.id === shopSize);
        const rarityPenalty = shopSizeObj ? shopSizeObj.rarityPenalty : 0;
        
        // Calculate final max rarity
        const baseRarityIndex = this.getRarityIndex(baseMaxRarity);
        const settlementRarityIndex = this.getRarityIndex(settlementMaxRarity);
        const maxRarityIndex = Math.min(baseRarityIndex, settlementRarityIndex) - rarityPenalty;
        
        // Ensure rarity index is valid
        const finalRarityIndex = Math.max(0, maxRarityIndex);
        return this.rarityLevels[finalRarityIndex];
    },
    
    // Generate shop inventory based on shop type, size, and settlement
    generateInventory: function(shopType, shopSize, settlementSize) {
        const shopTypeObj = this.shopTypes.find(type => type.id === shopType);
        if (!shopTypeObj) return [];
        
        const shopSizeObj = this.shopSizes.find(size => size.id === shopSize);
        const inventoryMultiplier = shopSizeObj ? shopSizeObj.inventoryMultiplier : 1.0;
        
        const maxRarity = this.getMaxRarity(shopType, shopSize, settlementSize);
        const maxRarityIndex = this.getRarityIndex(maxRarity);
        
        // Filter items based on shop categories and max rarity
        const inventory = [];
        
        // Add materials
        ItemsData.materials.forEach(item => {
            if (shopTypeObj.categories.includes(item.category)) {
                const itemRarityIndex = this.getRarityIndex(item.rarity);
                if (itemRarityIndex <= maxRarityIndex) {
                    // Calculate quantity based on rarity and shop size
                    let quantity = Math.floor((10 - itemRarityIndex * 2) * inventoryMultiplier);
                    quantity = Math.max(1, quantity); // Ensure at least 1 item
                    
                    // Calculate price based on shop size and settlement
                    const shopPriceMultiplier = shopSizeObj ? shopSizeObj.priceMultiplier : 1.0;
                    const settlementObj = this.settlementSizes.find(size => size.id === settlementSize);
                    const settlementPriceMultiplier = settlementObj ? settlementObj.priceMultiplier : 1.0;
                    const priceMultiplier = shopPriceMultiplier * settlementPriceMultiplier;
                    
                    // Add to inventory
                    inventory.push({
                        ...item,
                        quantity: quantity,
                        adjustedPrice: this.adjustPrice(item.price, priceMultiplier)
                    });
                }
            }
        });
        
        // Add containers if applicable
        if (shopTypeObj.categories.includes("Container")) {
            ItemsData.containers.forEach(item => {
                const itemRarityIndex = this.getRarityIndex(item.rarity);
                if (itemRarityIndex <= maxRarityIndex) {
                    // Calculate quantity based on rarity and shop size
                    let quantity = Math.floor((8 - itemRarityIndex) * inventoryMultiplier);
                    quantity = Math.max(1, quantity); // Ensure at least 1 item
                    
                    // Calculate price based on shop size and settlement
                    const shopPriceMultiplier = shopSizeObj ? shopSizeObj.priceMultiplier : 1.0;
                    const settlementObj = this.settlementSizes.find(size => size.id === settlementSize);
                    const settlementPriceMultiplier = settlementObj ? settlementObj.priceMultiplier : 1.0;
                    const priceMultiplier = shopPriceMultiplier * settlementPriceMultiplier;
                    
                    // Add to inventory
                    inventory.push({
                        ...item,
                        quantity: quantity,
                        adjustedPrice: this.adjustPrice(item.price, priceMultiplier)
                    });
                }
            });
        }
        
        return inventory;
    },
    
    // Helper function to adjust price based on multiplier
    adjustPrice: function(priceString, multiplier) {
        // Extract number and currency from price string
        const match = priceString.match(/(\d+(?:,\d+)?)\s*([a-z]+)/i);
        if (!match) return priceString;
        
        const [_, valueStr, currency] = match;
        const value = parseFloat(valueStr.replace(/,/g, ''));
        const adjustedValue = Math.ceil(value * multiplier);
        
        return `${adjustedValue} ${currency}`;
    }
};

// No export statement - the object is now globally available
