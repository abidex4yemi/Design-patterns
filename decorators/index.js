const Shopper = require("./shopper");
const InventoryItem = require("./InventoryItem");

const alex = new Shopper("Alex", 100);

const walkMan = new InventoryItem("Walkman", 29.99);
const necklace = new InventoryItem("Necklace", 9.99);

alex.purchase(walkMan);
alex.purchase(necklace);

alex.printStatus();
