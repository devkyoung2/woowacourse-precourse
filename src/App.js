import Customer from './models/Customer.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import { TARGET_MONTH } from './constants/date.js';

class App {
  #targetMonth = TARGET_MONTH;
  #customer;

  async run() {
    OutputView.printWelcomeMessage(this.#targetMonth);
    await this.#readDate();
    await this.#readOrder();
    const orderItmes = this.#customer.getOrderItems();
    const visitDate = this.#customer.getVisitDate();
    this.#printEventPlanner(orderItmes, visitDate);
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

  // ? 아래에서 사용되는 this#customer을 custormer이라는 파라미터로 전달받아 사용하는것과, 클래스필드에 직접 접근하는것중 어떤게 더 좋은지

  #printMenu(orderItmes) {
    OutputView.printMenu(orderItmes);
  }

  #printTotalOrderPriceBeforeDiscount() {
    const price = this.#customer.getTotalOrderPriceBeforeDiscount();
    OutputView.printTotalOrderPriceBeforeDiscount(price);
  }

  #printGiveawayItems() {
    const isGetGiveawayItems = this.#customer.getGiveawayItems();
    OutputView.printGiveawayItems(isGetGiveawayItems);
  }

  #printPromotionLog() {
    const promotionLog = this.#customer.getPrmotionLog();
    OutputView.printPromotionLog(promotionLog);
  }

  #printTotalPromotion() {
    const totalPromotion = this.#customer.getTotalPromotion();
    OutputView.printTotalPromotion(totalPromotion);
  }

  #printTotalOrderPriceAfterDiscount() {
    const price = this.#customer.getTotalOrderPriceAfterDiscount();
    OutputView.printTotalOrderPriceAfterDiscount(price);
  }

  #printBadge() {
    const badge = this.#customer.getBadge();
    OutputView.printBadge(this.#targetMonth, badge);
  }
}

export default App;
