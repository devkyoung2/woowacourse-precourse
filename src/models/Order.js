import Menu from './../data/Menu.js';

export default class Order {
  #orderItems;

  constructor(items) {
    this.#validateOrder(items);
    this.#orderItems = items;
  }

  #validateOrder(item) {
    // Todo 유효성 검증 기능
  }
}
