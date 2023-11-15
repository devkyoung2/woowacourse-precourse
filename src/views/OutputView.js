import { Console } from '@woowacourse/mission-utils';
import { DEFAULT_OUTPUT, CURRENT_MONTH } from '../constants/message.js';

const OutputView = {
  printWecome() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n');
  },

  printError(Message) {
    Console.print(Message);
  },

  printPreviewPromotion(date) {
    Console.print(
      `${CURRENT_MONTH}월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
    );
  },

  printOrderMenu(orderMenu) {
    Console.print('\n<주문 메뉴>');
    orderMenu.forEach((menu) => Console.print(`${menu.name} ${menu.count}개`));
  },

  printPaymentBeforeDiscount(payment) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${formatMoney(payment)}원`);
  },

  printGiveaway(giveaway) {
    Console.print('\n<증정 메뉴>');
    Console.print(`${giveaway || DEFAULT_OUTPUT}`);
  },

  printPromotionDetails(promotionDetails) {
    Console.print('\n<혜택 내역>');

    if (!promotionDetails) {
      Console.print(DEFAULT_OUTPUT);
      return;
    }

    promotionDetails.forEach((promotion) =>
      Console.print(`${promotion.type}: -${formatMoney(promotion.discount)}원`)
    );
  },

  printTotalPromotionAmount(promotionAmount) {
    Console.print('\n<총혜택 금액>');

    if (promotionAmount) {
      Console.print(`-${formatMoney(promotionAmount)}원`);
      return;
    }

    Console.print('0원');
  },

  printPaymentAfterDiscount(payment) {
    Console.print('\n<할인 후 예상 결제 금액>');
    Console.print(`${formatMoney(payment)}원`);
  },

  printEventBadge(badge) {
    Console.print(`\n<${CURRENT_MONTH}월 이벤트 배지>`);
    Console.print(`${badge || DEFAULT_OUTPUT}`);
  },
};

function formatMoney(moneyStr) {
  return moneyStr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default OutputView;
