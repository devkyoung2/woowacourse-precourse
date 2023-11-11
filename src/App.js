import User from './domains/User.js';
import Menu from './domains/Menu.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  #user;
  #menu;

  constructor() {
    this.#user = new User();
    this.#menu = new Menu();
  }

  async run() {
    OutputView.printWecome();
    await this.inputDate();
    await this.inputOrder();
  }

  async inputDate() {
    const date = await InputView.readDate();
    // this.#user.setOrder(date);
  }

  async inputOrder() {
    const order = await InputView.readOrder();
    // this.#user.inputOrder();
  }
}

export default App;
