import Menu from './Menu.js';
import Promotion from './Promotion.js';

class Order {
  #order;
  #date;
  #promotion;
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

  // 증정 메뉴
  getGiveawayPromotion() {
    return this.#applyPromotion && Promotion.giveaway(this.#totalPayment);
  }

  // 혜택 내역
  getPromotionDetail() {
    if (!this.#applyPromotion) return false;

    const promotionDetail = [];
    promotionDetail.push(Promotion.christmasDiscount(this.#date));
    promotionDetail.push(Promotion.weekdayDessert(this.#date, this.#order));
    promotionDetail.push(Promotion.weekendMain(this.#date, this.#order));
    promotionDetail.push(Promotion.specialDate(this.#date, this.#order));
    promotionDetail.push(Promotion.giveaway(this.#totalPayment));

    return promotionDetail;
  }
}

export default Order;
