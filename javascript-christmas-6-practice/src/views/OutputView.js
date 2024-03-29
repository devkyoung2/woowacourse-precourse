import { Console } from '@woowacourse/mission-utils';

function formatMoney(money) {
  const moneyStr = money.toString();
  return moneyStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

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

  printTotalOrderPriceBeforeDiscount(price) {
    Console.print(`\n<할인 전 총주문 금액>`);
    Console.print(`${formatMoney(price)}원`);
  },

  printGiveawayItems(giveaway) {
    Console.print('\n<증정 메뉴>');
    Console.print(giveaway);
  },

  printPromotionLog(promotionLog) {
    Console.print('\n<혜택 내역>');
    if (!promotionLog) {
      Console.print(`없음`);
    }
    for (const [type, price] of Object.entries(promotionLog)) {
      if (price !== false) {
        Console.print(`${type} : -${formatMoney(price)}원`);
      }
    }
  },

  printTotalPromotion(totalPromotion) {
    Console.print('\n<총혜택 금액>');
    Console.print(`-${formatMoney(totalPromotion)}원`);
  },

  printTotalOrderPriceAfterDiscount(price) {
    Console.print(`\n<할인 후 예상 결제 금액>`);
    Console.print(`${formatMoney(price)}원`);
  },

  printBadge(month, badge) {
    Console.print(`\n<${month}월 이벤트 배지>`);
    Console.print(badge);
  },
};
export default OutputView;
