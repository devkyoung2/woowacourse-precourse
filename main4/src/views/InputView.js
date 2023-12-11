import { Console } from '@woowacourse/mission-utils';
import { Validator } from '../validator/index.js';

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    const input = await Console.readLineAsync('\n다리의 길이를 입력해주세요.\n');
    Validator.validateInput(input);

    return input;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  async readMoving() {
    const input = await Console.readLineAsync('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n');
    Validator.validateInput(input);

    return input;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  async readGameCommand() {
    const input = await Console.readLineAsync(
      '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
    );
    Validator.validateInput(input);

    return input;
  },
};

export default InputView;
