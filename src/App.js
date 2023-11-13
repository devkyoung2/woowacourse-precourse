import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import User from './domains/User.js';

class App {
  #user;

  constructor() {
    this.#user = new User();
  }

  async run() {
    OutputView.printWecome();
    await this.inputDate();
    await this.inputOrder();
  }

  async inputDate() {
    try {
      const date = await InputView.readDate();
      this.#user.setDate(date);
    } catch (error) {
      OutputView.printError(error.message);

      return this.inputDate();
    }
  }

  async inputOrder() {
    try {
      const order = await InputView.readOrder();
      console.log(order);
    } catch (error) {
      OutputView.printError(error.message);

      return this.inputOrder();
    }
  }
}

export default App;
