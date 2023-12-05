import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(
      '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n'
    );
    checkIsEmpty(input);
    checkHasSpace(input);

    return input;
  },

  async readOrder() {
    const input = await Console.readLineAsync(
      '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n'
    );
    checkIsEmpty(input);
    checkHasSpace(input);

    return input;
  },
};

function checkIsEmpty(input) {
  if (input.length === 0) {
    throw new Error('[ERROR] 유효한 입력이 아닙니다. 다시 입력해 주세요.');
  }
}

function checkHasSpace(input) {
  const replacedInput = input.replace(' ', '');

  if (replacedInput.length !== input.length) {
    throw new Error('[ERROR] 유효한 입력이 아닙니다. 다시 입력해 주세요.');
  }
}
export default InputView;
