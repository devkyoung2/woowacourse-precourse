/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  bridge: [],

  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  // for문말고 다른 방법이 있는지 확인
  // Todo : 하드코딩값 수정
  makeBridge(size, generateRandomNumber) {
    for (let i = 0; i < size; i += 1) {
      const generatedNumber = generateRandomNumber();
      if (generatedNumber === 1) this.bridge.push('U');
      if (generatedNumber === 0) this.bridge.push('D');
    }

    return this.bridge;
  },
};

// ? 이 파일만 파일 경로를 변경할 수 없었던 이유 ??
// 근데 그냥 이동해버리긴했다..
export default BridgeMaker;
