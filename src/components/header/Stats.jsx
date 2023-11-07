import React, { useContext }  from "react";
import { Container } from "react-bootstrap";
import { PokeContext } from "../../App";

function Stats() {
  const { game, pokeCards } = useContext(PokeContext);

  return (
    <Container fluid="lg">
      <div className="stats-wrapper">
        <div className="stats">
          <div className="game-progress">LEVEL: {pokeCards.level}</div>
          <div className="game-progress">
            PROGRESS: {game.currentRound}/{game.cardsMax}
          </div>
        </div>
        <div className="stats">
          <p className="score">
            <i className="nes-icon coin is-medium"></i>YOUR SCORE:{" "}
            {pokeCards.progress}
          </p>
          <p className="high-score">
            <i className="nes-icon trophy is-medium"></i>
            HIGH SCORE: {pokeCards.record}
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Stats;
