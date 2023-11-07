import React from "react";

function Header({onQuitClick}) {
  
  return (
    <div className="header-wrapper">
      <h2 onClick={onQuitClick}>
        <img
          src={`${process.env.PUBLIC_URL}/images/pokeball.png`}
          alt="pokeball"
        />
        <div>
          <span style={{ color: "red" }}>Poké</span>
          <span>Cards</span> V2
        </div>
      </h2>
    </div>
  );
}

export default Header;
