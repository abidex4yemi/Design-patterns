const Shopper = require("./shopper");

const scout = new Shopper();

scout.addItemToList("Camping knife");
scout.addItemToList("knife");
scout.addItemToList("backpack");
scout.addItemToList("map");

module.exports = scout;
