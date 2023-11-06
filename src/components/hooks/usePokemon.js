import React, { useState } from "react";

export default function usePokemon() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState("EASY");
  const [game, setGame] = useState(null);
  const [cardsCurrent, setCardsCurrent] = useState(0)

  return [
    gameStarted,
    setGameStarted,
    gameOver,
    setGameOver,
    difficulty,
    setDifficulty,
    game,
    setGame,
    cardsCurrent,
    setCardsCurrent,
  ];
}
