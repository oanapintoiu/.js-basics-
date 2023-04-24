class ShoppingBasket {
  constructor() {
    this.candies = [];
  }

  addItem(candy) {
    this.candies.push(candy);
  }

  getTotalPrice() {
    return this.candies.reduce(
      (current, candy) => current + candy.getPrice(), 0);
  }
}

module.exports = ShoppingBasket;