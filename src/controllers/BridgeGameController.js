import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import BridgeMaker from '../domains/BridgeMaker.js';
import BridgeRandomNumberGenerator from '../domains/BridgeRandomNumberGenerator.js';
import { Validator } from '../validator/index.js';
import BridgeGame from '../domains/model/BridgeGame.js';

class BridgeGameController {
  #bridgeGame;

  async run() {
    OutputView.printWelcomeMessage();
    await this.#gameInit();
    await this.#gameStart(this.#bridgeGame);
    this.#gameEnd(this.#bridgeGame);
  }

  // ? 사이즈를 필드에 선언했어야했는지
  async #gameInit() {
    const size = await this.#readBridgeSize();
    const bridge = this.#makeBridge(size);
    this.#bridgeGame = new BridgeGame(bridge);
  }

  // ? 함수를 더 분리할 수 잇는지
  // eslint-disable-next-line max-lines-per-function
  async #gameStart(bridgeGame) {
    while (!bridgeGame.isFinish()) {
      const seletedMoving = await this.#readMoving();
      bridgeGame.move(seletedMoving);
      OutputView.printMap(bridgeGame.getStatus());
      if (!bridgeGame.isMovable(seletedMoving)) {
        await this.#gameRetry(bridgeGame);

        return;
      }
      bridgeGame.roundFinish();
    }
  }

  async #gameRetry(bridgeGame) {
    const retry = await this.#readGameCommand();
    if (retry === 'R') {
      bridgeGame.retry();
      await this.#gameStart(bridgeGame);
    }
  }

  #gameEnd(bridgeGame) {
    const status = bridgeGame.getStatus();
    const result = bridgeGame.getResult();
    const attempt = bridgeGame.getAttempt();

    OutputView.printResult(status, result, attempt);
  }

  async #readGameCommand() {
    try {
      const retry = await InputView.readGameCommand();
      Validator.validateRetry(retry);
      return retry;
    } catch ({ message }) {
      OutputView.printError(message);
      return this.#readGameCommand();
    }
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
