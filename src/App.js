import BridgeGameController from './controllers/BridgeGameController.js';

class App {
  #bridgeGameController;

  // Todo : 의존성 주입 이게 맞는지 확인하기..
  play(bridgeGameController = new BridgeGameController()) {
    this.#bridgeGameController = bridgeGameController;
    this.#bridgeGameController.run();
  }
}

const app = new App();
app.play();

export default App;
