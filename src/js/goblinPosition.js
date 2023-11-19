import getRandomNumber from './getRandomNumb';

export default class GoblinPosition {
  constructor(element) {
    this.element = element;
  }

  setPosition() {
    const number = getRandomNumber(1, 16);
    const ferstPosition = this.element.querySelector(`[data-cell="${number}"]`);
    ferstPosition.classList.add('whith_gobline');
  }

  cleanPosition() {
    const position = this.element.querySelector('.whith_gobline');
    position.classList.remove('whith_gobline');
  }

  changePosition() {
    const number = getRandomNumber(1, 16);
    const randomPosition = this.element.querySelector(`[data-cell="${number}"]`);
    this.cleanPosition();
    randomPosition.classList.add('whith_gobline');
  }
}
