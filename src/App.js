import Customer from './models/Customer.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  #customer;
  async run() {
    OutputView.printWelcomeMessage();
    await this.#readDate();
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
}

export default App;
