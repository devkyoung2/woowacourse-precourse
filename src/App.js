import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import { Random } from '@woowacourse/mission-utils';

class App {
  #computer;
  #user;

  async play() {
    OutputView.printWelcomeGame();

    try {
      this.gameStart();
    } catch (err) {
      console.log(err.message);
    }
  }

  async gameStart() {
    this.#computer = this.generateRandom(3);
    console.log(this.#computer);

    while (true) {
      this.#user = await this.guessUser();
      const { ball, strike } = this.judgeStrikeAndBall(
        this.#user,
        this.#computer
      );
      this.printGameResult(ball, strike);
      console.log(strike, ball);
      if (this.#computer === this.#user) {
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

  async guessUser() {
    const inputUserGuess = await InputView.readGong();
    return inputUserGuess;
  }

  judgeStrikeAndBall(user, computer) {
    let strike = 0;
    let ball = 0;
    console.log(computer, user);
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
