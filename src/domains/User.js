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
    const parsedOrder = parsingOrder(order);
    this.#validationOrder(parsedOrder);
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

  #validationOrder(parsedOrder) {
    // 유효성 확인
  }
}

function parsingOrder(orders) {
  const parsedOrders = {};

  for (const order of orders.split(',')) {
    const parsedOrder = order.split('-');

    if (parsedOrder.length !== 2) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }

    const [item, count] = parsedOrder;

    parsedOrders[item] = parseInt(count) || 0;
  }

  return parsedOrders;
}
