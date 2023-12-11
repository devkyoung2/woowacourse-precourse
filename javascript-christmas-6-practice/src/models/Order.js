// ? 메뉴판에게 위임을 해야하는데 그렇다면 애초에 메뉴판이 class로 제작되는게 맞았는지 확인
import Menu from './../data/Menu.js';
import Bill from './Bill.js';
import { isPositive } from '../utils/isRange.js';

export default class Order {
  #bill;
  #orderLog;
  #visitDate;

  // ? promotion 객체가 Order에서 생성되는게 맞는지, Bill에서 생성되는게 맞는지 확인
  constructor(items, visitDate) {
    const validedOrder = this.#getValidateOrder(items);
    this.#orderLog = validedOrder;
    this.#visitDate = visitDate;
    this.#bill = new Bill(this.#orderLog, this.#visitDate);
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
  // Todo : 검증 로직 정리하기
  // ? getValidOrderFormat 함수명
  // ? getValidOrderFormat에서 is로 시작해야하는지 get으로 시작해야하는지
  #getValidOrderFormat(items) {
    const splitItems = items.split(',');
    const parsedItems = {};

    for (const item of splitItems) {
      const parsedItem = item.split('-');

      if (parsedItem.length !== 2) {
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

      if (!beveragesNames.includes(itemName)) return;
    }

    throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  }

  // Todo : 역할 분리
  #checkIsValidItemsAmount(orderItems) {
    const orderItemsAmount = Object.values(orderItems);

    orderItemsAmount.forEach((itemCount) => {
      // ? isNaN 사용에 대해 고민
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
      if (!isPositive(itemCount)) {
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

  getOrderLog() {
    return this.#orderLog;
  }

  getTotalOrderPriceBeforeDiscount() {
    return this.#bill.getTotalOrderPriceBeforeDiscount();
  }

  getGiveawayItems() {
    return this.#bill.getGiveawayItems();
  }

  getPrmotionLog() {
    return this.#bill.getPrmotionLog();
  }

  getTotalPromotion() {
    return this.#bill.getTotalPromotion();
  }
}
