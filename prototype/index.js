const Shopper = require("./shopper");

const alex = new Shopper("Alex Banks");

alex.addItemToList("Camping knife");
alex.addItemToList("knife");
alex.addItemToList("backpack");
alex.addItemToList("map");
alex.addItemToList("slingshot");

const eve = new Shopper("Eve Porcello");

eve.addItemToList("Camping knife");
eve.addItemToList("knife");
eve.addItemToList("backpack");
eve.addItemToList("map");
eve.addItemToList("reading light");

console.log(`${alex.name}: ${alex.shoppingList}`);
