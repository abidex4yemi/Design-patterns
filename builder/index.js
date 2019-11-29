// const Person = require("./Person");
// Anti-pattern: called the telescoping constructor

// Solution

const PersonBuilder = require("./PersonBuilder");

// Employees
// const sue = new Person("Sue", true, true, 60);
// const bill = new Person("Bill", true, false, 20);
// const phill = new Person("Phil", true, false);

const sue = new PersonBuilder("Sue")
  .makeEmployee()
  .makeManager((workHours = 60))
  .build();

const bill = new PersonBuilder("Bill")
  .makeEmployee()
  .makePartTime()
  .build();

const phill = new PersonBuilder("Phill").makeEmployee().build();

// Shoppers
// const charles = new Person("Charles", false, false, 0, 500, [
//   "jeans",
//   "sunglasses"
// ]);

// const tabbitha = new Person("Tabbitha", false, false, 0, 1000);
const charles = new PersonBuilder("Charles")
  .withMoney(500)
  .withList(["jeans", "sunglasses"])
  .build();

const tabbitha = new PersonBuilder("Tabbitha").withMoney(1000).build();

console.log(charles.toString());
console.log(sue.toString());
console.log(bill.toString());
