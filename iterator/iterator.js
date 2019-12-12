class Iterator {
  constructor(items = []) {
    this.items = items;
    this.index = 0;
  }

  first() {
    const [first] = this.items;
    return first;
  }

  last() {
    const [last] = [...this.items].reverse();
    return last;
  }

  prev() {
    if  (this.index !== 0) {
      this.index--;
    }

    return this.current();
  }

  hasNext() {
    return this.index < this.items.length - 1;
  }

  current() {
    return this.items[this.index];
  }

  next() {
    if (this.hasNext()) {
      this.index++;
    }

    return this.current();
  }
}

module.exports = Iterator;
