import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printResultMessage() {
    Console.print('\n실행 결과');
  },
  printRaceResult(cars) {
    cars.forEach((item) =>
      Console.print(`${item.name} : ${'-'.repeat(item.position)}`)
    );
    Console.print('');
  },
};

export default OutputView;
