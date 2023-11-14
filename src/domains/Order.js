import Menu from './Menu.js';
import Promotion from './Promotion.js';

class Order {
  #order;
  #date;
  #applyPromotion;
  #totalPayment;

  constructor(date, order) {
    this.#order = order;
    this.#date = date;
    this.#totalPayment = this.caculateOrder();
    this.#applyPromotion = Promotion.isApply(this.#totalPayment);
  }

  getOrderMenu() {
    return this.#order;
  }

  // 계산
  caculateOrder() {
    let totalPayment = 0;

    this.#order.forEach((item) => {
      totalPayment += item.count * Menu.getPrice(item.name);
    });

    return totalPayment;
  }

  // 증정
  getGiveawayPromotion() {
    return this.#applyPromotion && Promotion.getGift(this.#totalPayment);
  }
}

export default Order;
