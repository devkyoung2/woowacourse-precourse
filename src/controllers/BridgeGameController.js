import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import BridgeMaker from '../domains/BridgeMaker.js';
import BridgeRandomNumberGenerator from '../domains/BridgeRandomNumberGenerator.js';
import { Validator } from '../validator/index.js';

class BridgeGameController {
  async run() {
    OutputView.printWelcomeMessage();
    const size = await this.#readBridgeSize();
    const bridge = this.#makeBridge(size);
  }

  async #readBridgeSize() {
    try {
      const size = await InputView.readBridgeSize();
      Validator.Size(size);
      return size;
    } catch ({ message }) {
      OutputView.printError(message);
      return this.#readBridgeSize();
    }
  }

  #makeBridge(size) {
    const generateRandomNumber = BridgeRandomNumberGenerator.generate;
    const bridge = BridgeMaker.makeBridge(size, generateRandomNumber);

    return bridge;
  }
}

export default BridgeGameController;
