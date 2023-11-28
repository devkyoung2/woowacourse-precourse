import { Random } from '@woowacourse/mission-utils';

export default class Gong {
  #number;
  constructor(추측넘버) {}

  static generateRandom(digit) {
    let pickedNumbers = '';

    while (pickedNumbers.length < digit) {
      const pickedNumber = Random.pickNumberInRange(1, 9);
      if (!pickedNumbers.includes(pickedNumber)) {
        pickedNumbers += pickedNumber;
      }
    }

    const instance = new Gong();
    instance.#number = pickedNumbers;

    return instance;
  }
}
