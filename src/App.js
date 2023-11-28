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
    this.#user = this.guessUser();
    // this.#computer = ['7', '1', '3'];

    this.judgeStrikeAndBall(this.#user, this.#computer);
  }

  generateRandom(digit) {
    let pickedNumbers = '';

    while (pickedNumbers.length < digit) {
      const pickedNumber = Random.pickNumberInRange(1, 9);
      if (!pickedNumbers.includes(pickedNumber)) {
        pickedNumbers += pickedNumber;
      }
    }

    return [...pickedNumbers];
  }

  async guessUser() {
    const inputUserGuess = await InputView.readGong();
    return [...inputUserGuess];
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
    console.log(strike, ball);
    return { ball, strike };
  }

  // selectRetry(){}
}

const app = new App();
app.play();

export default App;
