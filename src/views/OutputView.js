import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printWelcomeGame() {
    Console.print('숫자 야구 게임을 시작합니다.');
  },
  printEnd() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  },
  printNothing() {
    Console.print('낫싱');
  },
  printStrike(strike) {
    Console.print(`${strike}스트라이크`);
  },
  printBall(ball) {
    Console.print(`${ball}볼`);
  },
  printBallAndStrike(ball, strike) {
    Console.print(`${ball}볼 ${strike}스트라이크`);
  },
  // ...
};

export default OutputView;
