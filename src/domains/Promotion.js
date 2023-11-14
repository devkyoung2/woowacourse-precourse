class Promotion {
  static isApply(totalPayment) {
    return totalPayment > 10000;
  }
  static isChristmasDiscount() {}
  static isWeekdayDessert() {}
  static isWeekendMain() {}
  static isSpecialDate() {}

  static getGift(payment) {
    return payment > 120000;
  }
}

export default Promotion;
