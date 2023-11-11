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
  async run() {}
}

export default App;
