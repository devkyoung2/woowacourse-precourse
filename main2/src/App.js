import InputView from './views/InputViews.js';
import OutputView from './views/OutputView.js';

class App {
  async play() {
    const coins = await InputView.readCoins();
    // try {
    // } catch (err) {
    //   OutputView.printError(err.message);
    // }
  }
}

export default App;
