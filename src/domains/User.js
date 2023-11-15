import Order from './Order.js';
import Menu from './Menu.js';
import { isNatural } from '../utils/validate.js';
import { ERROR_MESSAGE, MAX_ORDER_COUNT } from '../constants/message.js';

export default class User {
  #order;

  constructor() {
    this.#order = new Order();
  }

  setDate(date) {
    const validatedDate = this.#validationDate(date);
    this.#order.setDate(validatedDate);
  }

  setOrderMenu(orderMenu) {
    const validatedOrderMenu = this.#validationOrderMenu(orderMenu);
    this.#order.setOrder(validatedOrderMenu);
  }

  #validationDate(date) {
    const dateNumber = Number(date);

    if (!isNatural(dateNumber)) throw new Error(ERROR_MESSAGE.INVALID_DATE);

    if (dateNumber < 1 || dateNumber > 31)
      throw new Error(ERROR_MESSAGE.INVALID_DATE);

    return dateNumber;
  }

  #validationOrderMenu(orderMenuStr) {
    const parsedOrderMenuArr = parsingOrderMenu(orderMenuStr);

    isDuplicatedOrderMenu(parsedOrderMenuArr);
    hasOrderMenuNameInMenu(parsedOrderMenuArr);

    const validatedOrderMenu = getValidatedItemsCount(parsedOrderMenuArr);

    isOveredMaxOrderCount(validatedOrderMenu);
    isOrderOnlyDrink(validatedOrderMenu);

    return validatedOrderMenu;
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

function parsingOrderMenu(orderMenuStr) {
  const parsedOrderMenus = [];

  for (const orderMenu of orderMenuStr.split(',')) {
    const parsedOrderMenu = orderMenu.split('-');

    if (parsedOrderMenu.length !== 2) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }

    const [name, count] = parsedOrderMenu;
    parsedOrderMenus.push({ name, count });
  }

  return parsedOrderMenus;
}

function isDuplicatedOrderMenu(orderMenuArr) {
  const orderName = [];

  orderMenuArr.forEach((item) => {
    if (orderName.includes(item.name)) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }

    orderName.push(item.name);
  });
}

function hasOrderMenuNameInMenu(orderMenuArr) {
  orderMenuArr.forEach((item) => {
    if (!Menu.hasItemInMenu(item.name)) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
  });
}

// 기능 수정
function getValidatedItemsCount(orderMenuArr) {
  return orderMenuArr.map((item) => {
    const itemCount = Number(item.count);

    if (isNaN(itemCount) || itemCount < 1) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }

    return { name: item.name, count: itemCount };
  });
}

function isOveredMaxOrderCount(orderMenuArr) {
  const itemsCount = orderMenuArr.map((item) => item.count);
  const totalItemsCount = itemsCount.reduce((acc, cur) => acc + cur);

  if (totalItemsCount > MAX_ORDER_COUNT) {
    throw new Error(ERROR_MESSAGE.OVER_MAX_ORDER);
  }
}

function isOrderOnlyDrink(orderMenuArr) {
  if (Menu.isOnlyDrink(orderMenuArr)) {
    throw new Error(ERROR_MESSAGE.ORDER_ONLY_DRINK);
  }
}
