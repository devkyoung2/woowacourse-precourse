import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  #race;

  async play() {
    try {
      const { cars, attempts } = this.InputUser();
      this.#race = new Race(cars, attempts);
    } catch (err) {
      console.log(err.message);
    }

    this.#race.start();
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
