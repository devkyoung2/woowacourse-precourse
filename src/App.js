import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  async play() {
    try {
      const { cars, attempts } = this.InputUser();
    } catch (err) {}
  }

  async InputUser() {
    const cars = await InputView.readCars();
    const attempts = await InputView.readAttempts();

    return { cars, attempts };
  }
}

const app = new App();
app.play();

export default App;
