class Person {
  // Anti-pattern: called the telescoping constructor
  //   constructor(
  //     name,
  //     isEmployee = false,
  //     isManager = false,
  //     hours = 40,
  //     money = 0,
  //     shoppingList = []
  //   ) {
  //     this.name = name;
  //     this.isEmployee = isEmployee;
  //     this.isManager = isManager;
  //     this.hours = hours;
  //     this.money = money;
  //     this.shoppingList = shoppingList;
  //   }
  constructor(builder) {
    this.name = builder.name;
    this.isEmployee = builder.isEmployee;
    this.isManager = builder.isManager;
    this.workHours = builder.workHours || 0;
    this.money = builder.money || 0;
    this.shoppingList = builder.shoppingList | [];
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Person;
