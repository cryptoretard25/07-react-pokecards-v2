import React from "react";
import { Container } from "react-bootstrap";

function Stats({ game, cardsCurrent, highScore }) {

  return (
    <Container fluid="lg">
      <div className="stats-wrapper">
        <div className="stats">
          <p className="score">
            <i className="nes-icon coin is-medium"></i> SCORE: {cardsCurrent}
          </p>
          <p className="high-score">
            <i className="nes-icon trophy is-medium"></i>
            HIGH SCORE: {highScore}
          </p>
        </div>
        <div className="game-progress">
          PROGRESS: {cardsCurrent}/{game.cardsMax}
        </div>
      </div>
    </Container>
  );
}

export default Stats;
