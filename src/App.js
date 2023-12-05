import Customer from './models/Customer.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  #customer;
  async run() {
    OutputView.printWelcomeMessage();
    await this.#readDate();
    await this.#readOrder();
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
