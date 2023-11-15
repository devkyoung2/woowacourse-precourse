import Order from './Order.js';
import Menu from './Menu.js';
import { ERROR_MESSAGE, MAX_ORDER_COUNT } from '../constants/message.js';
import { isNatural } from '../utils/validate.js';

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
    this.#order.setOrderMenu(validatedOrderMenu);
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

    checkDuplicatedOrderMenu(parsedOrderMenuArr);
    checkOrderMenuNameInMenu(parsedOrderMenuArr);

    const validatedOrderMenu = getValidatedItemsCount(parsedOrderMenuArr);

    checkOveredMaxOrderCount(validatedOrderMenu);
    checkOrderOnlyDrink(validatedOrderMenu);

    return validatedOrderMenu;
  }

  getVisitDate() {
    return this.#order.getVisitDate();
  }

  orderMenu() {
    return this.#order.getOrderMenu();
  }

  paymentBeforeDiscount() {
    return this.#order.getPaymentBeforeDiscount();
  }

  giveaway() {
    return this.#order.getGiveaway();
  }

  promotionDetails() {
    const promotionDetails = this.#order.getPromotionDetails();

    return promotionDetails;
  }

  totalPromotionAmount() {
    return this.#order.getTotalPromotionAmount();
  }

  paymentAfterDiscount() {
    return this.#order.getPaymentAfterDiscount();
  }

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

function checkDuplicatedOrderMenu(orderMenuArr) {
  const orderName = [];

  orderMenuArr.forEach((item) => {
    if (orderName.includes(item.name)) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }

    orderName.push(item.name);
  });
}

function checkOrderMenuNameInMenu(orderMenuArr) {
  orderMenuArr.forEach((item) => {
    if (!Menu.hasItemInMenu(item.name)) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }
  });
}

function getValidatedItemsCount(orderMenuArr) {
  return orderMenuArr.map((item) => {
    const itemCount = Number(item.count);

    if (isNaN(itemCount) || itemCount < 1) {
      throw new Error(ERROR_MESSAGE.INVALID_ORDER);
    }

    return { name: item.name, count: itemCount };
  });
}

function checkOveredMaxOrderCount(orderMenuArr) {
  const itemsCount = orderMenuArr.map((item) => item.count);
  const totalItemsCount = itemsCount.reduce((acc, cur) => acc + cur);

  if (totalItemsCount > MAX_ORDER_COUNT) {
    throw new Error(ERROR_MESSAGE.OVER_MAX_ORDER);
  }
}

function checkOrderOnlyDrink(orderMenuArr) {
  if (Menu.isOnlyDrink(orderMenuArr)) {
    throw new Error(ERROR_MESSAGE.ORDER_ONLY_DRINK);
  }
}
