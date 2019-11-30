const CatalogGroup = require("./CatalogGroup");
const CatalogItem = require("./CatalogItem");

// Catalog item Shoes and such
const boots = new CatalogItem("Leather boots", 79.99);
const sneakers = new CatalogItem("Kicks", 39.99);
const flipFlops = new CatalogItem("California wook boots", 19.99);

// Catalog groups
const groupShoes = new CatalogGroup("Shoes and such", [
  boots,
  sneakers,
  flipFlops
]);

const groupFoods = new CatalogGroup("Food for while you try on clothes", [
  new CatalogItem("Milkshake", 5.99),
  new CatalogItem("French fries", 3.99)
]);

const keyChain = new CatalogItem("Key Chain", 0.99);

// More complex composition
const catalog = new CatalogGroup("Clothes and Food", [
  groupShoes,
  groupFoods,
  keyChain
]);

console.log(`${catalog.total}`);
catalog.print();
// console.log(`Boots total: $${boots.price}`);
// console.log(`Shoes total: ${groupShoes.total}`);

// boots.print();
// sneakers.print();

// groupShoes.print();
