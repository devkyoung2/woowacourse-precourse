import User from '../../src/domains/User';

describe('⭐ User 클래스 테스트', () => {
  describe('🔹 setDate 테스트', () => {
    const INVALID_DATE_MESSAGE =
      '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.';

    test.each(['1', '31'])(
      '12월의 유효한 날짜 입력 시 예외가 발생하지 않아야 한다.',
      (date) => {
        const user = new User();

        expect(() => user.setDate(date)).not.toThrow();
      }
    );

    test.each(['0', '32'])(
      '12월의 유효하지 않은 날짜 입력 시 예외가 발생해야 한다.',
      (date) => {
        const user = new User();

        expect(() => user.setDate(date)).toThrow(INVALID_DATE_MESSAGE);
      }
    );

    test('공백이 입력되었을 때 예외가 발생해야 한다.', () => {
      const user = new User();
      const space = ' ';

      expect(() => user.setDate(space)).toThrow(INVALID_DATE_MESSAGE);
    });
  });

  describe('🔹 setOrderMenu 테스트', () => {
    const INVALID_ORDER_MESSAGE =
      '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.';

    test.each(['타파스-1,제로콜라-1', '양송이수프-5,크리스마스파스타-5'])(
      '유효한 형태로 주문 메뉴를 입력 시 예외가 발생하지 않아야 한다.',
      (orderMenu) => {
        const user = new User();

        expect(() => user.setOrderMenu(orderMenu)).not.toThrow();
      }
    );

    test.each(['타파스1개,제로콜라1개', '양송이수프5,크리스마스파스타5'])(
      '유효하지 않은 형태로 주문 메뉴를 입력 시 예외가 발생해야 한다.',
      (orderMenu) => {
        const user = new User();

        expect(() => user.setOrderMenu(orderMenu)).toThrow(
          INVALID_ORDER_MESSAGE
        );
      }
    );

    test.each([' ', '타파스 - 1개, 제로콜라 - 1개'])(
      '공백이 입력되었을 때 예외가 발생해야 한다.',
      (invalidOrder) => {
        const user = new User();

        expect(() => user.setOrderMenu(invalidOrder)).toThrow(
          INVALID_ORDER_MESSAGE
        );
      }
    );

    test('메뉴의 개수는 0이 될 수 없다.', () => {
      const user = new User();
      const ZERO_MENU_COUNT = '타파스-0,제로콜라-0';

      expect(() => user.setOrderMenu(ZERO_MENU_COUNT)).toThrow(
        INVALID_ORDER_MESSAGE
      );
    });

    test('메뉴의 개수가 숫자가 아니라면 에러가 발생해야 한다.', () => {
      const user = new User();
      const CHAR_MENU_COUNT = '양송이수프-a,크리스마스파스타-b';

      expect(() => user.setOrderMenu(CHAR_MENU_COUNT)).toThrow(
        INVALID_ORDER_MESSAGE
      );
    });

    test('메뉴를 중복하여 주문할 수 없다.', () => {
      const user = new User();
      const DUPLICATED_ORDER_MENU = '시저샐러드-1,시저샐러드-1,제로콜라3';

      expect(() => user.setOrderMenu(DUPLICATED_ORDER_MENU)).toThrow(
        INVALID_ORDER_MESSAGE
      );
    });

    test('메뉴판에 없는 메뉴는 주문할 수 없다.', () => {
      const user = new User();
      const MENU_NOT_FOUND = '뿌링클-1,허니콤보-2';

      expect(() => user.setOrderMenu(MENU_NOT_FOUND)).toThrow(
        INVALID_ORDER_MESSAGE
      );
    });

    test('메뉴는 한번에 20개까지만 주문할 수 있다.', () => {
      const user = new User();
      const OVER_MAX_MENU_COUNT =
        '양송이수프-10,크리스마스파스타-10,제로콜라-10';

      expect(() => user.setOrderMenu(OVER_MAX_MENU_COUNT)).toThrow(
        '[ERROR] 메뉴는 20개까지 주문할 수 있습니다. 다시 입력해 주세요.'
      );
    });

    test('음료만 주문할 수 없다.', () => {
      const user = new User();
      const ONLY_DRINK = '제로콜라-1,레드와인-2,샴페인-3';
      expect(() => user.setOrderMenu(ONLY_DRINK)).toThrow(
        '[ERROR] 음료만 주문할 수 없습니다. 다시 입력해 주세요.'
      );
    });
  });
});
