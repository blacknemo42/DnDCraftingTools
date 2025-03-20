# Changelog

All notable changes to the D&D Crafting Tools project will be documented in this file.

## [Unreleased]

### Changed
- Renamed "Purchasing" module to "Shop Tools" for better clarity
- Refactored file structure to reflect the new naming convention
- Updated UI elements to use the new naming throughout the application

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
  - Added placeholder for Gathering Calculator tool
  - Added placeholder for Loot Generator tool
  - Added placeholder for Remnant Finder tool
- Added "Coming Soon" UI for all collecting tools
- Added CSS styles for the collecting tools and coming soon sections

### Fixed
- Fixed an issue with the Price Lookup tool where it was trying to access undefined properties

## [1.0.0] - 2025-03-20

### Added
- Initial release of D&D Crafting Tools
- Cheat Sheets module with markdown-based reference guides
- Collecting module for harvesting and looting
- Shop Tools (formerly Purchasing) module with Price Lookup tool
- Responsive design for desktop and mobile use
