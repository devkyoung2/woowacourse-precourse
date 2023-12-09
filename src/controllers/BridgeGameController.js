import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import BridgeMaker from '../domains/BridgeMaker.js';
import { Validator } from '../validator/index.js';

class BridgeGameController {
  async run() {
    OutputView.printWelcomeMessage();
    const size = await this.#readBridgeSize();
  }

  async #readBridgeSize() {
    try {
      const size = await InputView.readBridgeSize();
      Validator.Size();
      return size;
    } catch ({ message }) {
      OutputView.printError(message);
      return this.#readBridgeSize();
    }
  }
}

export default BridgeGameController;
