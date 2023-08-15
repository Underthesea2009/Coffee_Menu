// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas separating them.
// d. Connect the coffee_data.js file to the index.js file.

// index.js

const coffeeMenu = require('./coffee_data');

// Print an array of all the drinks on the menu.
console.log("All drinks on the menu:");
console.log(coffeeMenu.map(item => item.name));

// Print an array of drinks that cost 5 and under.
console.log("Drinks that cost 5 and under:");
console.log(coffeeMenu.filter(item => item.price <= 5).map(item => item.name));

// Print an array of drinks that are priced at an even number.
console.log("Drinks priced at an even number:");
console.log(coffeeMenu.filter(item => item.price % 2 === 0).map(item => item.name));

// Print the total if you were to order one of every drink.
const totalCost = coffeeMenu.reduce((total, item) => total + item.price, 0);
console.log("Total cost for all drinks:", totalCost);

// Print an array with all the drinks that are seasonal.
console.log("Seasonal drinks:");
console.log(coffeeMenu.filter(item => item.seasonal).map(item => item.name));

// Print all the seasonal drinks with the words "with imported beans" after the item name.
console.log("Seasonal drinks with imported beans:");
const seasonalImportedBeans = coffeeMenu
    .filter(item => item.seasonal)
    .map(item => `${item.name} with imported beans`);
console.log(seasonalImportedBeans);




