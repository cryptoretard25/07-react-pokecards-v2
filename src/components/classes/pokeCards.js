import Game from "./game";

export default class PokeCards {
  constructor() {
    this.record = this.getRecord();
    this.progress = 0;
    this.level = 1;
    this.cardsTotal = 6;
    this.game = new Game(this.cardsTotal);
    this.gameCompleted = false;
  }

  getRecord() {
    return parseInt(localStorage.getItem("POKE_RECORD"), 10) || 0;
  }

  setRecord() {
    localStorage.setItem("POKE_RECORD", this.record);
  }

  restartGame() {
    this.level = 1;
    this.cardsTotal = 6;
    this.progress = 0;
    this.game = new Game(this.cardsTotal);
    this.record = this.getRecord();
    this.gameCompleted = false;
    return this.game;
  }

  continueGame() {
    this.level = this.level + 1;
    this.cardsTotal = this.cardsTotal + 2;
    this.game = new Game(this.cardsTotal);
    return this.game;
  }

  incrementRecord(condition) {
    if (condition) {
      this.progress = this.progress + 1;
      if (this.progress > this.record) {
        this.record = this.progress;
        this.setRecord();
      }
      if (this.progress === 84) {
        this.gameCompleted = true;
      }
    }
  }
}
