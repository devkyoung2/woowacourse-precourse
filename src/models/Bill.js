import Menu from '../data/Menu.js';

export default class Bill {
  #orderLog; // { '해산물파스타': 2, '레드와인': 1, '초코케이크': 1 }
  #visitDate;
  #promotion;

  constructor(orderLog, visitDate) {
    this.#orderLog = orderLog;
    this.#visitDate = visitDate;
  }

  getTotalOrderPriceBeforeDiscount() {
    const menuItems = Object.values(Menu).flat();
    let orderPrice = 0;

    for (const [orderItem, amount] of Object.entries(this.#orderLog)) {
      const a = menuItems.forEach((item) => {
        if (item.name === orderItem) {
          orderPrice += item.price * amount;
        }
      });
    }

    return orderPrice;
  }
}
