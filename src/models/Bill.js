import Menu from '../data/Menu.js';
import Promotion from './Promotion.js';

export default class Bill {
  #orderLog; // { '해산물파스타': 2, '레드와인': 1, '초코케이크': 1 }
  #visitDate;
  #promotion;

  constructor(orderLog, visitDate) {
    this.#orderLog = orderLog;
    this.#visitDate = visitDate;

    const totalOrderPrice = this.getTotalOrderPriceBeforeDiscount();
    this.#promotion = new Promotion(totalOrderPrice);
  }

  getPrmotionLog() {
    const promotionCategory = this.#promotion.getPromotionCategory();
    const promotionLog = {};
    if (!this.#promotion.isApplyPromotion) {
      return false;
    }

    promotionCategory.forEach((protmotion) => {
      const profit = this.#promotion.isGetThisPromotion(
        protmotion,
        this.#visitDate,
        this.#orderLog,
        this.getTotalOrderPriceBeforeDiscount()
      );
      promotionLog[protmotion] = profit;
    });

    return promotionLog;
  }

  getGiveawayItems() {
    const totalOrderPrice = this.getTotalOrderPriceBeforeDiscount();

    return this.#promotion.getGiveawayItems(totalOrderPrice);
  }

  getTotalOrderPriceBeforeDiscount() {
    const menuItems = Object.values(Menu).flat();
    let orderPrice = 0;

    for (const [orderItem, amount] of Object.entries(this.#orderLog)) {
      menuItems.forEach((item) => {
        if (item.name === orderItem) {
          orderPrice += item.price * amount;
        }
      });
    }

    return orderPrice;
  }
}
