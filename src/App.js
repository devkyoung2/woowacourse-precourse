import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  async run() {
    OutputView.printWelcomeMessage();
    await this.#readDate();
  }

  async #readDate() {
    try {
      const visitDate = await InputView.readDate();
    } catch (error) {
      OutputView.printError(error.message);
      return this.#readDate();
    }
  }
}

export default App;
