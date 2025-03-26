# Changelog

All notable changes to the D&D Crafting Tools project will be documented in this file.

## [Unreleased]

### Changed
- Renamed "Purchasing" module to "Shop Tools" for better clarity
- Refactored file structure to reflect the new naming convention
- Updated UI elements to use the new naming throughout the application
- Improved Remnant Finder tool styling to match other generator tools
- Updated form controls and result display for better user experience
- Updated Shop Generator description to reflect new haggling capabilities

### Added
- Added more detailed documentation for the Shop Tools features in README.md
- Added CSS classes for Shop Tools while maintaining backward compatibility
- Collecting Module
  - Added basic structure for Collecting tools
  - Implemented Harvest Generator tool with the following features:
    - Basic harvesting for meat and hides based on creature size
    - Exotic harvesting for special materials based on creature type and CR
    - Support for different creature types (Beasts, Dragons, Monstrosities, etc.)
    - Random roll generation for harvested items
    - Quantity calculation for harvested materials
  - Implemented Gathering Calculator tool with the following features:
    - Support for all biomes (Forest, Desert, Grasslands, etc.)
    - Reagent gathering calculations
    - Material search calculations
    - Game hunting calculations
    - Ability to simulate traveling vs dedicated gathering
    - Ability check mechanics with proficiency bonus
  - Implemented Loot Generator tool with the following features:
    - Generate individual treasure from humanoid creatures
    - Support for different CR ranges (0-4, 5-10, 11-16, 17+)
    - Option to replace coins with crafting materials
    - Detailed display of loot results with quantities and values
  - Implemented Remnant Finder tool with the following features:
    - Support for finding magical remnants from creatures that don't leave corpses
    - Filtering by creature type (Celestial, Fiend, Elemental, Incorporeal Undead)
    - Challenge Rating-based results using the official remnant tables
    - Color-coded icons for different essence and reagent types
  - Added "Coming Soon" UI for all collecting tools
  - Added CSS styles for the collecting tools and coming soon sections
- Shop Tools Module
  - Implemented Shop Generator tool with the following features:
    - Generate shop inventories based on shop type, size, and settlement
    - Support for different shop types (General Store, Blacksmith, Tanner, etc.)
    - Dynamic shop availability based on settlement size
    - Inventory generation with appropriate quantities and adjusted prices
    - Color-coded display of items by rarity
    - Shopping cart functionality with the following features:
      - Add items to cart with quantity controls
      - Global haggling adjustment slider with manual percentage input
      - Individual item haggling controls with manual percentage input
      - Real-time price calculation based on haggling percentages
      - Clear cart functionality
- New "Crafting Tables" tab with reference cards for all crafting tables

### Fixed
- Fixed an issue with the Price Lookup tool where it was trying to access undefined properties
- Fixed styling issues with the back button

## [1.0.0] - 2025-03-20

### Added
- Initial release of D&D Crafting Tools
- Cheat Sheets module with markdown-based reference guides
- Collecting module for harvesting and looting
- Shop Tools (formerly Purchasing) module with Price Lookup tool
- Responsive design for desktop and mobile use
