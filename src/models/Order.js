import Menu from './../data/Menu.js';

export default class Order {
  #orderItems;

  constructor(items) {
    this.#validateOrder(items);
    this.#orderItems = items;
  }

  #validateOrder(items) {
    const validOrder = this.#getValidOrderFormat(items);
    // Todo 유효성 검증 기능
  }

  #getValidOrderFormat(items) {
    const splitItems = items.split(',');
    const parsedItems = {};

    for (const item of splitItems) {
      const parsedItem = item.split('-');

      if (parsedItem.length != 2) {
        throw new Error(
          '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.'
        );
      }
      parsedItems[parsedItem[0]] = parsedItem[1];
    }

    return parsedItems;
  }

  #isBeveragesOnly() {}
}

// 메뉴판에게 위임을 해야하는데 그렇다면 애초에 메뉴판이 class로 제작되는게 맞았는지 확인
// getValidOrderFormat에서 is로 시작해야하는지 get으로 시작해야하는지
