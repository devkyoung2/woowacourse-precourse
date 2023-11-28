import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readGong() {
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
    this.isValidate(input);

    return input;
  },

  isValidate(input) {
    if (input.length === 0) {
      throw new Error('[Error] : 올바른 값이 아닙니다.');
    }
    if (input.trim().length === 0) {
      throw new Error('[Error] : 올바른 값이 아닙니다.');
    }
  },
};

export default InputView;
