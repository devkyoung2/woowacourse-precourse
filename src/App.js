import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import { Random } from '@woowacourse/mission-utils';

class App {
  #computer;
  #user;

  play() {
    OutputView.printWelcomeGame();

    try {
      this.gameStart();
    } catch (err) {
      OutputView.printError(err.message);
    }
  }

  async gameStart() {
    this.#computer = this.generateRandom(3);
    console.log(this.#computer);

    while (true) {
      this.#user = await this.inputUserGuess();
      const { ball, strike } = this.matchStrikeAndBall(
        this.#user,
        this.#computer
      );

      this.printGameResult(ball, strike);

      if (this.#user === this.#computer) {
        OutputView.printEnd();
        break;
      }
    }

    this.isRetry();
  }

  generateRandom(digit) {
    let pickedNumbers = '';

    while (pickedNumbers.length < digit) {
      const pickedNumber = Random.pickNumberInRange(1, 9);
      if (!pickedNumbers.includes(pickedNumber)) {
        pickedNumbers += pickedNumber;
      }
    }
    return pickedNumbers;
  }

  async inputUserGuess() {
    return await InputView.readGong();
  }

  matchStrikeAndBall(user, computer) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < 3; i++) {
      if (computer[i] === user[i]) {
        strike += 1;
      } else if (computer.includes(user[i])) {
        ball += 1;
      }
    }

    return { ball, strike };
  }

  printGameResult(ball, strike) {
    if (ball === 0 && strike === 0) {
      OutputView.printNothing();
      return;
    }
    if (ball === 0) {
      OutputView.printStrike(strike);
      return;
    }
    if (strike === 0) {
      OutputView.printBall(ball);
      return;
    }
    OutputView.printBallAndStrike(ball, strike);
  }

  async isRetry() {
    const selectedReTry = await InputView.reStart();

    if (Number(selectedReTry) === 1) {
      return this.gameStart();
    }
  }
}

const app = new App();
app.play();

export default App;
