import Event from './Event.js';
import Order from './Order.js';

class User {
  #event;
  #order;

  constructor() {
    this.#event = new Event();
    this.#order = new Order();
  }

  setEvent() {}

  setOrder() {}
}

export default User;
