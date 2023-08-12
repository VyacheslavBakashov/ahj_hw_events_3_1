import GameField from './GameField';
import imageGoblin from '../img/goblin.png';
import { addImage, checkRandomIndex } from './utils';

export default class GamePlay {
  constructor() {
    this.field = GameField.generate();
    this.fieldCells = null;
    this.faults = 0;
    this.hits = 0;
    this.interval = null;
    this.img = null;
  }

  drawUi() {
    document.body.appendChild(GameField.generate());
    this.field = document.querySelector('.field');
    this.fieldCells = [...this.field.querySelectorAll('.field-cell')];
    this.img = addImage(imageGoblin, 'goblin');

    this.field.addEventListener('click', this.onClick);
    this.redrawStatistics();
    this.startInterval();
  }

  startInterval() {
    this.interval = setInterval(() => {
      this.fieldCells[checkRandomIndex(this.fieldCells)].appendChild(this.img);
    }, 1000);
  }

  redrawStatistics() {
    const hitsElm = document.querySelector('.score.hits');
    const faultsElm = document.querySelector('.score.faults');
    hitsElm.textContent = this.hits;
    faultsElm.textContent = this.faults;
  }

  checkScore() {
    if (this.faults > 4) {
      this.clearInterval();
      this.clearField();
      alert('Game over');
    }
  }

  clearField() {
    this.field.querySelector('img').remove();
  }

  clearInterval() {
    clearInterval(this.interval);
  }
}
