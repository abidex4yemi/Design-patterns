const Storage = require("./storage");

class Store {
  constructor(name, inventory = []) {
    this.name = name;
    this.inventory = inventory;

    const floor = new Storage("Store floor", this.inventory.floor);
    const backroom = new Storage("Store backroom", this.inventory.backroom);
    const localStore = new Storage(
      "Nearby store",
      this.inventory.localStore,
      1
    );
    const warehouse = new Storage("Warehouse", this.inventory.warehouse, 5);

    this.storage = floor;

    floor.setNext(backroom);
    backroom.setNext(localStore);
    localStore.setNext(warehouse);
  }

  find(itemName) {
    return this.storage.find(itemName);
  }
}

module.exports = Store;
