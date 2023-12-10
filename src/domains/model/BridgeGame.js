/**
 * 다리 건너기 게임을 관리하는 클래스
 */

// ? 클래스와 리터럴의 차이점 확인하기
// ? 도메인과 모델의 차이점인지 확인
class BridgeGame {
  #bridge;

  #status = { U: [], D: [] };

  #attempt = 1;

  #round = 0;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  isFinish() {
    return this.#bridge.length === this.#round;
  }

  isMovable(seletedMoving) {
    return this.#bridge[this.#round] === seletedMoving;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(selectedMoving) {
    if (this.isMovable(selectedMoving)) return this.#updateStatus(selectedMoving);
    if (!this.isMovable(selectedMoving)) return this.#updateX(selectedMoving);
  }

  roundFinish() {
    this.#round += 1;
  }

  // ? 다른방법 잇는지 확인
  #updateStatus(selectedMoving) {
    if (selectedMoving === 'U') {
      this.#status.U.push('O');
      this.#status.D.push(' ');
    } else if (selectedMoving === 'D') {
      this.#status.U.push(' ');
      this.#status.D.push('O');
    }
  }

  #updateX(selectedMoving) {
    this.#status[selectedMoving].push('X');

    Object.keys(this.#status).forEach((target) => {
      if (target !== selectedMoving) this.#status[target].push(' ');
    });
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#status = { U: [], D: [] };
    this.#attempt += 1;
    this.#round = 0;
  }

  getStatus() {
    const formattedStatus = Object.values(this.#status).map((stat) => `[ ${stat.join(' | ')} ]`);

    return formattedStatus;
  }

  getAttempt() {
    return this.#attempt;
  }

  getResult() {
    const isVictory = this.isFinish();

    return isVictory ? '승리' : '실패';
  }
}

export default BridgeGame;
