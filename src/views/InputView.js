import { Console } from '@woowacourse/mission-utils';
import { isEmpty, isTrimed } from '../utils/validate.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(
      '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n'
    );

    validationDate(input);

    return input;
  },

  async readOrder() {
    const input = await Console.readLineAsync(
      '\n주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n'
    );

    validationOrder(input);

    return input;
  },
};

function validationDate(date) {
  if (isEmpty(date)) {
    throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.\n');
  }

  if (!isTrimed(date)) {
    throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.\n');
  }

  if (isNaN(date)) {
    throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.\n');
  }
}

function validationOrder(order) {
  if (isEmpty(order)) {
    throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.\n');
  }

  if (!isTrimed(order)) {
    throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.\n');
  }
}
export default InputView;
