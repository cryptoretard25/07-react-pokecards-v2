import React, { useContext } from "react";
import { PokeContext } from "../../App";

function Greeting() {
  const { setShowGreeting, setFetchData } = useContext(PokeContext);

  const onStartClick = () => {
    setShowGreeting(true);
    setFetchData(true);
  };

  return (
    <div className="greeting-modal">
      <div className="nes-container is-rounded greeting-wrapper">
        <i className="nes-kirby" style={{ alignSelf: "center" }} />
        <h2 style={{ display: "block" }}>
          Welcome to <span style={{ color: "red" }}>Poké</span>Cards V2
        </h2>
        <p style={{ textAlign: "center" }}>
          Your task is to reveal all unique cards while avoiding repetitions.
          One miss, and you lose.
        </p>
        <div className="buttons-wrapper">
          <button
            onClick={onStartClick}
            type="button"
            className="nes-btn is-primary start-button"
          >
            START GAME
          </button>
          <button
            onClick={() =>
              window.open(
                "https://github.com/cryptoretard25/19-project-memory-card/tree/gameclass",
                "_blank"
              )
            }
            type="button"
            className="nes-btn is-success start-button"
          >
            VISIT REPO
          </button>
        </div>
      </div>
    </div>
  );
}

export default Greeting;
