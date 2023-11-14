import Order from './Order.js';
import Menu from './Menu.js';
import { isNatural } from '../utils/validate.js';

const MAX_ORDER_COUNT = 20;

export default class User {
  #order;

  constructor() {
    this.#order = new Order();
  }

  setDate(date) {
    const validateDate = this.#validationDate(date);
    this.#order.setDate(validateDate);
  }
  setOrderMenu(order) {
    const validateOrder = this.#validationOrder(order);
    this.#order.setOrder(validateOrder);
  }

  #validationDate(date) {
    const dateNumber = Number(date);

    if (!isNatural(dateNumber))
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');

    if (dateNumber < 1 || dateNumber > 31)
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');

    return dateNumber;
  }

  #validationOrder(orderStr) {
    const parsedOrderArr = parsingOrder(orderStr);

    isDuplicatedOrder(parsedOrderArr);
    hasOrderNameInMenu(parsedOrderArr);

    const validatedOrder = getValidatedItemsCount(parsedOrderArr);

    isOveredMaxOrderCount(validatedOrder);
    isOrderOnlyDrink(validatedOrder);

    return validatedOrder;
  }

  // 주문 메뉴
  orderMenu() {
    return this.#order.getOrderMenu();
  }
  // 할인 전 총주문 금액
  paymentBeforeDiscount() {
    // 게터로 수정
    return this.#order.caculateOrder();
  }

  // 증정 메뉴
  giveaway() {
    const item = this.#order.getGiveaway();

    return item ? '샴페인 1개' : '없음';
  }

  // 혜택 내역
  promotionDetails() {
    const promotionDetails = this.#order.getPromotionDetails();

    return promotionDetails || '없음';
  }

  // 총혜택 금액
  totalPromotionAmount() {
    return this.#order.getTotalPromotionAmount();
  }

  // 할인 후 예상 결제 금액
  paymentAfterDiscount() {
    return this.#order.getPaymentAfterDiscount();
  }
  // 12월 이벤트 배지
  eventBadge() {
    return this.#order.getEventBadge();
  }
}

function parsingOrder(orderStr) {
  const parsedOrders = [];

  for (const order of orderStr.split(',')) {
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

function hasOrderNameInMenu(orderArr) {
  orderArr.forEach((item) => {
    if (!Menu.hasItemInMenu(item.name)) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  });
}
// 기능 수정
function getValidatedItemsCount(orderArr) {
  return orderArr.map((item) => {
    const count = Number(item.count);

    if (isNaN(count) || count < 1) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }

    return { name: item.name, count };
  });
}

function isOveredMaxOrderCount(orderArr) {
  const items = orderArr.map((item) => item.count);
  const itemsCount = items.reduce((acc, cur) => acc + cur);

  if (itemsCount > MAX_ORDER_COUNT) {
    throw new Error('[ERROR] 메뉴는 20개까지 주문할 수 있습니다.');
  }
}

function isOrderOnlyDrink(orderArr) {
  if (Menu.isOnlyDrink(orderArr)) {
    throw new Error('[ERROR] 음료만 주문할 수 없습니다.');
  }
}
