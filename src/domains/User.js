import { isNatural } from '../utils/validate.js';

export default class User {
  #date;
  #orderItem;

  setDate(date) {
    this.#validationDate(date);
    this.#date = date;
  }

  // 함수명 수정
  setOrderMenu(order) {
    this.#validationOrder(order);
    // orderMenu 이상 없을 시, 주문 인스턴스 생성
    // 생성된 객체 내부에서 주문 유효성 검증
  }

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
    // 메뉴판에 없는 메뉴가 입력되면 안됨
    // 메뉴의 개수는 1이상의 숫자
  }
}

function hasOrderInMenu(parsedOrder) {
  parsedOrder.some((item) => console.log(item));
  // console.log(parsedOrder);
}

function parsingOrder(orders) {
  const parsedOrders = [];

  for (const order of orders.split(',')) {
    const parsedOrder = order.split('-');

    if (parsedOrder.length !== 2) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
    const [item, count] = parsedOrder;
    parsedOrders.push({ [item]: count });
  }

  return parsedOrders;
}

function isDuplicatedOrder(orderArr) {
  const orderObj = {};

  orderArr.forEach((order) => {
    const [key, value] = Object.entries(order)[0];
    orderObj[key] = Number(value);
  });

  if (orderArr.length !== Object.keys(orderObj).length) {
    throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  }
}
