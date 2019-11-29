class Shopper {
  constructor(name = "un-name user") {
    this._name = name;
    this._shoppingList = [];
  }

  addItemToList(item) {
    this._shoppingList.push(item);
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get shoppingList() {
    return this._shoppingList.join(", ");
  }

  clone() {
    // Get current object prototype
    const proto = Object.getPrototypeOf(this);
    // Create new object using current object instance
    const cloned = Object.create(proto);

    cloned._name = this._name;
    cloned._shoppingList = [...this._shoppingList];

    return cloned;
  }
}

module.exports = Shopper;
