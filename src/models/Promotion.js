export default class Promotion {
  #orderLog;
  #visitDate;
  #targetMonth;

  constructor(orderLog, visitDate, targetMonth) {
    this.#orderLog = orderLog;
    this.#visitDate = visitDate;
    this.#targetMonth = targetMonth;
  }

  getGiveawayItems(totalOrderPrice) {
    if (totalOrderPrice > 120000) {
      return '샴페인 1개';
    }
    return '없음';
  }
}
