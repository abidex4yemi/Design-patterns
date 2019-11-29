const Logger = require("./logger");
const Shopper = require("./shopper");
const Store = require("./store");

const logger = new Logger();

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

logger.logs.map(log => console.log(`   ${log.message}`));
