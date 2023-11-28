import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync();
    // ...
  },
  // ...
};

export default InputView;
