import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readGong() {
    const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
    this.isValidate(input);

    return input;
  },

  async reStart() {
    const input = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
    );
    this.isValidate(input);

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
