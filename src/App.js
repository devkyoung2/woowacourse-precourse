import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  async play() {
    OutputView.printWelcomeGame();
  }
}

const app = new App();
app.play();

export default App;
