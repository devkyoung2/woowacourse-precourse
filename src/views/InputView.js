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
