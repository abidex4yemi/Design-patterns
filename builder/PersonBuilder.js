const Person = require("./Person");

class PersonBuilder {
  constructor(name) {
    this.name = name;
  }

  makeEmployee() {
    this.isEmployee = true;
    return this;
  }

  makeManager(workHours = 40) {
    this.workHours = workHours;
    this.isManager = true;

    return this;
  }

  makePartTime(workHours = 20) {
    this.workHours = workHours;
    this.isPartTime = true;

    return this;
  }

  withMoney(money) {
    this.money = money;

    return this;
  }

  withList(list) {
    this.shoppingList = list;
    return this;
  }

  build() {
    return new Person(this);
  }
}

module.exports = PersonBuilder;
