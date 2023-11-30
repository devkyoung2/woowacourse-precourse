import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
// import Race from './models/Race.js';

class App {
  // #race = new Race();
  #cars;
  #attempts;

  async play() {
    // 입력부분 분리하기
    try {
      const cars = await InputView.readCars();
      this.#validateCars(cars);
      this.#cars = cars;

      const attempts = await InputView.readAttempts();
      this.#validateAttempts(attempts);
      this.#attempts = attempts;
    } catch (err) {
      console.log(err.message);
      return;
    }
    this.raceStart();
  }
  raceStart() {}

  #validateCars(cars) {
    const splitedCars = cars.split(',');

    for (const car of splitedCars) {
      const trimmedCarName = car.trim();

      if (trimmedCarName.length > 5) {
        throw new Error('5글자 이상의 이름');
      }
    }
    return splitedCars;
  }

  #validateAttempts(attempts) {}
}

const app = new App();
app.play();

export default App;
