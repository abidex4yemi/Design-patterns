const Store = require("./store");
const inventory = require("./inventory");

const skiShop = new Store("Steep and Deep", inventory);
const searchItem = "ski rack";
const results = skiShop.find(searchItem);

console.log(results);
