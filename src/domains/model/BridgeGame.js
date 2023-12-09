/**
 * 다리 건너기 게임을 관리하는 클래스
 */

// ? 클래스와 리터럴의 차이점 확인하기
// ? 도메인과 모델의 차이점인지 확인
class BridgeGame {
  #bridge;

  #bridgeSize;

  #attempt = 0;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#bridgeSize = this.#bridge.length;
    console.log(this.#bridge);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  getAttempt() {}
}

export default BridgeGame;
