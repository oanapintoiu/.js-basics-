// Challenge

// https://github.com/makersacademy/javascript-fundamentals/blob/main/bites/12_classes.md#challenge

class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

module.exports = Candy;
