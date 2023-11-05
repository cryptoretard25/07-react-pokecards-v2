import React, { useState, useEffect, createContext } from "react";
import usePokemon from "../hooks/usePokemon";

export const PokeContext = createContext();

export const PokeContextProvider = ({ children }) => {
  const [
    gameStarted,
    setGameStarted,
    gameOver,
    setGameOver,
    difficulty,
    setDifficulty,
    game,
  ] = usePokemon();
  return (
    <PokeContext.Provider
      value={{
        gameStarted,
        setGameStarted,
        gameOver,
        setGameOver,
        difficulty,
        setDifficulty,
        game,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
