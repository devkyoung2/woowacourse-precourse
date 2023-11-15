import Order from '../../src/domains/Order';
import Menu from '../../src/domains/Menu';
import Promotion from '../../src/domains/Promotion';

jest.mock('../../src/domains/Menu.js');
jest.mock('../../src/domains/Promotion.js');

describe('⭐ Order 클래스 테스트', () => {
  let order;

  beforeEach(() => {
    order = new Order();
  });

  test('입력한 날짜를 받아온다.', () => {
    const date = 10;

    order.setDate(date);
    expect(order.getVisitDate()).toBe(date);
  });

  test('입력한 메뉴를 받아온다. ', () => {
    const orderMenu = [
      { name: '아이스크림', count: 2 },
      { name: '초코케이크', count: 1 },
    ];

    order.setOrderMenu(orderMenu);
    expect(order.getOrderMenu()).toEqual(orderMenu);
  });

  test('할인 전 총주문 금액 계산 테스트', () => {
    const orderMenu = [
      { name: '아이스크림', count: 2 },
      { name: '초코케이크', count: 1 },
    ];

    Menu.getPrice.mockImplementation((menu) => {
      const prices = {
        아이스크림: 5000,
        초코케이크: 15000,
      };

      return prices[menu];
    });

    order.setOrderMenu(orderMenu);

    const expectedPayment = 2 * 5000 + 1 * 15000;

    expect(order.getPaymentBeforeDiscount()).toBe(expectedPayment);
  });

  test('증정품이 있는 경우 샴페인 1개를 리턴한다.', () => {
    const expectedGiveaway = '샴패인 1개';
    Promotion.isApply.mockReturnValue(true);
    Promotion.getGiveway.mockReturnValue(expectedGiveaway);

    expect(order.getGiveaway()).toBe(expectedGiveaway);
  });

  test('증정품이 없는 경우 false를 리턴한다.', () => {
    Promotion.isApply.mockReturnValue(false);

    expect(order.getGiveaway()).toBe(false);
  });

  test('혜택 내역이 있는 경우 혜택내역을 리턴한다.', () => {
    const promotionDetails = [
      { name: '크리스마스 디데이 할인', discount: 1300 },
      { name: '평일 할인', discount: 4046 },
      false,
      { name: '특별 할인', discount: 4046 },
      false,
    ];

    const expectedPromotionDetails = [
      { name: '크리스마스 디데이 할인', discount: 1300 },
      { name: '평일 할인', discount: 4046 },
      { name: '특별 할인', discount: 4046 },
    ];

    Promotion.isApply.mockReturnValue(true);
    Promotion.getPromotionDetailsAll.mockReturnValue(promotionDetails);

    expect(order.getPromotionDetails()).toEqual(expectedPromotionDetails);
  });

  test('혜택 내역이 없는 경우 false를 리턴한다.', () => {
    Promotion.isApply.mockReturnValue(true);
    Promotion.getPromotionDetailsAll.mockReturnValue([
      false,
      false,
      false,
      false,
      false,
    ]);

    expect(order.getPromotionDetails()).toBe(false);
  });
});
