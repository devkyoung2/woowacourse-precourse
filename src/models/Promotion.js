import Menu from '../data/Menu.js';

export default class Promotion {
  isApplyPromotion;
  #category = [
    '크리스마스 디데이 할인',
    '평일 할인',
    '주말 할인',
    '특별 할인',
    '증정 이벤트',
  ];

  constructor(totalOrderPrice) {
    this.isApplyPromotion = totalOrderPrice > 10000;
  }

  getPromotionCategory() {
    return this.#category;
  }

  getGiveawayItems(totalOrderPrice) {
    if (totalOrderPrice > 120000) {
      return '샴페인 1개';
    }
    return '없음';
  }

  isGetThisPromotion(type, visitDate, orderLog, totalOrderPrice) {
    if (!this.isApplyPromotion) return false;
    if (type === '크리스마스 디데이 할인') return this.#christmas(visitDate);
    if (type === '평일 할인') return this.#weekday(visitDate, orderLog);
    if (type === '주말 할인') return this.#weekend(visitDate, orderLog);
    if (type === '특별 할인') return this.#special(visitDate, orderLog);
    if (type === '증정 이벤트') return this.#giveaway(totalOrderPrice);
  }

  #christmas(visitDate) {
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
    if ([3, 10, 17, 24, 25, 31].includes(visitDate)) {
      return 1000;
    }
    return false;
  }

  #giveaway(totalOrderPrice) {
    return this.getGiveawayItems(totalOrderPrice) === '없음' ? false : 25000;
  }
}

function isWeekend(day) {
  return day % 7 === 1 || day % 7 === 2;
}
