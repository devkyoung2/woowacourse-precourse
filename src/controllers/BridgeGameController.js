import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import BridgeMaker from '../domains/BridgeMaker.js';
import BridgeRandomNumberGenerator from '../domains/BridgeRandomNumberGenerator.js';
import { Validator } from '../validator/index.js';
import BridgeGame from '../domains/model/BridgeGame.js';

class BridgeGameController {
  #bridgeGame;

  #bridge;

  async run() {
    OutputView.printWelcomeMessage();
    await this.#gameInit();
    await this.#gameStart(this.#bridgeGame);
    this.#gameEnd();
  }

  // ? 사이즈를 필드에 선언했어야했는지
  async #gameInit() {
    const size = await this.#readBridgeSize();
    const bridge = this.#makeBridge(size);
    this.#bridgeGame = new BridgeGame(bridge);
  }

  // eslint-disable-next-line max-lines-per-function
  async #gameStart(bridgeGame) {
    while (true) {
      if (bridgeGame.isFinish()) return;
      const seletedMoving = await this.#readMoving();
      if (!bridgeGame.isMovable(seletedMoving)) {
        bridgeGame.move(seletedMoving);
        OutputView.printMap(bridgeGame.getStatus());
        return;
      }
      bridgeGame.move(seletedMoving);
      OutputView.printMap(bridgeGame.getStatus());
    }
  }

  #gameEnd() {
    // 결과 출력
    // 몇번 시행했느지 출력
  }

  async #readBridgeSize() {
    try {
      const size = await InputView.readBridgeSize();
      Validator.validateSize(size);
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

  async #readMoving() {
    try {
      const seletedMove = await InputView.readMoving();
      Validator.validateMoving(seletedMove);
      return seletedMove;
    } catch ({ message }) {
      OutputView.printError(message);
      return this.#readMoving();
    }
  }
}

export default BridgeGameController;
