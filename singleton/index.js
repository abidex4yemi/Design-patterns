const logger = require("./logger");
const Shopper = require("./shopper");
const Store = require("./store");

logger.log("Starting app");

const alex = new Shopper("Alex", 500);
const ski_shop = new Store("Steep and Deep supplies", [
  {
    item: "Down hills skils",
    qty: 5,
    price: 750
  },
  {
    item: "Knit Hat",
    qty: 20,
    price: 5
  }
]);

logger.log("finished config...");

console.log(`${logger.count} logs total`);

// Note it only logs message in this current file
// meaning we have multiple instance of Logger being created
// Solution: is to make a singleton pattern one instance only
logger.logs.map(log => console.log(`   ${log.message}`));
