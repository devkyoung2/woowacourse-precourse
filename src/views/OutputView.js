import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printWecome() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n');
  },

  printError(Message) {
    Console.print(Message);
  },

  printMenu(orderMenu) {
    Console.print('\n<주문 메뉴>');
    orderMenu.forEach((menu) => Console.print(`${menu.name} ${menu.count}개`));
  },
};
export default OutputView;
