const Person = require("./Person");

class Shopper extends Person {
  constructor({ name, money }) {
    super(name);
    this.money = money;
    this.employed = false;
  }
}

module.exports = Shopper;
