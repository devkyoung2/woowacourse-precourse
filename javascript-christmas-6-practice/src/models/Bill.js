import Menu from '../data/Menu.js';
import Promotion from './Promotion.js';

export default class Bill {
  #orderLog;
  #visitDate;
  #promotion;

  constructor(orderLog, visitDate) {
    this.#orderLog = orderLog;
    this.#visitDate = visitDate;

    // ? totalOrderPrice가 많이 사용되는데 클래스 필드에 두는것이 나은지
    // ? 만약 필요시마다 호출해 값을 얻어온다면 성능차이가 심한지
    // ? 실제 배민이나 다른 플랫폼 장바구니기능에서 자주 사용되는 방식 확인하기
    const totalOrderPrice = this.getTotalOrderPriceBeforeDiscount();
    this.#promotion = new Promotion(totalOrderPrice);
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

  getGiveawayItems() {
    const totalOrderPrice = this.getTotalOrderPriceBeforeDiscount();

    return this.#promotion.getGiveawayItems(totalOrderPrice);
  }

  // Todo : 함수 분리하기
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

  getTotalPromotion() {
    const promotionLog = this.getPrmotionLog();
    const totalPromotion = Object.values(promotionLog)
      .filter((price) => price)
      .reduce((pre, cur) => pre + cur, 0);

    return totalPromotion;
  }
}
