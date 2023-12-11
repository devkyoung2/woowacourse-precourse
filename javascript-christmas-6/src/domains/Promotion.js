import Menu from './Menu.js';

const SPECIAL_DATE = [3, 10, 17, 24, 25, 31];
Object.freeze(SPECIAL_DATE);

const DISCOUNT_AMOUNT = 2023;
const WEEKDAY_DISCOUNT = DISCOUNT_AMOUNT;
const WEEKEND_DISCOUNT = DISCOUNT_AMOUNT;

const SPECIAL_DISCOUNT = 1000;

const GIVEWAY = '샴페인 1개';
const GIVEWAY_PRICE = 25000;
const REQUIRED_AMOUNT_FOR_GIVEWAY = 120000;

const EVENT_BADGE_SANTA = '산타';
const EVENT_BADGE_TREE = '트리';
const EVENT_BADGE_STAR = '별';

const REQUIRED_AMOUNT_FOR_SANTA_BADGE = 20000;
const REQUIRED_AMOUNT_FOR_TREE_BADGE = 10000;
const REQUIRED_AMOUNT_FOR_STAR_BADGE = 5000;

function isWeekend(date) {
  return date % 7 === 1 || date % 7 === 2;
}

function isSpecialDay(date) {
  return SPECIAL_DATE.includes(date);
}

class Promotion {
  static isApply(totalPayment) {
    return totalPayment > 10000;
  }

  static getGiveway(totalPayment) {
    return totalPayment > REQUIRED_AMOUNT_FOR_GIVEWAY && GIVEWAY;
  }

  static getPromotionDetailsAll(date, orderArr, totalPayment) {
    const promotionDetails = [];

    promotionDetails.push(Promotion.christmasDiscount(date));
    promotionDetails.push(Promotion.weekdayDessert(date, orderArr));
    promotionDetails.push(Promotion.weekendMain(date, orderArr));
    promotionDetails.push(Promotion.specialDate(date));
    promotionDetails.push(Promotion.giveaway(totalPayment));

    return promotionDetails;
  }

  static christmasDiscount(date) {
    const discount = (date - 1) * 100 + 1000;

    return date < 26 && { type: '크리스마스 디데이 할인', discount };
  }

  static weekdayDessert(date, orderArr) {
    if (isWeekend(date)) {
      return false;
    }

    let discount = 0;

    orderArr.forEach((item) => {
      if (Menu.isDessert(item.name)) {
        discount += item.count * WEEKDAY_DISCOUNT;
      }
    });

    return { type: '평일 할인', discount };
  }

  static weekendMain(date, orderArr) {
    if (!isWeekend(date)) {
      return false;
    }

    let discount = 0;

    orderArr.forEach((item) => {
      if (Menu.isMain(item.name)) {
        discount += item.count * WEEKEND_DISCOUNT;
      }
    });

    return { type: '주말 할인', discount };
  }

  static specialDate(date) {
    return (
      isSpecialDay(date) && { type: '특별 할인', discount: SPECIAL_DISCOUNT }
    );
  }

  static giveaway(payment) {
    return payment > REQUIRED_AMOUNT_FOR_GIVEWAY
      ? { type: '증정 이벤트', discount: GIVEWAY_PRICE }
      : false;
  }

  static EventBadge(promotionAmount) {
    if (promotionAmount > REQUIRED_AMOUNT_FOR_SANTA_BADGE) {
      return EVENT_BADGE_SANTA;
    }
    if (promotionAmount > REQUIRED_AMOUNT_FOR_TREE_BADGE) {
      return EVENT_BADGE_TREE;
    }
    if (promotionAmount > REQUIRED_AMOUNT_FOR_STAR_BADGE) {
      return EVENT_BADGE_STAR;
    }
    return false;
  }
}

export default Promotion;
