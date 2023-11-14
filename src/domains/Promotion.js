import Menu from './Menu.js';

class Promotion {
  static isApply(totalPayment) {
    return totalPayment > 10000;
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
        discount += item.count * 2023;
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
        discount += item.count * 2023;
      }
    });

    return { type: '주말 할인', discount };
  }

  static specialDate(date) {
    return isSpecialDay(date) && { type: '특별 할인', discount: 1000 };
  }

  static giveaway(payment) {
    return payment > 120000 ? { type: '증정 이벤트', discount: 25000 } : false;
  }
}

const specialDate = [3, 10, 17, 24, 25, 31];

function isWeekend(date) {
  return date % 7 === 1 || date % 7 === 2;
}

function isSpecialDay(date) {
  return specialDate.includes(date);
}
export default Promotion;
