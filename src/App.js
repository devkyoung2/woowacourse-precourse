import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import User from './domains/User.js';

class App {
  #user;

  async run() {
    OutputView.printWecome();

    const date = await this.inputDate();
    const order = await this.inputOrderMenu();
    this.#user = new User(date, order);

    this.printEventPlanner(this.#user);
  }

  async inputDate() {
    try {
      const date = await InputView.readDate();

      return date;
    } catch (error) {
      OutputView.printError(error.message);

      return this.inputDate();
    }
  }

  async inputOrderMenu() {
    try {
      const orderMenu = await InputView.readOrderMenu();

      return orderMenu;
    } catch (error) {
      OutputView.printError(error.message);

      return this.inputOrderMenu();
    }
  }

  printEventPlanner(user) {
    OutputView.printMenu(user.orderMenu());
    OutputView.printPaymentBeforeDiscount(user.paymentBeforeDiscount());
    OutputView.printGiveawayPromotion(user.giveawayPromotion());
    OutputView.printPromotionDetail(user.promotionDetail());
  }
}

export default App;
