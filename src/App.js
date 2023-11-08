import "nes.css/css/nes.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { cloneDeep } from "lodash";
import PokeCards from "./components/classes/pokeCards";
import LoadingScreen from "./components/modal/LoadingScreen";
import GameFinished from "./components/modal/GameFinished";

import React, { useEffect, useState, createContext } from "react";
import Header from "./components/header/Header";
import Stats from "./components/header/Stats";
import Greeting from "./components/modal/Greeting";
import Main from "./components/main/Main";
import Footer from "./components/Footer";
import GameOver from "./components/modal/GameOver";
import Error from "./components/modal/Error";
import * as sounds from "./components/script/sounds";

export const PokeContext = createContext();

function App() {
  const [pokeCards, setPokeCards] = useState(new PokeCards());
  const [game, setGame] = useState(cloneDeep(pokeCards.game));
  const [showGreeting, setShowGreeting] = useState(false);
  const [fetchData, setFetchData] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (fetchData) {
      (async () => {
        setLoadingScreen(true);
        await game.setRequestedPokemons();
        setLoadingScreen(false);
        if (game.pokemons.some((pokemon) => pokemon.error)) {
          setError(["Data Fetching Error", "Bad Request", 'Code: 404']);
          return;
        }
        console.log(game.pokemons)
        setGame(cloneDeep(game));
      })();
    }

    return () => {
      setFetchData(false);
    };
  }, [fetchData]);

  const onRestartClick = () => {
    setError('');
    sounds.mouseClick.play();
    pokeCards.restartGame();
    setGame(cloneDeep(pokeCards.game));
    setPokeCards(cloneDeep(pokeCards));
    setFetchData(true);
  };

  const onNextRoundClick = () => {
    sounds.mouseClick.play();
    pokeCards.continueGame();
    setGame(cloneDeep(pokeCards.game));
    setPokeCards(cloneDeep(pokeCards));
    setFetchData(true);
  };

  const onQuitClick = () => {
    sounds.mouseClick.play();
    setShowGreeting(false);
    pokeCards.restartGame();
    setPokeCards(cloneDeep(pokeCards));
    setGame(cloneDeep(pokeCards.game));
    setError("");
  };

  return (
    <PokeContext.Provider
      value={{
        pokeCards,
        setPokeCards,
        game,
        setGame,
        setShowGreeting,
        setFetchData,
        setLoadingScreen,
        error,
        setError,
      }}
    >
      <div className="App">
        <header className="App-header">
          <Header onQuitClick={onQuitClick} />
          {loadingScreen ? (
            <LoadingScreen />
          ) : pokeCards.gameCompleted ? (
            <GameFinished
              onRestartClick={onRestartClick}
              onQuitClick={onQuitClick}
            />
          ) : game.gameOver ? (
            <GameOver
              onQuitClick={onQuitClick}
              onRestartClick={onRestartClick}
              onNextRoundClick={onNextRoundClick}
            />
          ) : !showGreeting ? (
            <Greeting />
          ) : error ? (
            <Error onQuitClick={onQuitClick} onRestartClick={onRestartClick}/>
          ) : (
            <>
              <Stats />
              <Main />
            </>
          )}
          <Footer />
        </header>
      </div>
    </PokeContext.Provider>
  );
}

export default App;
