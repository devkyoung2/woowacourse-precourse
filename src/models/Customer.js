import Order from './Order.js';
import Badge from './Badge.js';

export default class Customer {
  #badge = new Badge();
  #targetmonth;
  #visitDate;
  #order;

  constructor(visitDate, targetMonth) {
    const validatedDate = this.#validateVisitDate(visitDate);
    this.#targetmonth = targetMonth;
    this.#visitDate = validatedDate;
  }

  // Todo : 검증 로직 정리하기
  #validateVisitDate(visitDate) {
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

  order(items) {
    this.#order = new Order(items, this.#visitDate, this.#targetmonth);
  }

  getOrderItems() {
    return this.#order.getOrderLog();
  }

  getVisitDate() {
    return this.#visitDate;
  }

  getTotalOrderPriceBeforeDiscount() {
    return this.#order.getTotalOrderPriceBeforeDiscount();
  }

  getGiveawayItems() {
    return this.#order.getGiveawayItems();
  }

  getPrmotionLog() {
    return this.#order.getPrmotionLog();
  }

  getTotalPromotion() {
    return this.#order.getTotalPromotion();
  }
  // Todo : "없음" 문자열 처리방법 확인하기
  // ? 뷰에서 출력되는 값은 온전히 모델로부터 와야하는데, "없음"이라는 값도 모델에서 전달해주는것이 맞는지
  // 아님 false로 받아서 view에서 default 처리 해주는지
  getTotalOrderPriceAfterDiscount() {
    if (this.#order.getGiveawayItems === '없음') {
      return this.getTotalOrderPriceBeforeDiscount() - this.getTotalPromotion();
    }

    return (
      this.getTotalOrderPriceBeforeDiscount() - this.getTotalPromotion() + 25000
    );
  }

  getBadge() {
    const totalDiscount = this.getTotalPromotion();
    return this.#badge.getBadge(totalDiscount);
  }
}
