import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import BridgeMaker from '../domains/BridgeMaker.js';

class BridgeGameController {
  async run() {
    OutputView.printWelcomeMessage();
    await this.#readBridgeSize();
  }

  async #readBridgeSize() {
    try {
      const size = await InputView.readBridgeSize();
      BridgeMaker.makeBridge(size);
    } catch ({ message }) {
      OutputView.printError(message);
      return this.#readBridgeSize();
    }
  }
}

export default BridgeGameController;
