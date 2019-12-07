class Storage {
  constructor(name, inventory = [], deliveryTime = 0) {
    this.name = name;
    this.inventory = inventory;
    this.deliveryTime = deliveryTime;
    this.next = null;
  }

  setNext(storage) {
    this.next = storage;
  }

  lookInLocalInventory(itemName) {
    const index = this.inventory
      .map(item => item.name)
      .indexOf(itemName.toLowerCase());
    return this.inventory[index];
  }

  find(itemName) {
    const found = this.lookInLocalInventory(itemName);

    if (found) {
      return {
        ...found,
        location: this.name,
        deliveryTime:
          this.deliveryTime === 0 ? "Now" : `${this.deliveryTime} day(s)`
      };
    } else if (this.next) {
      return this.next.find(itemName);
    } else {
      return `We do not carry ${itemName}`;
    }
  }
}

module.exports = Storage;
