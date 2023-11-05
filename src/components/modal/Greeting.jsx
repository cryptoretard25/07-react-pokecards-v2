import React from "react";

function Greeting({ difficulty, setDifficulty, onStartClick}) {
  const handleDifficulty = ({target})=>{
    setDifficulty(target.value)
  }

  return (
    <div className="greeting-modal">
      <div className="nes-container is-rounded greeting-wrapper">
        <i className="nes-kirby" style={{ alignSelf: "center" }} />
        <h2>Welcome to Pokemon Cards!</h2>
        <div className="nes-container with-title is-centered">
          <p
            className="title"
            style={{ fontSize: "1.4rem", margin: "-2.5rem auto 1rem" }}
          >
            Choose difficulty
          </p>
          <div>
            <label>
              <input
                type="radio"
                className="nes-radio"
                name="answer"
                value={"EASY"}
                checked={difficulty === "EASY"}
                onChange={handleDifficulty}
              />
              <span>Easy</span>
            </label>{" "}
            <label>
              <input
                type="radio"
                className="nes-radio"
                name="answer"
                value={"NORMAL"}
                checked={difficulty === "NORMAL"}
                onChange={handleDifficulty}
              />
              <span>Normal</span>
            </label>{" "}
            <label>
              <input
                type="radio"
                className="nes-radio"
                name="answer"
                value={"HARD"}
                checked={difficulty === "HARD"}
                onChange={handleDifficulty}
              />
              <span>Hard</span>
            </label>
          </div>
        </div>
        <button
          onClick={onStartClick}
          type="button"
          className="nes-btn is-primary start-button"
        >
          START GAME
        </button>
      </div>
    </div>
  );
}

export default Greeting;
