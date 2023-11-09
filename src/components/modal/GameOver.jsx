import React, { useContext, useEffect } from "react";
import { PokeContext } from "../../App";
import * as sounds from "../script/sounds";

function GameOver({ onQuitClick, onRestartClick, onNextRoundClick }) {
  const { game, pokeCards } = useContext(PokeContext);

  const { gameWinned, gameLosed } = game;

  useEffect(() => {
    if (gameWinned) {
      sounds.success.play();
    }
    if (gameLosed) {
      sounds.fail.play();
    }
  }, []);

  return (
    <div className="greeting-modal">
      <div className="nes-container is-rounded greeting-wrapper">
        <i className="nes-ash" style={{ alignSelf: "center" }}></i>
        {gameLosed && (
          <>
            <h2>Game Over!</h2>
            <h2>Sorry, but you lose</h2>
          </>
        )}
        {gameWinned && (
          <>
            <h2>Level completed!</h2>
            <h2>Congratulations you win!</h2>
          </>
        )}
        <div className="nes-container with-title is-centered">
          <p>Your final score is: {pokeCards.progress}</p>
        </div>

        <div style={{ alignSelf: "center", textAlign: 'center'}}>
          <button
            type="button"
            className="nes-btn is-success start-button"
            style={{ width: "17rem" }}
            onClick={gameLosed ? onRestartClick : onNextRoundClick}
          >
            {gameLosed && "Play Again"}
            {gameWinned && "Next Round"}
          </button>{" "}
          <button
            type="button"
            className="nes-btn is-error start-button"
            style={{ width: "17rem" }}
            onClick={onQuitClick}
          >
            Quit Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameOver;
