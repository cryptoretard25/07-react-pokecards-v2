import React from 'react'

function GameOver({score = 0}) {
  return (
    <div className="greeting-modal">
      <div className="nes-container is-rounded greeting-wrapper">
        <i class="nes-ash" style={{alignSelf:"center"}}></i>
        <h2>Game over!</h2>
        <div className="nes-container with-title is-centered">
          <p>Your final score is: {score}</p>
        </div>
        <div>
          <button
            type="button"
            className="nes-btn is-success start-button"
            style={{ width: "17rem" }}
          >
            Play Again
          </button>{" "}
          <button
            type="button"
            className="nes-btn is-error start-button"
            style={{ width: "17rem" }}
          >
            Quit Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameOver