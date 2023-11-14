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

  printPaymentBeforeDiscount(payment) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${payment}원`);
  },

  printGiveawayPromotion(giveaway) {
    Console.print('\n<증정 메뉴>');
    Console.print(`${giveaway}`);
  },

  printPromotionDetail(promotionDetail) {
    Console.print('\n<혜택 내역>');

    promotionDetail.forEach((promotion) =>
      Console.print(`${promotion.type}: -${promotion.discount}원`)
    );
  },

  printTotalPromotionAmount(promotionAmount) {
    Console.print('\n<총혜택 금액>');
    Console.print(`-${promotionAmount}원`);
  },
};

export default OutputView;
