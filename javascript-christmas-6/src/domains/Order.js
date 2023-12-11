import Menu from './Menu.js';
import Promotion from './Promotion.js';

class Order {
  #orderMenu;
  #date;

  #totalPayment = 0;
  #totalDiscount = [];

  setDate(date) {
    this.#date = date;
  }

  setOrderMenu(orderMenu) {
    this.#orderMenu = orderMenu;
  }

  getVisitDate() {
    return this.#date;
  }

  getOrderMenu() {
    return this.#orderMenu;
  }

  getPaymentBeforeDiscount() {
    let totalPayment = 0;

    this.#orderMenu.forEach((item) => {
      totalPayment += item.count * Menu.getPrice(item.name);
    });

    this.#totalPayment = totalPayment;

    return totalPayment;
  }

  getGiveaway() {
    if (!Promotion.isApply(this.#totalPayment)) return false;

    return Promotion.getGiveway(this.#totalPayment);
  }

  getPromotionDetails() {
    if (!Promotion.isApply(this.#totalPayment)) return false;

    const promotionDetails = Promotion.getPromotionDetailsAll(
      this.#date,
      this.#orderMenu,
      this.#totalPayment
    );

    const applyPromotionDetails = promotionDetails.filter((item) => item);

    if (applyPromotionDetails.length === 0) {
      return false;
    }

    this.#totalDiscount = applyPromotionDetails;

    return applyPromotionDetails;
  }

  getTotalPromotionAmount() {
    const totalPromotionAmount = this.#totalDiscount.reduce((acc, cur) => {
      return acc + cur.discount;
    }, 0);

    return totalPromotionAmount;
  }

  getPaymentAfterDiscount() {
    if (Promotion.getGiveway(this.#totalPayment)) {
      return this.#totalPayment - this.getTotalPromotionAmount() + 25000;
    }

    return this.#totalPayment - this.getTotalPromotionAmount();
  }

  getEventBadge() {
    if (!Promotion.isApply(this.#totalPayment)) return false;

    const badge = Promotion.EventBadge(this.getTotalPromotionAmount());

    return badge;
  }
}

export default Order;
