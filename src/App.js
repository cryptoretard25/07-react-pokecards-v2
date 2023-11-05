import "nes.css/css/nes.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/header/Header";
import Stats from "./components/header/Stats";
import Greeting from "./components/modal/Greeting";
import Main from "./components/main/Main";
import Footer from "./components/Footer";
import GameOver from "./components/modal/GameOver";
import usePokemon from "./components/hooks/usePokemon";
import Game from "./components/scripts/game";
import { cloneDeep } from "lodash";

function App() {
  const [ gameStarted, setGameStarted, gameOver, setGameOver, difficulty, setDifficulty, game, setGame, cardsCurrent, setCardsCurrent, ] = usePokemon();

  const onStartClick = async () => {
    const game = new Game(difficulty);
    await game.setRequestedPokemons();
    setGameStarted(true);
    setGame(cloneDeep(game));
    setCardsCurrent(0);
    setGameOver(false);
  };

  const onQuitClick = () => {
    setGameStarted(false);
    setGameOver(false);
    setGame(null);
    setCardsCurrent(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header onQuitClick={onQuitClick}/>
        {gameOver ? (
          <GameOver game={game} cardsCurrent={cardsCurrent} onStartClick={onStartClick} onQuitClick={onQuitClick} />
        ) : gameStarted ? (
          <>
            <Stats game={game} cardsCurrent={cardsCurrent} />
            <Main game={game} setGameOver={setGameOver} setCardsCurrent={setCardsCurrent} />
          </>
        ) : (
          <Greeting difficulty={difficulty} setDifficulty={setDifficulty} onStartClick={onStartClick} />
        )}
        <Footer />
      </header>
    </div>
  );
}

export default App;
