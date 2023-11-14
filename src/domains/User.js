import { isNatural } from '../utils/validate.js';
import Order from './Order.js';
import Menu from './Menu.js';

export default class User {
  #date;
  #order;
  #orderDetail;

  setDate(date) {
    this.#validationDate(date);
    this.#date = date;
  }

  // 함수명 수정
  setOrderMenu(order) {
    const validatedOrder = this.#validationOrder(order);
    this.#order = new Order(validatedOrder);
    this.#orderDetail = this.#order.getOrderMenu();
    // orderMenu 이상 없을 시, 주문 인스턴스 생성
    // 생성된 객체 내부에서 주문 유효성 검증
  }

  getOrderMenu() {
    return this.#orderDetail;
  }

  getPaymentBeforeDiscount() {
    return this.#order.caculateOrder(this.#orderDetail);
  }
  // getPromotion

  #validationDate(date) {
    const dateNumber = Number(date);

    if (!isNatural(dateNumber))
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');

    if (dateNumber < 1 || dateNumber > 31)
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');

    return dateNumber;
  }

  #validationOrder(order) {
    const parsedOrder = parsingOrder(order);
    isDuplicatedOrder(parsedOrder);
    hasOrderInMenu(parsedOrder);
    const validatedOrder = isValidatedItemsCount(parsedOrder);

    return validatedOrder;
  }
}

function parsingOrder(orders) {
  const parsedOrders = [];

  for (const order of orders.split(',')) {
    const parsedOrder = order.split('-');

    if (parsedOrder.length !== 2) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
    const [item, count] = parsedOrder;
    parsedOrders.push({ name: item, count });
  }

  return parsedOrders;
}

function isDuplicatedOrder(orderArr) {
  const orderName = [];

  orderArr.forEach((item) => {
    if (orderName.includes(item.name)) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }

    orderName.push(item.name);
  });
}

function hasOrderInMenu(parsedOrder) {
  parsedOrder.forEach((item) => {
    if (!Menu.hasItemInMenu(item.name))
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  });
}

function isValidatedItemsCount(parsedOrder) {
  return parsedOrder.map((item) => {
    if (parseInt(item.count) !== Number(item.count)) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }

    if (parseInt(item.count) < 1) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }

    return { name: item.name, count: Number(item.count) };
  });
}
