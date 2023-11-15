import { Console } from '@woowacourse/mission-utils';
import { isEmpty, isTrimed } from '../utils/validate.js';
import { ERROR_MESSAGE } from '../constants/message.js';

const InputView = {
  async readDate() {
    const date = await Console.readLineAsync(
      '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n'
    );

    validationDate(date);

    return date;
  },

  async readOrderMenu() {
    const orderMenu = await Console.readLineAsync(
      '\n주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n'
    );

    validationOrderMenu(orderMenu);

    return orderMenu;
  },
};

function validationDate(date) {
  if (isEmpty(date)) {
    throw new Error(ERROR_MESSAGE.INVALID_DATE);
  }

  if (!isTrimed(date)) {
    throw new Error(ERROR_MESSAGE.INVALID_DATE);
  }

  if (isNaN(date)) {
    throw new Error(ERROR_MESSAGE.INVALID_DATE);
  }
}

function validationOrderMenu(orderMenu) {
  if (isEmpty(orderMenu)) {
    throw new Error(ERROR_MESSAGE.INVALID_ORDER);
  }

  if (!isTrimed(orderMenu)) {
    throw new Error(ERROR_MESSAGE.INVALID_ORDER);
  }
}
export default InputView;
