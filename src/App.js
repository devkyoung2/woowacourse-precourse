import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  async play() {
    this.InputUser();
  }

  async InputUser() {
    const racers = await InputView.readDate();
  }
}

const app = new App();
app.play();

export default App;
