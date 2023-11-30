import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import { Random } from '@woowacourse/mission-utils';
// import Race from './models/Race.js';

class App {
  // #race = new Race();
  #cars;
  #attempts;

  async play() {
    // 입력부분 분리하기
    try {
      const cars = await InputView.readCars();
      const validateCars = this.#validateCars(cars);
      this.#cars = validateCars;

      const attempts = await InputView.readAttempts();
      const validatedAttempts = this.#validateAttempts(attempts);
      this.#attempts = validatedAttempts;
    } catch (err) {
      console.log(err.message);
      return;
    }
    this.raceStart(this.#cars, this.#attempts);
  }

  raceStart(cars, attempts) {
    for (let i = 0; i <= attempts; i++) {
      this.round(cars);
    }
    console.log(this.#cars);
  }

  round(cars) {
    for (const car of cars) {
      if (Random.pickNumberInRange(0, 9) > 4) {
        car.position += 1;
      }
    }
  }

  #validateCars(cars) {
    const splitedCars = cars.split(',');

    const validatedCars = [];
    for (const car of splitedCars) {
      const trimmedCarName = car.trim();

      if (trimmedCarName.length > 5) {
        throw new Error('5글자 이상의 이름');
      }
      validatedCars.push({ name: trimmedCarName, position: 0 });
    }

    return validatedCars;
  }

  #validateAttempts(attempts) {
    const attemptsNumber = Number(attempts);
    if (!attemptsNumber) {
      throw new Error('문자 값');
    }
    if (Math.floor(attemptsNumber) !== attemptsNumber) {
      throw new Error('실수 값');
    }
    if (attemptsNumber < 1) {
      throw new Error('1 이하의 값');
    }

    return attemptsNumber;
  }
}

const app = new App();
app.play();

export default App;
