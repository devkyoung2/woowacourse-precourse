import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printError(error) {
    Console.print(error);
  },

  printWelcomeMessage(targetMonth) {
    Console.print(
      `안녕하세요! 우테코 식당 ${targetMonth}월 이벤트 플래너입니다.\n`
    );
  },

  printEventPlannerMessage(month, day) {
    Console.print(
      `${month}월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`
    );
  },

  printMenu(orderItmes) {
    Console.print('<주문 메뉴>');
    for (const [name, amount] of Object.entries(orderItmes)) {
      Console.print(`${name} ${amount}개`);
    }
  },
};
export default OutputView;
