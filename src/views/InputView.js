import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    validateEmptyInput(input);
  },
};

function validateEmptyInput(input) {
  const trimedInput = input.trim();
  if (trimedInput !== input) {
    throw new Error('입력에 공백이 포함됨');
  }
  if (trimedInput.length === 0) {
    throw new Error('빈값 입력');
  }
}

export default InputView;
