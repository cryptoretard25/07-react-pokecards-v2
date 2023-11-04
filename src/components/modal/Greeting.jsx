import React from 'react'

function Greeting() {
  return (
    <div className="greeting-modal">
      <div className="nes-container is-rounded greeting-wrapper">
        <p>Welcome to React Pokemon Cards!</p>
        <div className="nes-container with-title is-centered">
          <p
            className="title"
            style={{ fontSize: "1.4rem", margin: "-2.5rem auto 1rem" }}
          >
            Choose difficulty
          </p>
          <label>
            <input type="radio" className="nes-radio" name="answer" checked />
            <span>Normal</span>
          </label>{" "}
          <label>
            <input type="radio" className="nes-radio" name="answer" />
            <span>Hard</span>
          </label>
        </div>
        <button type="button" className="nes-btn is-primary start-button">
          START GAME
        </button>
      </div>
    </div>
  );
}

export default Greeting