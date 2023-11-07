import React, { useContext, useEffect, useRef, useState } from "react";
import { PokeContext } from "../../App";
import * as sounds from '../script/sounds'


function Greeting() {
  const { setShowGreeting, setFetchData } = useContext(PokeContext);

  const onStartClick = () => {
    sounds.mouseClick.play();
    setShowGreeting(true);
    setFetchData(true);
  };

  const onRepoClick = () => {
    sounds.mouseClick.play();
    window.open( "https://github.com/cryptoretard25/07-react-pokecards-v2", "_blank" );
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
            onClick={onRepoClick}
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
