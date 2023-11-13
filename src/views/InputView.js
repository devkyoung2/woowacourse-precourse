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
export default InputView;
