import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readGong() {
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
    this.isValidate(input);

    if (isNaN(input)) {
      throw new Error('[Error] : 숫자가 아닙니다.');
    }
    const numberInput = Number(input);
    if (parseInt(numberInput) !== numberInput) {
      throw new Error('[Error] : 자연수를 입력하세요.');
    }

    if (input.length !== 3) {
      throw new Error('[Error] : 3자리 수를 입력하세요');
    }

    return input;
  },

  async reStart() {
    const input = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
    );
    this.isValidate(input);

    if (isNaN(input)) {
      throw new Error('[Error] : 숫자가 아닙니다.');
    }

    if (!['1', '2'].includes(input)) {
      throw new Error('[Error] : 1 또는 2를 입력하세요');
    }

    return input;
  },

  isValidate(input) {
    if (input.length === 0) {
      throw new Error('[Error] : 올바른 값이 아닙니다.');
    }
    const trimedInput = input.trim();
    if (trimedInput === 0) {
      throw new Error('[Error] : 올바른 값이 아닙니다.');
    }
  },
};

export default InputView;
