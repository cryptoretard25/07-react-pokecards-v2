import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Game from "../scripts/game";

export default function usePokemon() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState("EASY");
  const [game, setGame] = useState(null);

  // useEffect(() => {
  //   console.log(difficulty);
  // }, [difficulty]);

  // useEffect(() => {
  //   if (gameStarted) {
  //     setGame(new Game(difficulty));
  //   }
  // }, [gameStarted]);

  // useEffect(() => {
  //   const fetchPokemons = async () => {
  //     if (game) {
  //       await game.setRequestedPokemons();
  //       console.log(game);
  //     }
  //   };
  //   fetchPokemons();
  // }, [game]);

  return [
    gameStarted,
    setGameStarted,
    gameOver,
    setGameOver,
    difficulty,
    setDifficulty,
    game,
    setGame,
  ];
}
