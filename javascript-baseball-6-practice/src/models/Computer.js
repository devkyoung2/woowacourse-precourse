import Gong from './Gong.js';

export default class Computer {
  #gong;

  generatorGong() {
    this.#gong = Gong.generateRandom(3);
  }
}
