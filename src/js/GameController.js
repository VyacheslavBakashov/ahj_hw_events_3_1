import GamePlay from './GamePlay';

export default class GameController {
  constructor() {
    this.gamePlay = new GamePlay();
    this.onClick = this.onClick.bind(this);
  }

  init() {
    this.gamePlay.drawUi();
    this.gamePlay.field.addEventListener('click', this.onClick);
  }

  onClick(event) {
    if (event.target.tagName === 'IMG') {
      this.gamePlay.hits++;
      this.gamePlay.clearField();
    } else {
      this.gamePlay.faults++;
    }
    this.gamePlay.redrawStatistics();
    this.gamePlay.checkScore();
  }
}
