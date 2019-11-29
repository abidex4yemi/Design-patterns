class Person {
  constructor(name = "un-name person") {
    this.name = name;
  }

  toString() {
    return JSON.stringify(this);
  }
}

module.exports = Person;
