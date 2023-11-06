import axios from "axios";
import Pokemon from "./pokemon";
import { CONSTANTS } from "./CONSTANTS";

export default class Game {
  constructor(cardsMax) {
    this.pokemons = [];
    this.clickedCards = [];
    this.currentRound = 0;
    this.cardsMax = cardsMax;
    this.gameOver = false;
    this.gameWinned = false;
  }

  generateRandomIndexes() {
    const indexes = new Set();
    while (indexes.size < this.cardsMax) {
      const { TOTAL_POKEMONS, START_ID } = CONSTANTS;
      const randomNumber = Math.floor(
        Math.random() * (TOTAL_POKEMONS - START_ID + 1) + START_ID
      );
      indexes.add(randomNumber);
    }

    return [...indexes];
  }

  async requestPokemon(id) {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );
      const { name, sprites } = response.data;
      return new Pokemon(sprites.front_default, name);
    } catch (err) {
      console.error(err);
      return new Pokemon("", "", err.message);
    }
  }

  shufflePokemons() {
    if (this.pokemons.length) {
      const temp = [...this.pokemons];
      for (let i = temp.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [temp[i], temp[j]] = [temp[j], temp[i]];
      }
      this.pokemons = [...temp];
    }
  }

  async setRequestedPokemons() {
    const indexes = this.generateRandomIndexes();
    const pokemonsPromises = indexes.map(async (id) => {
      return await this.requestPokemon(id);
    });
    try {
      this.pokemons = await Promise.all(pokemonsPromises);
    } catch (err) {
      console.error(err);
    }
  }

  click(_uid) {
    if (this.clickedCards.some((uid) => uid === _uid)) {
      this.gameOver = true;
      return;
    }

    this.clickedCards = [...this.clickedCards, _uid];

    if (this.clickedCards.length === this.cardsMax) {
      this.gameWinned = true;
      return;
    }

    this.currentRound = this.clickedCards.length;
    this.shufflePokemons();
  }
}
