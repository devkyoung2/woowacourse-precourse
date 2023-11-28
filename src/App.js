import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import Computer from './models/Computer.js';

class App {
  #computer = new Computer();
  #user;

  async play() {
    OutputView.printWelcomeGame();
    this.#computer.generatorGong();
  }
}
const app = new App();
app.play();

export default App;
