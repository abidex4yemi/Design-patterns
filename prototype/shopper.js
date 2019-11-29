const logger = require("./logger");

class Shopper {
  constructor(name, money = 0, shoppingList = []) {
    this.name = name;
    this.money = money;
    this.shoppingList = shoppingList;
    logger.log(`New Shopper ${name} has ${money} in their account.    `);
  }

  addItemToList(item) {
    this.shoppingList.push(item);
  }
}

module.exports = Shopper;
