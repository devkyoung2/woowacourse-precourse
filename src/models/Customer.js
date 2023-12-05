export default class Customer {
  #visitDate;
  constructor(visitDate) {
    this.#validateVisitDate(visitDate);
    this.#visitDate = visitDate;
  }

  #validateVisitDate(visitDate) {
    // 숫자인지
    if (isNaN(visitDate)) {
      throw new Error(
        '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.\n'
      );
    }
    const visitDateNumber = Number(visitDate);

    if (visitDateNumber % 1 !== 0) {
      throw new Error(
        '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.\n'
      );
    }

    if (visitDateNumber > 31 || visitDateNumber < 1) {
      throw new Error(
        '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.\n'
      );
    }
  }
}
