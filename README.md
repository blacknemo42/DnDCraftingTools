# D&D Crafting Tools

A web-based toolkit for Dungeon Masters and players to help with understanding and implementing the crafting mechanics defined in "Crafting 1.0.6".

## Project Structure

```
src/
├── index.html          # Main entry point for the web application
├── styles/             # CSS styling files
│   └── main.css        # Main stylesheet
├── scripts/            # JavaScript files
│   ├── main.js         # Main JavaScript file
│   ├── CheatSheets/    # Quick reference guides
│   │   └── cheatsheets.js
│   ├── Collecting/     # Harvesting and looting tools
│   │   └── collecting.js
│   └── ShopTools/      # Shop price references and tools
│       ├── itemsData.js
│       └── shopTools.js
├── images/             # Image assets
└── docs/               # Documentation and reference materials
    ├── Crafting 1.0.6 - Free Version.pdf  # Original crafting guide
    └── CheatSheets/                       # Markdown cheatsheets for each crafting discipline
        ├── Alchemy.md                     # Potions and alchemical items
        ├── Blacksmithing.md               # Weapons and armor
        ├── Cooking.md                     # Beneficial meals
        ├── Engineering.md                 # Complex mechanical devices
        ├── Leatherworking.md              # Leather armor and accessories
        ├── Poisoncraft.md                 # Poisons and venoms
        ├── Runecarving.md                 # Magical runes
        ├── Scrollscribing.md              # Magical scrolls
        ├── Tinkering.md                   # Small gadgets and contraptions
        ├── WandWhittling.md               # Magical wands and staves
        └── Woodcarving.md                 # Wooden weapons and items
```

## Features

- **Cheat Sheets**: Quick reference guides for crafting mechanics
  - Includes detailed markdown cheatsheets for all 11 crafting disciplines
  - Each cheatsheet contains crafting requirements, materials, DCs, and tips
- **Collecting**: Tools for harvesting materials and managing loot
  - Harvest Generator: Generate harvested materials from creatures based on type and CR
  - Gathering Calculator: Calculate reagents, materials, and food gathered from different biomes
  - Loot Generator: Generate loot from humanoid creatures based on CR
  - Remnant Finder: Find magical remnants from creatures that don't leave corpses
- **Shop Tools**: Shop price references and tools for various items
  - Price Lookup: Search for items by name, category, or rarity
  - Shop Generator: Generate random shop inventories (coming soon)
  - Haggling Calculator: Calculate adjusted prices (coming soon)

## Getting Started

1. Clone this repository
2. Open `src/index.html` in your web browser

## Development

This project is structured as a static website with HTML, CSS, and JavaScript.

## Crafting Disciplines

The following crafting disciplines are covered in this toolkit:

1. **[Alchemy](src/docs/CheatSheets/Alchemy.md)**: Creating potions and alchemical items
2. **[Poisoncraft](src/docs/CheatSheets/Poisoncraft.md)**: Creating poisons and venoms
3. **[Blacksmithing](src/docs/CheatSheets/Blacksmithing.md)**: Forging weapons and armor
4. **[Cooking](src/docs/CheatSheets/Cooking.md)**: Preparing beneficial meals
5. **[Scrollscribing](src/docs/CheatSheets/Scrollscribing.md)**: Creating magical scrolls
6. **[Wand Whittling](src/docs/CheatSheets/WandWhittling.md)**: Crafting magical wands and staves
7. **[Leatherworking](src/docs/CheatSheets/Leatherworking.md)**: Working with leather for armor and accessories
8. **[Woodcarving](src/docs/CheatSheets/Woodcarving.md)**: Shaping wood into weapons and items
9. **[Runecarving](src/docs/CheatSheets/Runecarving.md)**: Inscribing magical runes
10. **[Engineering](src/docs/CheatSheets/Engineering.md)**: Building complex mechanical devices
11. **[Tinkering](src/docs/CheatSheets/Tinkering.md)**: Creating small gadgets and contraptions

Each discipline has its own cheatsheet with detailed information about crafting requirements, materials, difficulty checks, and tips.

## License

This project is based on the crafting mechanics defined in "Crafting 1.0.6".
