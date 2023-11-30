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
  printWinner(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  },
};

export default OutputView;
