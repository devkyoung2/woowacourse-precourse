import Menu from './Menu.js';
import Promotion from './Promotion.js';

class Order {
  #orderMenu;
  #date;
  #applyPromotion;
  #totalPayment = [];
  #totalPromotion = [];

  setDate(date) {
    this.#date = date;
  }
  setOrder(order) {
    this.#orderMenu = order;
    this.#totalPayment = this.caculateOrder();
    this.#applyPromotion = Promotion.isApply(this.#totalPayment);
  }

  getOrderMenu() {
    return this.#orderMenu;
  }

  // 계산
  caculateOrder() {
    let totalPayment = 0;

    this.#orderMenu.forEach((item) => {
      totalPayment += item.count * Menu.getPrice(item.name);
    });

    return totalPayment;
  }

  // 증정 메뉴
  getGiveaway() {
    return this.#applyPromotion && Promotion.giveaway(this.#totalPayment);
  }

  // 혜택 내역
  getPromotionDetails() {
    if (!this.#applyPromotion) return false;

    const promotionDetails = [];
    promotionDetails.push(Promotion.christmasDiscount(this.#date));
    promotionDetails.push(
      Promotion.weekdayDessert(this.#date, this.#orderMenu)
    );
    promotionDetails.push(Promotion.weekendMain(this.#date, this.#orderMenu));
    promotionDetails.push(Promotion.specialDate(this.#date, this.#orderMenu));
    promotionDetails.push(Promotion.giveaway(this.#totalPayment));

    const applyPromotionDetails = promotionDetails.filter((item) => item);

    this.#totalPromotion = applyPromotionDetails;
    return applyPromotionDetails;
  }

  // 총 혜택 금액
  getTotalPromotionAmount() {
    const totalPromotionAmount = this.#totalPromotion.reduce((acc, cur) => {
      return acc + cur.discount;
    }, 0);

    return totalPromotionAmount;
  }

  // 할인 후 예상 결제 금액
  getPaymentAfterDiscount() {
    return this.#totalPayment - this.getTotalPromotionAmount();
  }

  getEventBadge() {
    if (!this.#applyPromotion) return false;

    const badge = Promotion.EventBadge();
    return badge;
  }
}

export default Order;
