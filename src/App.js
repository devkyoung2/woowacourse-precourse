import BridgeGameController from './controllers/BridgeGameController.js';

class App {
  #bridgeGameController;

  constructor(bridgeGameController = new BridgeGameController()) {
    this.#bridgeGameController = bridgeGameController;
  }

  // Done : 의존성 주입 이게 맞는지 확인하기..
  play() {
    this.#bridgeGameController.run();
  }
}

const app = new App();
app.play();

export default App;
