import { Console } from '@woowacourse/mission-utils';
import OutputView from './OutputView.js';

const InputView = {
  async readCoins() {
    try {
      const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
      checkIsEmpty(input);
      checkHasSpace(input);
      const validatedCoins = this.validateCoins(input);
      return validatedCoins;
    } catch (err) {
      OutputView.printError(err.message);
      return this.readCoins();
    }
  },

  validateCoins(input) {
    if (isNaN(Number(input))) {
      throw new Error('숫자 아님');
    }
    if (input % 1000 !== 0) {
      throw new Error('천원단위');
    }
    return Number(input);
  },
};

function checkIsEmpty(input) {
  if (input.length === 0) {
    throw new Error('에러임');
  }
}

function checkHasSpace(input) {
  const splitInput = input.replaceAll(' ', '');

  if (splitInput !== input) {
    throw new Error('에러');
  }
}

export default InputView;
