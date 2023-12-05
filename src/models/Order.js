import Menu from './../data/Menu.js';
import Bill from './Bill.js';

// 주문에 대해 확인
export default class Order {
  #bill;
  #orderLog;
  #visitDate;

  constructor(items, visitDate, targetMonth) {
    const validedOrder = this.#getValidateOrder(items);
    this.#orderLog = validedOrder;
    this.#visitDate = visitDate;
    this.#bill = new Bill(this.#orderLog, this.#visitDate, targetMonth);
  }

  getTotalPromotion() {
    return this.#bill.getTotalPromotion();
  }
  getPrmotionLog() {
    return this.#bill.getPrmotionLog();
  }

  getGiveawayItems() {
    return this.#bill.getGiveawayItems();
  }
  getTotalOrderPriceBeforeDiscount() {
    return this.#bill.getTotalOrderPriceBeforeDiscount();
  }

  getOrderLog() {
    return this.#orderLog;
  }

  #getValidateOrder(items) {
    const orderItems = this.#getValidOrderFormat(items);
    this.#checkHasInMenu(orderItems);
    this.#checkBeveragesOnly(orderItems);
    this.#checkIsValidItemsAmount(orderItems);
    this.#checkOverMaxOrderItems(orderItems);

    return orderItems;
  }

  // Todo : 역할 분리
  #getValidOrderFormat(items) {
    const splitItems = items.split(',');
    const parsedItems = {};

    for (const item of splitItems) {
      const parsedItem = item.split('-');

      if (parsedItem.length != 2) {
        throw new Error(
          '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.'
        );
      }
      if (parsedItems.hasOwnProperty(parsedItem[0])) {
        throw new Error(
          '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.'
        );
      }
      parsedItems[parsedItem[0]] = Number(parsedItem[1]);
    }

    return parsedItems;
  }

  #checkHasInMenu(items) {
    const menuItemsNames = Object.values(Menu)
      .flat()
      .map((item) => item.name);

    const orderItems = Object.keys(items);

    orderItems.forEach((item) => {
      if (!menuItemsNames.includes(item)) {
        throw new Error(
          '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.'
        );
      }
    });
  }

  #checkBeveragesOnly(orderItems) {
    for (const itemName in orderItems) {
      const beveragesNames = [...Menu.beverages].map((item) => item.name);

      if (!beveragesNames.includes(itemName)) {
        return;
      }
    }

    throw new Error('[ERROR] 음료만 주문할 수 없습니다. 다시 입력해 주세요.');
  }

  // Todo : 역할 분리
  #checkIsValidItemsAmount(orderItems) {
    const orderItemsAmount = Object.values(orderItems);

    orderItemsAmount.forEach((itemCount) => {
      if (isNaN(itemCount)) {
        throw new Error(
          '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.1'
        );
      }
      if (!Number.isInteger(itemCount)) {
        throw new Error(
          '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.2'
        );
      }
      if (!isRange(itemCount)) {
        throw new Error(
          '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.3'
        );
      }
    });
  }

  #checkOverMaxOrderItems(orderItems) {
    const orderItemsAmount = Object.values(orderItems);
    const totalOrderItemAmount = orderItemsAmount.reduce(
      (pre, cur) => pre + cur,
      0
    );

    if (totalOrderItemAmount > 20) {
      throw new Error(
        '[ERROR] 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다. 다시 입력해 주세요.'
      );
    }
  }
}

function isRange(num) {
  return num > 0;
}
// 메뉴판에게 위임을 해야하는데 그렇다면 애초에 메뉴판이 class로 제작되는게 맞았는지 확인
// getValidOrderFormat에서 is로 시작해야하는지 get으로 시작해야하는지
