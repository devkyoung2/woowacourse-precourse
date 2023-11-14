import Menu from './Menu.js';

class Order {
  constructor(order) {
    const validatedOrder = this.#validationOrder(order);
  }

  #validationOrder(orders) {
    if (Menu.isOnlyDrink(orders))
      throw new Error('[ERROR] 음료만 주문할 수 없습니다.');

    if (countOrderItems(orders) > 20) {
      throw new Error('[ERROR] 메뉴는 20개까지 주문할 수 있습니다.');
    }

    // - [] 총 주문 금액이 10000원 이상이어야 한다.
  }
}

function countOrderItems(orders) {
  const items = orders.map((item) => item.count);
  return items.reduce((acc, cur) => acc + cur);
}

export default Order;
