import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import User from './domains/User.js';

class App {
  #user;

  async run() {
    OutputView.printWecome();
    this.#user = new User();

    await this.inputDate();
    await this.inputOrderMenu();

    this.printEventPlanner(this.#user);
  }

  async inputDate() {
    try {
      const date = await InputView.readDate();
      this.#user.setDate(date);
    } catch (error) {
      OutputView.printError(error.message);

      return this.inputDate();
    }
  }

  async inputOrderMenu() {
    try {
      const orderMenu = await InputView.readOrderMenu();
      this.#user.setOrderMenu(orderMenu);
    } catch (error) {
      OutputView.printError(error.message);

      return this.inputOrderMenu();
    }
  }

  printEventPlanner(user) {
    OutputView.printPreviewPromotion(user.getVisitDate());
    OutputView.printOrderMenu(user.orderMenu());
    OutputView.printPaymentBeforeDiscount(user.paymentBeforeDiscount());
    OutputView.printGiveaway(user.giveaway());
    OutputView.printPromotionDetails(user.promotionDetails());
    OutputView.printTotalPromotionAmount(user.totalPromotionAmount());
    OutputView.printPaymentAfterDiscount(user.paymentAfterDiscount());
    OutputView.printEventBadge(user.eventBadge());
  }
}

export default App;
