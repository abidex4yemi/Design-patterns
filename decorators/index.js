const Shopper = require("./shopper");
const {
  GoldenInventoryItem,
  DiamondInventoryItem,
  InventoryItem
} = require("./InventoryItem");

const alex = new Shopper("Alex", 6000);

const walkMan = new InventoryItem("Walkman", 29.99);
const necklace = new InventoryItem("Necklace", 9.99);

const gold_necklace = new GoldenInventoryItem(necklace);
const diamond_gold_necklace = new DiamondInventoryItem(gold_necklace);
const diamond_walkman = new DiamondInventoryItem(walkMan);

alex.purchase(diamond_gold_necklace);
alex.purchase(diamond_walkman);

diamond_gold_necklace.print();

alex.printStatus();
