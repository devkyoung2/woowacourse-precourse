import Order from './Order.js';

export default class Customer {
  #targetmonth;
  #visitDate;
  #order;

  constructor(visitDate, targetMonth) {
    const validatedDate = this.#validateVisitDate(visitDate);
    this.#targetmonth = targetMonth;
    this.#visitDate = validatedDate;
  }

  getTotalPromotion() {
    return this.#order.getTotalPromotion();
  }

  getPrmotionLog() {
    return this.#order.getPrmotionLog();
  }
  getGiveawayItems() {
    return this.#order.getGiveawayItems();
  }
  order(items) {
    this.#order = new Order(items, this.#visitDate, this.#targetmonth);
  }

  getTotalOrderPriceAfterDiscount() {
    return this.getTotalOrderPriceBeforeDiscount() - this.getTotalPromotion();
  }

  getTotalOrderPriceBeforeDiscount() {
    return this.#order.getTotalOrderPriceBeforeDiscount();
  }

  getOrderItems() {
    return this.#order.getOrderLog();
  }
  getVisitDate() {
    return this.#visitDate;
  }

  #validateVisitDate(visitDate) {
    // 숫자인지
    if (isNaN(visitDate)) {
      throw new Error(
        '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.\n'
      );
    }
    const visitDateNumber = Number(visitDate);

    if (visitDateNumber % 1 !== 0) {
      throw new Error(
        '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.\n'
      );
    }

    if (visitDateNumber > 31 || visitDateNumber < 1) {
      throw new Error(
        '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.\n'
      );
    }
    return Number(visitDate);
  }
}
