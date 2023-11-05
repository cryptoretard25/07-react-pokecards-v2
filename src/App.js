import "nes.css/css/nes.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/header/Header";
import Stats from "./components/header/Stats";
import { useState } from "react";
import Greeting from "./components/modal/Greeting";
import Main from "./components/main/Main";
import Footer from "./components/Footer";
import GameOver from "./components/modal/GameOver";
import { PokeContextProvider } from "./components/context/PokeContext";
import usePokemon from "./components/hooks/usePokemon";

function App() {
  const [
    gameStarted,
    setGameStarted,
    gameOver,
    setGameOver,
    difficulty,
    setDifficulty,
    game,
    setGame,
  ] = usePokemon();

  return (
      <div className="App">
        <header className="App-header">
          <Header />
          {gameOver ? (
            <GameOver />
          ) : gameStarted ? (
            <>
              <Stats game = {game} />
              <Main game = {game} />
            </>
          ) : (
            <Greeting
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              setGameStarted={setGameStarted}
              setGame={setGame}
            />
          )}
          <Footer />
        </header>
      </div>
  );
}

export default App;
