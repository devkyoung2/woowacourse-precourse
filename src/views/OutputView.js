import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printWecome() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n');
  },

  printError(Message) {
    Console.print(Message);
  },

  printMenu() {
    Console.print('<주문 메뉴>');
  },
};
export default OutputView;
