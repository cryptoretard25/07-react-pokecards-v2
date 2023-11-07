import React, { useContext }  from "react";
import { PokeContext } from "../../App";

function Error({ onQuitClick }) {
  const {error} = useContext(PokeContext)

  return (
    <div className="greeting-modal">
      <div
        style={{
          color: "red",
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

        <button
          style={{ padding: "0.5rem 4rem" }}
          type="button"
          className="nes-btn is-warning"
          onClick={onQuitClick}
        >
          Quit
        </button>
      </div>
    </div>
  );
}

export default Error;
