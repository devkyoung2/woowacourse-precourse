import Customer from './models/Customer.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  #targetMonth = 12;
  #customer;

  async run() {
    OutputView.printWelcomeMessage(this.#targetMonth);
    await this.#readDate();
    await this.#readOrder();
    const orderItmes = this.#customer.getOrderItems();
    const visitDate = this.#customer.getVisitDate();
    this.#printEventPlanner(orderItmes, visitDate);
  }

  #printEventPlanner(orderItmes, visitDate) {
    OutputView.printEventPlannerMessage(this.#targetMonth, visitDate);
    this.#printMenu(orderItmes);
    this.#printTotalOrderPriceBeforeDiscount();
    this.#printGiveawayItems();
    this.#printPromotionLog();
    this.#printTotalPromotion();
    this.#printTotalOrderPriceAfterDiscount();
    this.#printBadge();
  }
  #printBadge() {
    const badge = this.#customer.getBadge();
    OutputView.printBadge(this.#targetMonth, badge);
  }

  #printTotalOrderPriceAfterDiscount() {
    const price = this.#customer.getTotalOrderPriceAfterDiscount();
    OutputView.printTotalOrderPriceAfterDiscount(price);
  }

  #printTotalPromotion() {
    const totalPromotion = this.#customer.getTotalPromotion();
    OutputView.printTotalPromotion(totalPromotion);
  }

  #printPromotionLog() {
    const promotionLog = this.#customer.getPrmotionLog();
    OutputView.printPromotionLog(promotionLog);
  }

  #printGiveawayItems() {
    const isGetGiveawayItems = this.#customer.getGiveawayItems();
    OutputView.printGiveawayItems(isGetGiveawayItems);
  }

  #printMenu(orderItmes) {
    OutputView.printMenu(orderItmes);
  }

  #printTotalOrderPriceBeforeDiscount() {
    const price = this.#customer.getTotalOrderPriceBeforeDiscount();
    OutputView.printTotalOrderPriceBeforeDiscount(price);
  }

  async #readDate() {
    try {
      const visitDate = await InputView.readDate();
      this.#customer = new Customer(visitDate, this.#targetMonth);
    } catch (error) {
      OutputView.printError(error.message);
      return this.#readDate();
    }
  }

  async #readOrder() {
    try {
      const items = await InputView.readOrder();
      this.#customer.order(items);
    } catch (error) {
      OutputView.printError(error.message);
      return this.#readOrder();
    }
  }
}

export default App;
