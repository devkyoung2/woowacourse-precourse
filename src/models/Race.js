class Race {
  #cars;
  #attemps;

  constructor(cars, attempts) {
    this.#validateCars(cars);
    this.#cars = cars;

    this.#validateAttemps(attempts);
    this.#attemps = attempts;
  }

  start() {
    console.log('게임을 시작한다.', this.#attemps, '만큼');
  }

  #validateCars(cars) {}
  #validateAttemps(attemps) {}
}
