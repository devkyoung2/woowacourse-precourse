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
  }

  #printMenu(orderItmes) {
    OutputView.printMenu(orderItmes);
  }

  async #readDate() {
    try {
      const visitDate = await InputView.readDate();
      this.#customer = new Customer(visitDate);
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
