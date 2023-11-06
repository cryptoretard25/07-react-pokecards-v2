import axios from "axios";
import Pokemon from "./pokemon";
import { CONSTANTS } from "./CONSTANTS";

export default class Game {
  constructor(difficulty) {
    this.pokemons = [];
    this.difficulty = difficulty;
    this.currentRound = 1;
    this.clickedCards = [];
    this.cardsMax =
      difficulty === "HARD" ? 16 : difficulty === "NORMAL" ? 12 : 6;
    this.gameOver = false;
  }

  incrementRound() {
    if (this.clickedCards.length === this.cardsMax) {
      this.currentRound++;
      return true;
    }
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
      return new Pokemon('', '', err.message)
    }
  }

  async setRequestedPokemons() {
    const indexes = this.generateRandomIndexes();
    const pokemonsPromises = indexes.map(async (id) => {
      return await this.requestPokemon(id);
    });
    this.pokemons = await Promise.all(pokemonsPromises);
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

  click(_itemUID) {
    if (this.clickedCards.some((i) => i === _itemUID)) {
      this.gameOver = true;
      return;
    }
    this.clickedCards = [...this.clickedCards, _itemUID];
    if (this.clickedCards.length === this.cardsMax){
      this.gameOver = true;
      return
    } 
    this.shufflePokemons();
  }
}
