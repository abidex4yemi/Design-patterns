const userFactory = require("./userFactory");

const alex = userFactory({
  name: "Alex Banks",
  money: 100
});

const eve = userFactory({
  name: "Eve Porcello",
  money: 100,
  userType: "employee",
  employer: "This and that"
});

eve.payDay(150);

console.log(alex.toString());
console.log(eve.toString());
