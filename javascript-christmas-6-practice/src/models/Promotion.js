import Menu from '../data/Menu.js';
import {
  CATEGORY,
  GIVEAWAY,
  NONE_PROMOTION,
  MIN_PRICE_APPLIED_PROMOTION,
  MIN_PRICE_APPLIED_GIVEAWAY,
  SPECIAL_DAYS,
  GIVEAWAY_PRICE,
} from '../constants/promotion.js';

export default class Promotion {
  isApplyPromotion;
  #category = [
    CATEGORY.CHRISTMAS,
    CATEGORY.WEEKDAY,
    CATEGORY.WEEKEND,
    CATEGORY.SPECIAL,
    CATEGORY.GIFT_EVENT,
  ];

  constructor(totalOrderPrice) {
    this.isApplyPromotion = this.#isApplyPromotion(totalOrderPrice);
  }

  getPromotionCategory() {
    return this.#category;
  }

  getGiveawayItems(totalOrderPrice) {
    if (this.#isGetGiveawayItem(totalOrderPrice)) {
      return GIVEAWAY;
    }
    return NONE_PROMOTION;
  }

  isGetThisPromotion(type, visitDate, orderLog, totalOrderPrice) {
    if (!this.isApplyPromotion) return false;
    if (type === CATEGORY.CHRISTMAS) return this.#christmas(visitDate);
    if (type === CATEGORY.WEEKDAY) return this.#weekday(visitDate, orderLog);
    if (type === CATEGORY.WEEKEND) return this.#weekend(visitDate, orderLog);
    if (type === CATEGORY.SPECIAL) return this.#special(visitDate, orderLog);
    if (type === CATEGORY.GIFT_EVENT) return this.giveaway(totalOrderPrice);
  }

  #isApplyPromotion(totalOrderPrice) {
    totalOrderPrice > MIN_PRICE_APPLIED_PROMOTION;
  }

  #isGetGiveawayItem(totalOrderPrice) {
    totalOrderPrice > MIN_PRICE_APPLIED_GIVEAWAY;
  }

  #christmas(visitDate) {
    // ? 이렇게 식을 적어놓는것에 대해...
    return visitDate <= 25 ? 1000 + (visitDate - 1) * 100 : false;
  }

  #weekday(visitDate, orderLog) {
    if (isWeekend(visitDate)) return false;

    const desserts = Menu.desserts.map((item) => item.name);
    let profit = 0;

    for (const item in orderLog) {
      if (desserts.includes(item)) {
        profit += 2023 * orderLog[item];
      }
    }
    return profit;
  }

  #weekend(visitDate, orderLog) {
    if (!isWeekend(visitDate)) return false;

    const main = Menu.main.map((item) => item.name);
    let profit = 0;

    for (const item in orderLog) {
      if (main.includes(item)) {
        profit += 2023 * orderLog[item];
      }
    }
    return profit;
  }

  #special(visitDate) {
    if (SPECIAL_DAYS.includes(visitDate)) {
      return 1000;
    }
    return false;
  }

  giveaway(totalOrderPrice) {
    return this.getGiveawayItems(totalOrderPrice) === NONE_PROMOTION
      ? false
      : GIVEAWAY_PRICE;
  }
}

function isWeekend(day) {
  return day % 7 === 1 || day % 7 === 2;
}
