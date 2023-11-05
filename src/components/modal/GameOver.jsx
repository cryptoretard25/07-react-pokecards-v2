import React from "react";

function GameOver({
  game,
  cardsCurrent,
  onStartClick,
  onQuitClick,
}) {

  return (
    <div className="greeting-modal">
      <div className="nes-container is-rounded greeting-wrapper">
        <i className="nes-ash" style={{ alignSelf: "center" }}></i>
        <h2>
          Game over!
          <br />
          {game.cardsMax === cardsCurrent
            ? "Congratulations you win!"
            : "Sorry, but you lose."}
        </h2>
        <div className="nes-container with-title is-centered">
          <p>Your final score is: {cardsCurrent}</p>
        </div>
        <div style={{ alignSelf: "center" }}>
          <button
            type="button"
            className="nes-btn is-success start-button"
            style={{ width: "17rem" }}
            onClick={onStartClick}
          >
            Play Again
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
