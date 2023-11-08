import React, { useContext }  from "react";
import { PokeContext } from "../../App";

function Error({ onQuitClick, onRestartClick }) {
  const {error} = useContext(PokeContext)

  return (
    <div className="greeting-modal">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "5rem",
          gap: "2rem",
        }}
        className="nes-container is-rounded greeting-wrapper"
      >
        <h3>Network error! </h3>
        <h3>{error}</h3>
        <div style={{ alignSelf: "center" }}>
          <button
            style={{ padding: "0.5rem 3rem", width: "18rem" }}
            type="button"
            className="nes-btn is-warning"
            onClick={onRestartClick}
          >
            Restart
          </button>{" "}
          <button
            style={{ padding: "0.5rem 3rem", width: "18rem" }}
            type="button"
            className="nes-btn is-error"
            onClick={onQuitClick}
          >
            Quit
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Error;
