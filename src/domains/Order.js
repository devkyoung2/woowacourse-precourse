import Menu from './Menu.js';

class Order {
  #order;

  constructor(order) {
    this.#validationOrder(order);
    this.#order = order;
  }

  #validationOrder(order) {
    if (Menu.isOnlyDrink(order))
      throw new Error('[ERROR] 음료만 주문할 수 없습니다.');

    if (countOrderItems(order) > 20) {
      throw new Error('[ERROR] 메뉴는 20개까지 주문할 수 있습니다.');
    }
  }

  caculateOrder(order) {
    let totalPayment = 0;

    order.forEach((item) => {
      totalPayment += item.count * Menu.getPrice(item.name);
    });

    return totalPayment;
  }

  getOrderMenu() {
    return this.#order;
  }
}

function countOrderItems(order) {
  const items = order.map((item) => item.count);
  return items.reduce((acc, cur) => acc + cur);
}

export default Order;
