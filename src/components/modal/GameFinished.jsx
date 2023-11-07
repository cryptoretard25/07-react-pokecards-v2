import React, { useContext }  from "react";
import { PokeContext } from "../../App";

function GameFinished({onRestartClick, onQuitClick}) {
  const {pokeCards} = useContext(PokeContext)

  return (
    <div className="greeting-modal" style={{ zIndex: "10000" }}>
      <div
        className="nes-container is-rounded greeting-wrapper"
        style={{ maxWidth: "50rem", alignItems: "center" }}
      >
        <i className="nes-charmander"></i>
        <h2>Congratulations!</h2>
        <h4>You finished the game</h4>

        <p style={{ textAlign: "center" }}>
          You've reached the maximum possible score, completed all possible 7
          rounds!
        </p>
        <div className="nes-container with-title is-centered">
          <p>Your final score: {pokeCards.progress}</p>
        </div>
        <div style={{ alignSelf: "center" }}>
          <button
            type="button"
            className="nes-btn is-success start-button"
            style={{ width: "18rem" }}
            onClick={onRestartClick}
          >
            Start Again
          </button>{" "}
          <button
            type="button"
            className="nes-btn is-error start-button"
            style={{ width: "18rem" }}
            onClick={onQuitClick}
          >
            Quit Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameFinished;
