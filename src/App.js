import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import { Random } from '@woowacourse/mission-utils';
import Computer from './models/Computer.js';
import Gong from './models/Gong.js';

class App {
  #computer;
  #user;

  async play() {
    OutputView.printWelcomeGame();
    this.gameStart();
  }

  async gameStart() {
    this.#computer = this.generateRandom(3);

    try {
      const inputUserGuess = await InputView.readGong();
      this.#user = [...inputUserGuess];
    } catch (err) {
      console.log(err.message);
    }
    console.log(this.#computer, this.#user);
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

  judgeStrikeAndBall(user, computer) {
    let strike = 0;
    let ball = 0;
  }

  // selectRetry(){}
}

const app = new App();
app.play();

export default App;
