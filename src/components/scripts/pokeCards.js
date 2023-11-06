import Game from "./game";

export default class PokeCards {
  constructor() {
    this.record = this.getRecord();
    this.level = 1;
    this.cardsTotal = 6;
    this.game = new Game(this.cardsTotal);
  }
  incrementRecord() {
    this.record = this.record + 1;
  }

  getRecord() {
    return parseInt(localStorage.getItem("POKE_RECORD"), 10) || 0;
  }

  setRecord() {
    if (this.record > this.getRecord()) {
      localStorage.setItem("POKE_RECORD", this.record);
    }
  }

  checkIsGameLost() {
    return this.game.gameOver;
  }

  checkIsGameWinned() {
    return this.game.gameWinned;
  }

  restartGame(Game) {
    this.level = 1;
    this.cardsTotal = 6;
    this.game = new Game(this.cardsTotal);
  }

  continueGame(Game) {
    this.level = this.level + 1;
    this.cardsTotal = this.cardsTotal + 2;
    this.game = new Game(this.cardsTotal);
  }
}


// const pokeCards = new PokeCards()
// await pokeCards.game.setRequestedPokemons();
// console.log(pokeCards)
