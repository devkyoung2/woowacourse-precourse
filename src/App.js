import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  async run() {
    OutputView.printWecome();
    await this.inputDate();
  }

  async inputDate() {
    try {
      const date = await InputView.readDate();
      console.log(date);
    } catch (error) {
      // 추후 상수화
      Console.print(error.message);
      return this.inputDate();
    }
  }
}

export default App;
