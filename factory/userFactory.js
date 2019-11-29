const Employee = require("./Employee");
const Shopper = require("./Shopper");

const userFactory = ({
  name,
  money = 0,
  userType = "shopper",
  employer = ""
}) => {
  if (userType === "employee") {
    return new Employee({ name, money, employer });
  }

  return new Shopper({ name, money });
};

module.exports = userFactory;
